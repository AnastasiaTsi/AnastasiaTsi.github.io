import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../style/colors";

export const NavRoot = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  background: rgba(238, 241, 244, 0.72);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(18, 21, 26, 0.06);
`;

export const NavInner = styled.div`
  width: min(100% - (var(--space-page) * 2), var(--max-width));
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const BrandLink = styled(Link)`
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${colors.ink};
  text-decoration: none;

  span {
    color: ${colors.aegean};
    font-family: var(--font-mono);
    font-size: 0.85em;
    font-weight: 500;
  }
`;

export const NavLinks = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 768px) {
    position: absolute;
    top: var(--nav-height);
    right: 0;
    left: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 0.75rem var(--space-page) 1.25rem;
    background: rgba(238, 241, 244, 0.96);
    border-bottom: 1px solid rgba(18, 21, 26, 0.08);
    transform: translateY(${({ $open }) => ($open ? "0" : "-120%")});
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition: transform 0.35s ease, opacity 0.25s ease;
  }
`;

export const NavLink = styled(Link)`
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 500;
  color: ${colors.slate};
  text-decoration: none;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  transition: color 0.2s ease, background 0.2s ease;

  &:hover {
    color: ${colors.ink};
    background: rgba(31, 111, 120, 0.08);
  }

  @media (max-width: 768px) {
    padding: 0.85rem 0.5rem;
    border-radius: 0.5rem;
  }
`;

export const ExternalNavButton = styled.button`
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 500;
  color: ${colors.white};
  background: ${colors.ink};
  border: none;
  cursor: pointer;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  margin-left: 0.35rem;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: ${colors.aegean};
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0 0;
    width: 100%;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: 1px solid rgba(18, 21, 26, 0.12);
  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  color: ${colors.ink};
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

/* Keep these exports so older imports don't break if referenced */
export const StyledAppBar = NavRoot;
export const StyledLink = NavLink;
export const ToolBar = NavInner;
