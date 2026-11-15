import styled from "styled-components";
import colors from "../../style/colors";

export const Section = styled.section`
  width: min(100% - (var(--space-page) * 2), var(--max-width));
  margin: 0 auto;
  padding: 2rem 0 4rem;
`;

export const Signature = styled.p`
  margin: 0 0 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: ${colors.aegean};
`;

export const Heading = styled.h2`
  margin: 0 0 0.5rem;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${colors.ink};
`;

export const Intro = styled.p`
  margin: 0 0 0.5rem;
  max-width: 40ch;
  color: ${colors.slate};
  font-size: 1.05rem;
  line-height: 1.55;
`;

export const Hint = styled.p`
  margin: 0 0 1.75rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: ${colors.slate};
  opacity: 0.9;
`;

export const Stage = styled.div<{ $canCursor?: boolean }>`
  position: relative;
  border: 1px solid rgba(18, 21, 26, 0.1);
  border-radius: 1.25rem;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.55) 0%, rgba(238, 241, 244, 0.35) 100%),
    radial-gradient(ellipse 70% 50% at 80% 20%, rgba(31, 111, 120, 0.1), transparent 60%);
  overflow: hidden;
  padding: 1.25rem 0.75rem 0.5rem;
  isolation: isolate;

  @media (min-width: 700px) {
    padding: 1.75rem 1.5rem 0.75rem;
  }

  @media (hover: hover) and (pointer: fine) {
    cursor: ${({ $canCursor }) => ($canCursor ? "none" : "auto")};

    .playground-hotspot,
    svg,
    button,
    span {
      cursor: ${({ $canCursor }) => ($canCursor ? "none" : "pointer")};
    }
  }

  .playground-hotspot {
    outline: none;
  }

  .playground-hotspot:focus-visible {
    outline: 2px solid ${colors.aegean};
    outline-offset: 4px;
  }
`;

export const SceneRoot = styled.div`
  position: relative;
  width: 100%;
  max-height: 280px;
`;

export const GroundSvg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  max-height: 280px;
  pointer-events: none;
`;

export const PlantRow = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  padding: 0 6% 8%;
  pointer-events: none;
`;

export const PlantHit = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 8% 4% 0;
  box-sizing: border-box;
  pointer-events: auto;
  border-radius: 1rem;
  -webkit-tap-highlight-color: transparent;

  svg {
    display: block;
    width: 100%;
    max-width: 7.5rem;
    height: auto;
    overflow: visible;
    pointer-events: none;
  }
`;

export const WaterDrops = styled.div<{ $visible: boolean; $active: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 40px;
  pointer-events: none;
  z-index: 5;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translate3d(-10px, -4px, 0)
    scale(${({ $active }) => ($active ? 1.08 : 1)});
  transition: opacity 0.15s ease, transform 0.2s ease;
  filter: drop-shadow(0 1px 2px rgba(18, 21, 26, 0.1));

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .drop {
    transform-box: fill-box;
    transform-origin: center;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  ${({ $active }) =>
    $active
      ? `
    .drop-a { transform: translate(0px, 4px); }
    .drop-b { transform: translate(-1px, 5px); opacity: 0.95; }
    .drop-c { transform: translate(1px, -10px); opacity: 0.85; }
  `
      : ""}

  @media (hover: none), (pointer: coarse) {
    display: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.15s ease;
    .drop {
      transition: none;
    }
  }
`;

export const Status = styled.p`
  margin: 1rem 0 0;
  min-height: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: ${colors.aegean};
`;
