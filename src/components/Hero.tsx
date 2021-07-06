import React from "react";

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
        }}
      >
        {/* <h1 style={{ backgroundColor: "gold", color: "rebeccapurple" }}>Hero</h1> */}
      </div>
    </>
  );
};

export default Hero;
