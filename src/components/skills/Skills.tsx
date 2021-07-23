import { RootDiv, Heading } from "./skillsStyles";
import Card from "./Card";
import skills from "./skillsList";

const Skills = () => {
  return (
    <RootDiv>
      <Heading variant="h2">Skills</Heading>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {skills.map((skill, index) => (
          <Card key={index} title={skill.title} skills={skill.array} />
        ))}
      </div>

      {/* <Button style={{ color: "white" }}>cv</Button> */}
      <div style={{ paddingBottom: "60px" }}></div>
    </RootDiv>
  );
};

export default Skills;
