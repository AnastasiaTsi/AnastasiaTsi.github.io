import styled from "styled-components";
import colors from "../../style/colors";
import size from "../../style/size";

export const StyledIs = styled.div`
  font-family: courier;
  font-weight: 600;
  color: white;
`;

export const CardDiv = styled.div`
  margin: auto;
  margin-top: 200px;
  inset: 0;
  padding: 2%;
  width: 50%;
  height: fit-content;
  color: grey;
  border-left: solid ${colors.purple};
  @media (max-width: ${size.mobileL}) {
    margin-left: 35px;
  }
`;
