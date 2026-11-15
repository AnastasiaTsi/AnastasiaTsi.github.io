import {
  Group,
  Groups,
  GroupTitle,
  Heading,
  Intro,
  RootDiv,
  SkillChip,
  SkillList,
} from "./skillsStyles";
import skills from "./skillsList";

const Skills = () => {
  return (
    <RootDiv id="skills" aria-labelledby="skills-heading">
      <Heading id="skills-heading">Toolkit</Heading>
      <Intro>
        The stack behind reusable libraries, clear documentation, and faster
        product delivery.
      </Intro>
      <Groups>
        {skills.map((skill) => (
          <Group key={skill.title}>
            <GroupTitle>{skill.title}</GroupTitle>
            <SkillList>
              {skill.array.map((item) => (
                <SkillChip key={item}>{item}</SkillChip>
              ))}
            </SkillList>
          </Group>
        ))}
      </Groups>
    </RootDiv>
  );
};

export default Skills;
