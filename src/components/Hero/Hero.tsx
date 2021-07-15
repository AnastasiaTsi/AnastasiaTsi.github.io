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
      <MyCard
        title={info[0].title}
        paragraph1={info[0].paragraph1}
        paragraph2={info[0].paragraph2}
      />
      <MyCard
        title={info[1].title}
        paragraph1={info[1].paragraph1}
        paragraph2={info[1].paragraph2}
      />
      <CommentCard />
      {/* <MyCard title={info[2].title} /> */}
      <div style={{ marginTop: "200px" }} />
    </RootDiv>
  );
};

export default Hero;
