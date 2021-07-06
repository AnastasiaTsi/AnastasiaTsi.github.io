import React, { useState } from "react";
import "./Navbar.css";
import AppBar from "@material-ui/core/AppBar";
import { StyledLink } from "../../style/navBarStyles";
import { Close, MoreVert } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <AppBar
      style={{
        boxShadow: "0px 15px 43px 42px #0E1212",
        backgroundColor: "#0E1212",
      }}
    >
      <div
        style={{
          backgroundColor: "#0E1212",
          height: "80px",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <StyledLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Typography variant="h3" component="h1">
            AT
          </Typography>
        </StyledLink>

        <div className={click ? "nav-menu active" : "nav-menu"}>
          <StyledLink
            to="/"
            className="nav-links"
            style={{ fontSize: "1.2rem" }}
            onClick={closeMobileMenu}
          >
            .is()
          </StyledLink>

          <StyledLink
            to="/about"
            className="nav-links"
            style={{ fontSize: "1.2rem" }}
            onClick={closeMobileMenu}
          >
            .about()
          </StyledLink>

          <StyledLink
            to="/tools"
            className="nav-links"
            style={{ fontSize: "1.2rem" }}
            onClick={closeMobileMenu}
          >
            .tools()
          </StyledLink>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <Close fontSize="large" /> : <MoreVert fontSize="large" />}
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
