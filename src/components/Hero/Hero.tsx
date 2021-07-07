import { Typography } from "@material-ui/core/";
import { Heading1 } from "../../style/typographyStyles";
import React from "react";
import { RootDiv, CardDiv } from "./heroStyles";

const Hero = () => {
  return (
    <>
      <RootDiv>
        <div style={{ marginTop: "80px" }} />

        <CardDiv style={{ marginTop: "190px" }}>
          <Heading1 variant="h2" component="h1">
            Anastasia
            <span style={{ color: "#682ae9", fontFamily: "courier" }}>
              .is()
            </span>
          </Heading1>
        </CardDiv>

        <CardDiv style={{ marginTop: "30px" }}>
          <Typography
            style={{
              fontWeight: "bold",
              fontFamily: "courier",
              marginBottom: "4%",
            }}
            variant="body1"
            gutterBottom
          >
            Just someone who keeps on exploring new technologies in a continues
            attempt to make some cool web apps.
          </Typography>

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
        <CardDiv style={{ marginTop: "150px" }}>
          <Typography
            style={{ color: "#fff" }}
            variant="h2"
            component="h1"
            gutterBottom
          >
            h2. Heading
          </Typography>
          <Typography style={{ color: "#555" }} variant="h6" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
        </CardDiv>

        <CardDiv style={{ marginTop: "150px" }}>
          <Typography
            style={{ color: "#fff" }}
            variant="h2"
            component="h1"
            gutterBottom
          >
            h2. Heading
          </Typography>
          <Typography style={{ color: "#555" }} variant="h6" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
          <Typography variant="body1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
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
