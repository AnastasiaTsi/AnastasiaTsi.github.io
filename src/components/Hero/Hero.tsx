import MainCard from "./MainCard";
import MyCard from "./MyCard";

import info from "./info";
import CommentCard from "./CommentCard";
import { RootDiv } from "../../style/genericStyles";

const Hero = () => {
  return (
    <RootDiv>
      <div style={{ marginTop: "80px" }} />

      <MainCard />

      {info.map((info, index) => (
        <MyCard key={index} title={info.title} paragraphs={info.paragraphs} />
      ))}

      <CommentCard />
      <div style={{ marginTop: "200px" }} />
    </RootDiv>
  );
};

export default Hero;
