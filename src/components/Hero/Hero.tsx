import { Typography } from "@material-ui/core/";
import MainCard from "./MainCard";
import MyCard from "./MyCard";
import { RootDiv, CardDiv } from "./heroStyles";

const Hero = () => {
  return (
    <>
      <RootDiv>
        <div style={{ marginTop: "80px" }} />

        <MainCard />
        <MyCard title="education" />
        <MyCard title="work" />
        <MyCard title="hobbies" />

        <CardDiv>
          <Typography
            style={{ fontFamily: "courier", fontWeight: "bold" }}
            variant="h5"
            gutterBottom
          >
            /* <br />
            - Web Development <br />- at its most
            <br />- <span style={{ color: "#555" }}>mediocre</span> form <br />
            */
          </Typography>
        </CardDiv>
      </RootDiv>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
    </>
  );
};

export default Hero;
