import styled from "styled-components";
import colors from "./colors";

export const RootDiv = styled.div`
  min-height: 100vh;
  background-image: url(images/bl-plant.jpg);
  background-size: cover;
  overflow: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const PetsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const PurpleSpan = styled.span`
  color: ${colors.purple};
  font-weight: bold;
`;
