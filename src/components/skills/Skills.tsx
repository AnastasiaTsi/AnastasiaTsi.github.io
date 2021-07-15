import { RootDiv } from "./skillsStyles";
import { Heading1 } from "./skillsStyles";
import Card from "./Card";

const Skills = () => {
  return (
    <RootDiv>
      <Heading1 variant="h2">Skills</Heading1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <Card title={"Technical"} />
        <Card title={"Soft"} />
      </div>
      <div style={{ paddingBottom: "60px" }}></div>
    </RootDiv>
  );
};

export default Skills;
