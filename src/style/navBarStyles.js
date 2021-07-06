import styled from "styled-components";
import colors from "./colors";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${colors.white};
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  margin: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: ${colors.purple};
    transition: all 0.3s ease-out;
  }
`;

// export const Text = styled(Typography)`
//   color: white;
//   color: ${(props) => props.color};
//   font-size: ${(props) => props.size};
//   text-decoration: ${(props) => (props.deleted ? "line-through" : "unset")};
// `;

// export const StyledLink = styled.div`
//   color: white;
//   height: 100%;
//   background-image: ${(props) => props.src};
//   background-position: center center;
//   background-size: cover;
//   background-repeat: no-repeat;
// `;
