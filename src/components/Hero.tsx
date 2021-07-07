import { Typography } from "@material-ui/core/";
import { Heading1 } from "../style/typographyStyles";
import React from "react";

const style = {
  margin: "auto",
  inset: 0,
  padding: "2%",
  width: "50%",
  height: "fit-content",
  borderRadius: "20px",
  color: "grey",
};

const Hero = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: `url(images/bl-rain.jpg)`,
          backgroundSize: "cover",
          overflow: "hidden",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div style={{ marginTop: "80px" }} />

        <div style={{ ...style, marginTop: "150px" }}>
          <Heading1
            variant="h2"
            component="h1"
            gutterBottom
            // style={{ fontFamily: "courier" }}
          >
            Anastasia<span style={{ color: "rebeccapurple" }}>.is()</span>
          </Heading1>
          <Typography
            style={{ fontFamily: "courier", fontWeight: "bold" }}
            variant="h5"
            gutterBottom
          >
            /* <br />
            - subtitle1. Lorem ipsum <br />- dolor sit amet, adipisicing
            <br />- elit. Quos blanditiis tenetur <br />
            */
          </Typography>
          <Typography
            style={{ fontWeight: "bold", fontFamily: "courier" }}
            variant="body1"
            gutterBottom
          >
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur
          </Typography>
        </div>

        <div style={{ ...style, marginTop: "150px" }}>
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
        </div>
        <div style={{ ...style, marginTop: "150px" }}>
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
        </div>

        <div style={{ ...style, marginTop: "150px" }}>
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
        </div>
      </div>
      <div style={style}></div>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
      <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1>
    </>
  );
};

export default Hero;
