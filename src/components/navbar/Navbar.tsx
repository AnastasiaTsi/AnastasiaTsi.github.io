import { useState, MouseEvent } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Close, Menu } from "@material-ui/icons";
import {
  BrandLink,
  ExternalNavButton,
  MenuButton,
  NavInner,
  NavLink,
  NavLinks,
  NavRoot,
} from "./navBarStyles";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const close = () => setOpen(false);

  const goToWork = (event: MouseEvent) => {
    event.preventDefault();
    close();
    if (location.pathname === "/") {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    history.push("/#work");
  };

  return (
    <NavRoot>
      <NavInner>
        <BrandLink to="/" onClick={close}>
          AT<span>.is()</span>
        </BrandLink>

        <MenuButton
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </MenuButton>

        <NavLinks $open={open}>
          <NavLink to="/#work" onClick={goToWork}>
            Work
          </NavLink>
          <NavLink to="/pets" onClick={close}>
            Pets
          </NavLink>
          <ExternalNavButton
            type="button"
            onClick={() => {
              close();
              window.open(
                "https://www.linkedin.com/in/anastasia-tsilepi/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            LinkedIn
          </ExternalNavButton>
        </NavLinks>
      </NavInner>
    </NavRoot>
  );
};

export default Navbar;
