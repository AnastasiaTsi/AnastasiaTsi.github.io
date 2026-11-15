import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import Skills from "../components/skills/Skills";
import styled from "styled-components";
import colors from "../style/colors";

const Footer = styled.footer`
  width: min(100% - (var(--space-page) * 2), var(--max-width));
  margin: 0 auto;
  padding: 0 0 3rem;
  border-top: 1px solid rgba(18, 21, 26, 0.1);
  padding-top: 1.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  color: ${colors.slate};
  font-size: 0.9rem;
`;

const Mono = styled.span`
  font-family: var(--font-mono);
  color: ${colors.aegean};
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${colors.aegean};
    border-bottom-color: ${colors.aegean};
  }
`;

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <Footer>
        <span>
          Anastasia Tsilepi <Mono>.is()</Mono>
        </span>
        <span>
          <FooterLink href="mailto:an.tsilepi@gmail.com">
            an.tsilepi@gmail.com
          </FooterLink>
          {" · "}
          <FooterLink
            href="/Anastasia-Tsilepi-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </FooterLink>
          {" · "}
          Athens
        </span>
      </Footer>
    </>
  );
};

export default Home;
