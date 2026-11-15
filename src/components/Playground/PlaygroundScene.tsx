import { forwardRef, KeyboardEvent } from "react";
import {
  GroundSvg,
  PlantHit,
  PlantRow,
  SceneRoot,
} from "./playgroundStyles";

type PlaygroundSceneProps = {
  grown: Record<string, boolean>;
  onPlantEnter: (id: string) => void;
  onPlantLeave: (id: string) => void;
  onPlantClick: (id: string) => void;
};

const handleKey =
  (action: () => void) => (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

const PlaygroundScene = forwardRef<HTMLDivElement, PlaygroundSceneProps>(
  function PlaygroundScene(
    { grown, onPlantEnter, onPlantLeave, onPlantClick },
    ref
  ) {
    return (
      <SceneRoot ref={ref}>
        <GroundSvg viewBox="0 0 480 240" aria-hidden="true">
          <path
            d="M40 198 H440"
            stroke="rgba(18,21,26,0.12)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse
            cx="240"
            cy="210"
            rx="180"
            ry="10"
            fill="rgba(31,111,120,0.06)"
          />
        </GroundSvg>

        <PlantRow>
          {/* Monstera */}
          <PlantHit
            role="button"
            tabIndex={0}
            aria-label={
              grown.monstera
                ? "Monstera is thriving. Click again to reset"
                : "Water the monstera"
            }
            data-plant="monstera"
            className="playground-hotspot"
            onMouseEnter={() => onPlantEnter("monstera")}
            onMouseLeave={() => onPlantLeave("monstera")}
            onFocus={() => onPlantEnter("monstera")}
            onBlur={() => onPlantLeave("monstera")}
            onClick={() => onPlantClick("monstera")}
            onKeyDown={handleKey(() => onPlantClick("monstera"))}
          >
            <svg viewBox="0 20 100 190" aria-hidden="true">
              <g data-plant-sway="monstera">
                <ellipse
                  cx="48"
                  cy="188"
                  rx="28"
                  ry="7"
                  fill="rgba(18,21,26,0.06)"
                />
                <path
                  d="M28 188 h40 l-4 -22 h-32 z"
                  fill="#C4A484"
                  stroke="#12151A"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M48 166 V118"
                  stroke="#1F6F78"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <g data-leaves="monstera">
                  <path
                    d="M48 130 C28 118, 18 98, 34 88 C48 96, 52 112, 48 130Z"
                    fill="#1F6F78"
                    opacity="0.9"
                  />
                  <path
                    d="M48 128 C68 114, 78 96, 62 86 C50 96, 52 114, 48 128Z"
                    fill="#16555C"
                  />
                  <path
                    d="M48 145 C30 140, 22 126, 36 118 C46 126, 50 136, 48 145Z"
                    fill="#2A858F"
                    opacity="0.85"
                  />
                </g>
                <g data-bloom="monstera" transform="translate(48 88)">
                  <g style={{ opacity: grown.monstera ? 1 : 0 }}>
                    <circle r="11" fill="#E8A838" />
                    <circle cx="-6" cy="2" r="7" fill="#F0B84A" opacity="0.9" />
                    <circle cx="7" cy="3" r="6" fill="#F5C76A" opacity="0.85" />
                    <circle r="4" fill="#FFF6DE" />
                  </g>
                </g>
              </g>
            </svg>
          </PlantHit>

          {/* Snake plant */}
          <PlantHit
            role="button"
            tabIndex={0}
            aria-label={
              grown.snake
                ? "Snake plant is happy. Click again to reset"
                : "Encourage the snake plant"
            }
            data-plant="snake"
            className="playground-hotspot"
            onMouseEnter={() => onPlantEnter("snake")}
            onMouseLeave={() => onPlantLeave("snake")}
            onFocus={() => onPlantEnter("snake")}
            onBlur={() => onPlantLeave("snake")}
            onClick={() => onPlantClick("snake")}
            onKeyDown={handleKey(() => onPlantClick("snake"))}
          >
            <svg viewBox="0 20 90 190" aria-hidden="true">
              <g data-plant-sway="snake">
                <ellipse
                  cx="40"
                  cy="188"
                  rx="24"
                  ry="6"
                  fill="rgba(18,21,26,0.06)"
                />
                <path
                  d="M22 188 h36 l-3 -18 h-30 z"
                  fill="#A8B0BA"
                  stroke="#12151A"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <g data-leaves="snake">
                  <path
                    d="M32 170 C30 140, 28 110, 34 95"
                    stroke="#1F6F78"
                    strokeWidth="7"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M40 170 C42 138, 44 112, 40 98"
                    stroke="#16555C"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M48 170 C50 145, 52 120, 48 105"
                    stroke="#2A858F"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>
                <g data-bloom="snake" transform="translate(40 86)">
                  <g style={{ opacity: grown.snake ? 1 : 0 }}>
                    <path d="M-10 4 L0 -18 L10 4 Z" fill="#1F6F78" />
                    <path
                      d="M-14 8 L-4 -10 L4 8 Z"
                      fill="#2A858F"
                      opacity="0.85"
                    />
                    <path
                      d="M-4 8 L6 -10 L14 8 Z"
                      fill="#16555C"
                      opacity="0.85"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </PlantHit>

          {/* Pothos */}
          <PlantHit
            role="button"
            tabIndex={0}
            aria-label={
              grown.pothos
                ? "Pothos is cascading. Click again to reset"
                : "Tug the pothos vine"
            }
            data-plant="pothos"
            className="playground-hotspot"
            onMouseEnter={() => onPlantEnter("pothos")}
            onMouseLeave={() => onPlantLeave("pothos")}
            onFocus={() => onPlantEnter("pothos")}
            onBlur={() => onPlantLeave("pothos")}
            onClick={() => onPlantClick("pothos")}
            onKeyDown={handleKey(() => onPlantClick("pothos"))}
          >
            <svg viewBox="0 20 100 190" aria-hidden="true">
              <g data-plant-sway="pothos">
                <ellipse
                  cx="36"
                  cy="188"
                  rx="22"
                  ry="6"
                  fill="rgba(18,21,26,0.06)"
                />
                <path
                  d="M18 188 h36 l-4 -20 h-28 z"
                  fill="#D9C4A8"
                  stroke="#12151A"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M36 168 C40 150, 52 140, 60 128"
                  stroke="#1F6F78"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <g data-leaves="pothos">
                  <ellipse
                    cx="42"
                    cy="152"
                    rx="10"
                    ry="7"
                    fill="#1F6F78"
                    transform="rotate(-20 42 152)"
                  />
                  <ellipse
                    cx="54"
                    cy="138"
                    rx="9"
                    ry="6"
                    fill="#16555C"
                    transform="rotate(15 54 138)"
                  />
                  <ellipse
                    cx="62"
                    cy="126"
                    rx="8"
                    ry="5.5"
                    fill="#2A858F"
                    transform="rotate(-10 62 126)"
                  />
                </g>
                <g data-bloom="pothos" transform="translate(72 110)">
                  <g style={{ opacity: grown.pothos ? 1 : 0 }}>
                    <ellipse
                      rx="12"
                      ry="8"
                      fill="#E8A838"
                      transform="rotate(25)"
                    />
                    <ellipse
                      cx="-10"
                      cy="6"
                      rx="9"
                      ry="6"
                      fill="#F0B84A"
                      transform="rotate(-15)"
                      opacity="0.9"
                    />
                    <ellipse
                      cx="8"
                      cy="8"
                      rx="8"
                      ry="5.5"
                      fill="#2A858F"
                      transform="rotate(40)"
                      opacity="0.85"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </PlantHit>
        </PlantRow>
      </SceneRoot>
    );
  }
);

export default PlaygroundScene;
