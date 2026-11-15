import styled, { keyframes } from "styled-components";
import colors from "../../style/colors";

const drift = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(2%, -1.5%, 0) scale(1.03); }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  align-items: center;
  padding: calc(var(--nav-height) + 1.25rem) 0 3rem;
  position: relative;
  overflow: hidden;

  @media (max-height: 760px) {
    align-items: end;
    padding-bottom: 2.5rem;
  }
`;

export const HeroInner = styled.div`
  width: min(100% - (var(--space-page) * 2), var(--max-width));
  margin-inline: auto;
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1.15rem;
  max-width: 42rem;

  @media (max-height: 760px) {
    gap: 0.85rem;
  }
`;

export const Atmosphere = styled.div`
  position: absolute;
  inset: 8% -5% auto auto;
  width: min(52vw, 34rem);
  height: min(52vw, 34rem);
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 35%, rgba(31, 111, 120, 0.28), transparent 58%),
    radial-gradient(circle at 70% 70%, rgba(107, 119, 133, 0.18), transparent 55%);
  filter: blur(8px);
  animation: ${drift} 18s ease-in-out infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: 700px) {
    width: 70vw;
    height: 70vw;
    inset: 12% -20% auto auto;
    opacity: 0.7;
  }
`;

export const GridAccent = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.35;
  background-image:
    linear-gradient(rgba(18, 21, 26, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(18, 21, 26, 0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 70% 60% at 70% 40%, black, transparent 75%);
`;

export const Signature = styled.p`
  margin: 0;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  color: ${colors.aegean};
  letter-spacing: 0.02em;
`;

export const Name = styled.h1`
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.75rem, 8vw, 5.5rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: ${colors.ink};

  @media (max-height: 760px) {
    font-size: clamp(2.4rem, 7.5vh, 4.25rem);
  }
`;

export const Role = styled.p`
  margin: 0.25rem 0 0;
  font-size: clamp(1.1rem, 2.2vw, 1.35rem);
  font-weight: 400;
  color: ${colors.slate};
  line-height: 1.45;
  max-width: 30ch;
`;

export const Lead = styled.p`
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.6;
  color: ${colors.ink};
  max-width: 38ch;
  opacity: 0.9;
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.75rem;
`;

export const PrimaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.35rem;
  border-radius: 999px;
  background: ${colors.ink};
  color: ${colors.white};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${colors.aegean};
  }
`;

export const SecondaryCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.35rem;
  border-radius: 999px;
  border: 1px solid rgba(18, 21, 26, 0.14);
  background: rgba(255, 255, 255, 0.45);
  color: ${colors.ink};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: ${colors.aegean};
    background: rgba(31, 111, 120, 0.08);
  }
`;

export const ScrollHint = styled.a`
  position: absolute;
  left: var(--space-page);
  bottom: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: ${colors.slate};
  text-decoration: none;
  letter-spacing: 0.04em;

  @media (max-width: 700px) {
    display: none;
  }
`;
