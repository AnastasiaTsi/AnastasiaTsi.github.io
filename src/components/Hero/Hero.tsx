import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Atmosphere,
  CtaRow,
  GridAccent,
  HeroInner,
  HeroSection,
  Lead,
  Name,
  PrimaryCta,
  Role,
  ScrollHint,
  SecondaryCta,
  Signature,
} from "./heroStyles";

const Hero = () => {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.1,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <HeroSection ref={rootRef} aria-label="Introduction">
      <Atmosphere aria-hidden="true" />
      <GridAccent aria-hidden="true" />
      <HeroInner>
        <Signature data-hero-item>Anastasia.is()</Signature>
        <Name data-hero-item>
          Anastasia
          <br />
          Tsilepi
        </Name>
        <Role data-hero-item>
          Front End Developer · Design System Lead · Athens
        </Role>
        <Lead data-hero-item>
          5+ years building scalable web apps and enterprise platforms. I lead
          Hack The Box’s Vue 3 design system - a component library used across
          31 projects.
        </Lead>
        <CtaRow data-hero-item>
          <PrimaryCta
            href="/Anastasia-Tsilepi-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download resume
          </PrimaryCta>
          <SecondaryCta href="#work">See experience</SecondaryCta>
        </CtaRow>
      </HeroInner>
      <ScrollHint href="#work">scroll</ScrollHint>
    </HeroSection>
  );
};

export default Hero;
