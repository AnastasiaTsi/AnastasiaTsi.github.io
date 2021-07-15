import { useState } from "react";
import "./Navbar.css";
import { StyledAppBar, StyledLink, ToolBar } from "../../style/navBarStyles";
import { Close, MoreVert } from "@material-ui/icons";
import { Typography } from "@material-ui/core";

type NavBarProps = {
  AppBarColor: string;
};

const Navbar = ({ AppBarColor }: NavBarProps) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <StyledAppBar style={{ backgroundColor: AppBarColor }}>
      <ToolBar>
        <StyledLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <Typography variant="h3" component="h1">
            AT
          </Typography>
        </StyledLink>

        <div
          className={click ? "nav-menu active" : "nav-menu"}
          // style={{ backdropFilter: "blur(4px)" }}
        >
          <StyledLink
            to="/"
            className="nav-links"
            style={{ fontSize: "1.2rem" }}
            onClick={closeMobileMenu}
          >
            .is()
          </StyledLink>

          {/* <StyledLink
            to="/about"
            className="nav-links"
            style={{ fontSize: "1.2rem" }}
            onClick={closeMobileMenu}
          >
            .about()
          </StyledLink> */}

          <StyledLink
            to="/tools"
            className="nav-links"
            style={{ fontSize: "1.2rem" }}
            onClick={closeMobileMenu}
          >
            .tools()
          </StyledLink>

          <StyledLink
            to="/tools"
            className="nav-links"
            style={{ fontSize: "1.2rem" }}
            onClick={closeMobileMenu}
          >
            .pets()
          </StyledLink>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <Close fontSize="large" /> : <MoreVert fontSize="large" />}
        </div>
      </ToolBar>
    </StyledAppBar>
  );
};

export default Navbar;
