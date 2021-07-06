import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { StyledLink } from "../style/headerStyles";
import { Close, MoreVert } from "@material-ui/icons";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  function ElevationScroll(props: any) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 10 : 0,
    });
  }

  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
  };

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
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          AT
        </Link>

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
          {click ? (
            <Close className="fa-times" />
          ) : (
            <MoreVert className="fa-bars" />
          )}
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
