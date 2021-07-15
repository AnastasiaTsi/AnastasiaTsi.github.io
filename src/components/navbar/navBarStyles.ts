import styled from "styled-components";
import colors from "../../style/colors";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

export const StyledAppBar = styled(AppBar)`
  backdrop-filter: blur(4px);
  height: 80px;
`;

export const StyledLink = styled(Link)`
  color: ${colors.white};
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  padding-right: 10px;
  margin: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: ${colors.purple};
    transition: all 0.3s ease-out;
  }
`;

export const ToolBar = styled.div`
  background-color: transparent;
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

// export const Text = styled(Typography)`
//   color: white;
//   color: ${(props) => props.color};
//   font-size: ${(props) => props.size};
//   text-decoration: ${(props) => (props.deleted ? "line-through" : "unset")};
// `;
