import styled from "styled-components";
import colors from "../../style/colors";

export const RootDiv = styled.section`
  width: min(100% - (var(--space-page) * 2), var(--max-width));
  margin: 0 auto;
  padding: 2rem 0 5.5rem;
`;

export const Heading = styled.h2`
  margin: 0 0 0.5rem;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${colors.ink};
  text-align: left;
  padding: 0;
`;

export const Intro = styled.p`
  margin: 0 0 2.25rem;
  max-width: 36ch;
  color: ${colors.slate};
  font-size: 1.05rem;
  line-height: 1.55;
`;

export const Groups = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

export const Group = styled.div``;

export const GroupTitle = styled.h3`
  margin: 0 0 1rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: ${colors.aegean};
  letter-spacing: 0.02em;
`;

export const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

export const SkillChip = styled.li`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${colors.ink};
  padding: 0.55rem 0.9rem;
  border: 1px solid rgba(18, 21, 26, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
`;

export const CardDiv = styled.div``;
