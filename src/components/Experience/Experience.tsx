import styled from "styled-components";
import colors from "../../style/colors";

const Section = styled.section`
  width: min(100% - (var(--space-page) * 2), var(--max-width));
  margin: 0 auto;
  padding: 5rem 0 3rem;
`;

const Heading = styled.h2`
  margin: 0 0 0.5rem;
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  color: ${colors.ink};
`;

const Intro = styled.p`
  margin: 0 0 2.75rem;
  max-width: 42ch;
  color: ${colors.slate};
  font-size: 1.05rem;
  line-height: 1.55;
`;

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba(18, 21, 26, 0.1);
`;

const Item = styled.li`
  display: grid;
  gap: 0.65rem 2rem;
  padding: 1.6rem 0;
  border-bottom: 1px solid rgba(18, 21, 26, 0.1);

  @media (min-width: 800px) {
    grid-template-columns: 11rem 1fr;
    align-items: baseline;
  }
`;

const Dates = styled.span`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: ${colors.slate};
  letter-spacing: 0.01em;
`;

const Role = styled.h3`
  margin: 0 0 0.35rem;
  font-family: var(--font-sans);
  font-size: 1.15rem;
  font-weight: 600;
  color: ${colors.ink};
`;

const Detail = styled.p`
  margin: 0;
  color: ${colors.slate};
  line-height: 1.55;
  max-width: 52ch;
`;

const Highlights = styled.ul`
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.4rem;
  max-width: 52ch;
`;

const Highlight = styled.li`
  color: ${colors.slate};
  line-height: 1.5;
  font-size: 0.95rem;
  padding-left: 0.9rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.55em;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background: ${colors.aegean};
  }
`;

const EduBlock = styled.div`
  margin-top: 3.5rem;
  padding: 1.75rem 0 0;
  border-top: 1px solid rgba(18, 21, 26, 0.1);
`;

const EduLabel = styled.p`
  margin: 0 0 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: ${colors.aegean};
`;

const EduTitle = styled.p`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${colors.ink};
`;

const EduMeta = styled.p`
  margin: 0.35rem 0 0;
  color: ${colors.slate};
`;

const roles = [
  {
    dates: "May 2022 — Present",
    title: "Front End Developer · Hack The Box",
    detail:
      "Design System Lead for the Vue 3 UI library — Storybook docs, npm publishing, and clear guidelines used by 31 internal and external projects.",
    highlights: [
      "Roadmap and sprint ownership in Jira across new components and maintenance",
      "Partner with designers and engineers across product teams",
      "Agent-friendly docs so AI coding tools can use the system",
      "Also supported the Vue 3 CTF platform and company SSO product",
    ],
  },
  {
    dates: "Sep 2021 — May 2022",
    title: "Front End Developer · Cognity",
    detail:
      "React work on Boost, a corporate sales automation app for leads, opportunities, and offers — plus front-end support for the Vodafone homepage.",
  },
  {
    dates: "Sep 2020 — Aug 2021",
    title: "Full Stack Developer · Dataverse",
    detail:
      "Built and supported a MERN stack website for Arcon, covering user management, AR project handling, and media library administration.",
  },
  {
    dates: "Jan 2019 — Aug 2019",
    title: "Internship · Greek Parliament Informatics Center",
    detail:
      "Developed and supported mobile and web applications for internal use at the Parliament’s Informatics Center.",
  },
];

const Experience = () => {
  return (
    <Section id="work">
      <Heading>Experience</Heading>
      <Intro>
        From design systems at Hack The Box to product UI at Cognity and full-stack
        work at Dataverse.
      </Intro>
      <List>
        {roles.map((role) => (
          <Item key={role.title}>
            <Dates>{role.dates}</Dates>
            <div>
              <Role>{role.title}</Role>
              <Detail>{role.detail}</Detail>
              {role.highlights && (
                <Highlights>
                  {role.highlights.map((item) => (
                    <Highlight key={item}>{item}</Highlight>
                  ))}
                </Highlights>
              )}
            </div>
          </Item>
        ))}
      </List>

      <EduBlock>
        <EduLabel>Education</EduLabel>
        <EduTitle>
          Bachelor’s Degree, Informatics and Telecommunications
        </EduTitle>
        <EduMeta>University of the Peloponnese · 2021</EduMeta>
      </EduBlock>
    </Section>
  );
};

export default Experience;
