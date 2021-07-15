import MainCard from "./MainCard";
import MyCard from "./MyCard";
import { RootDiv } from "./heroStyles";
import info from "./info";
import CommentCard from "./CommentCard";

const Hero = () => {
  return (
    <RootDiv>
      <div style={{ marginTop: "80px" }} />

      <MainCard />

      {info.map((info, index) => (
        <MyCard
          key={index}
          title={info.title}
          paragraph1={info.paragraph1}
          paragraph2={info.paragraph2}
        />
      ))}

      <CommentCard />
      <div style={{ marginTop: "200px" }} />
    </RootDiv>
  );
};

export default Hero;
