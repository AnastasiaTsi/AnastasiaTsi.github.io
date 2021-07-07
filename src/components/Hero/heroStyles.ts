import styled from "styled-components";
import colors from "../../style/colors";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

export const RootDiv = styled.div`
  min-height: 100vh;
  background-image: url(images/bl-rain.jpg);
  background-size: cover;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const CardDiv = styled.div`
  margin: auto;
  inset: 0;
  padding: 2%;
  width: 50%;
  height: fit-content;
  color: grey;
  border-left: solid ${colors.purple};
`;
