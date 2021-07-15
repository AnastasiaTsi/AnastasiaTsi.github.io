import styled from "styled-components";
import { Typography } from "@material-ui/core/";

export const Heading1 = styled(Typography)`
  text-align: center;
  font-family: courier;
  font-weight: bold;
  padding: 6%;
  margin: 0;
`;

export const RootDiv = styled.div`
  color: white;
  background-image: url(images/sand.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const CardDiv = styled.div`
  backdrop-filter: blur(4px);
  //background-color: blue;
  outline: none;
  padding: 5%;
  border-radius: 25px;
  height: fit-content;
  margin: auto;
  width: 20%;
`;
