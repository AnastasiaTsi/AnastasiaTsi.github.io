import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import PlaygroundScene from "./PlaygroundScene";
import {
  Heading,
  Hint,
  Intro,
  Section,
  Signature,
  Stage,
  Status,
  WaterDrops,
} from "./playgroundStyles";

const PLANT_IDS = ["monstera", "snake", "pothos"] as const;
type PlantId = typeof PLANT_IDS[number];

const STATUS: Record<string, string> = {
  monstera: "Monstera says thanks.",
  snake: "Snake plant stands a little taller.",
  pothos: "Pothos reaches for the window.",
  idle: "Hover a plant, then click to grow it.",
};

const Playground = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canRef = useRef<HTMLDivElement>(null);
  const idleByPlant = useRef<Record<string, gsap.core.Tween>>({});
  const reduceMotion = useRef(false);

  const [grown, setGrown] = useState<Record<string, boolean>>({
    monstera: false,
    snake: false,
    pothos: false,
  });
  const [status, setStatus] = useState(STATUS.idle);
  const [canVisible, setCanVisible] = useState(false);
  const [canTipping, setCanTipping] = useState(false);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setFinePointer(mq.matches);
    sync();
    mq.addEventListener?.("change", sync);
    return () => mq.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = sceneRef.current;
    if (!scene || reduceMotion.current) return;

    const ctx = gsap.context(() => {
      PLANT_IDS.forEach((id, index) => {
        const el = scene.querySelector(`[data-plant-sway="${id}"]`);
        if (!el) return;
        idleByPlant.current[id] = gsap.to(el, {
          rotation: index % 2 === 0 ? 4 : -4,
          transformOrigin: "50% 100%",
          duration: 2.1 + index * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, scene);

    return () => {
      Object.values(idleByPlant.current).forEach((t) => t.kill());
      idleByPlant.current = {};
      ctx.revert();
    };
  }, []);

  const moveCan = useCallback((clientX: number, clientY: number) => {
    const stage = stageRef.current;
    const can = canRef.current;
    if (!stage || !can) return;
    const rect = stage.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    can.style.left = `${x}px`;
    can.style.top = `${y}px`;
  }, []);

  const onPlantEnter = useCallback((id: string) => {
    setCanTipping(true);
    if (reduceMotion.current || !sceneRef.current) return;
    const el = sceneRef.current.querySelector(`[data-plant-sway="${id}"]`);
    const leaves = sceneRef.current.querySelector(`[data-leaves="${id}"]`);
    if (!el) return;
    idleByPlant.current[id]?.pause();
    const baseLeafScale = grown[id] ? 1.35 : 1;
    gsap.to(el, {
      rotation: 12,
      scale: 1.08,
      transformOrigin: "50% 100%",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
    if (leaves) {
      gsap.to(leaves, {
        scale: baseLeafScale * 1.12,
        transformOrigin: "50% 100%",
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [grown]);

  const onPlantLeave = useCallback((id: string) => {
    setCanTipping(false);
    if (reduceMotion.current || !sceneRef.current) return;
    const el = sceneRef.current.querySelector(`[data-plant-sway="${id}"]`);
    const leaves = sceneRef.current.querySelector(`[data-leaves="${id}"]`);
    if (!el) return;
    const grownScale = grown[id] ? 1.35 : 1;
    gsap.to(el, {
      rotation: 0,
      scale: 1,
      transformOrigin: "50% 100%",
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
      onComplete: () => {
        idleByPlant.current[id]?.restart();
      },
    });
    if (leaves) {
      gsap.to(leaves, {
        scale: grownScale,
        transformOrigin: "50% 100%",
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [grown]);

  const onPlantClick = useCallback((id: string) => {
    setCanTipping(true);

    const plantId = id as PlantId;
    setGrown((prev) => {
      const next = !prev[plantId];
      const scene = sceneRef.current;
      const sway = scene?.querySelector(`[data-plant-sway="${plantId}"]`);
      const bloom = scene?.querySelector(
        `[data-bloom="${plantId}"] > g`
      ) as Element | null;
      const leaves = scene?.querySelector(`[data-leaves="${plantId}"]`);

      if (reduceMotion.current) {
        if (bloom) gsap.set(bloom, { opacity: next ? 1 : 0, scale: next ? 1.4 : 0.4 });
        if (leaves) gsap.set(leaves, { scale: next ? 1.35 : 1 });
      } else if (scene) {
        if (sway) {
          gsap.fromTo(
            sway,
            { y: 0 },
            {
              y: -10,
              duration: 0.28,
              ease: "power2.out",
              yoyo: true,
              repeat: 1,
              transformOrigin: "50% 100%",
            }
          );
        }
        if (bloom) {
          gsap.fromTo(
            bloom,
            { opacity: next ? 0 : 1, scale: next ? 0.2 : 1.4 },
            {
              opacity: next ? 1 : 0,
              scale: next ? 1.45 : 0.2,
              duration: 0.55,
              ease: "back.out(2.4)",
              transformOrigin: "50% 50%",
            }
          );
        }
        if (leaves) {
          gsap.to(leaves, {
            scale: next ? 1.35 : 1,
            duration: 0.55,
            ease: "back.out(1.6)",
            transformOrigin: "50% 100%",
            overwrite: "auto",
          });
        }
      }

      setStatus(next ? STATUS[plantId] : STATUS.idle);
      return { ...prev, [plantId]: next };
    });
  }, []);

  return (
    <Section id="playground" aria-labelledby="playground-heading">
      <Signature>Anastasia.is(play)</Signature>
      <Heading id="playground-heading">Outside the ticket queue</Heading>
      <Intro>Outside of code: plants that need watering (and a little attention).</Intro>
      <Hint>Hover the plants · click to grow</Hint>
      <Stage
        ref={stageRef}
        $canCursor={finePointer}
        onMouseEnter={(e) => {
          if (!finePointer) return;
          setCanVisible(true);
          moveCan(e.clientX, e.clientY);
        }}
        onMouseLeave={() => {
          setCanVisible(false);
          setCanTipping(false);
        }}
        onMouseMove={(e) => {
          if (!finePointer) return;
          moveCan(e.clientX, e.clientY);
        }}
      >
        <PlaygroundScene
          ref={sceneRef}
          grown={grown}
          onPlantEnter={onPlantEnter}
          onPlantLeave={onPlantLeave}
          onPlantClick={onPlantClick}
        />
        <WaterDrops
          ref={canRef}
          $visible={canVisible && finePointer}
          $active={canTipping}
          aria-hidden="true"
        >
          <svg viewBox="0 0 36 40" fill="none">
            {/* Left — mid height */}
            <path
              className="drop drop-b"
              d="M7 10 C7 10 2 17 2 21 a5 5 0 0 0 10 0 C12 17 7 10 7 10Z"
              fill="#2A858F"
              stroke="#12151A"
              strokeWidth="1.2"
              strokeLinejoin="round"
              opacity="0.9"
            />
            {/* Center — highest */}
            <path
              className="drop drop-a"
              d="M18 2 C18 2 11 11 11 17 a7 7 0 0 0 14 0 C25 11 18 2 18 2Z"
              fill="#1F6F78"
              stroke="#12151A"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Right — lowest */}
            <path
              className="drop drop-c"
              d="M29 18 C29 18 25 24 25 28 a4.5 4.5 0 0 0 9 0 C34 24 29 18 29 18Z"
              fill="#16555C"
              stroke="#12151A"
              strokeWidth="1.2"
              strokeLinejoin="round"
              opacity="0.85"
            />
          </svg>
        </WaterDrops>
        <Status aria-live="polite">{status}</Status>
      </Stage>
    </Section>
  );
};

export default Playground;
