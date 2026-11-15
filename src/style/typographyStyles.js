import styled from "styled-components";
import colors from "./colors";
import { Typography } from "@material-ui/core/";

export const Heading1 = styled(Typography)`
  color: ${colors.ink};
  font-family: var(--font-display);
  font-weight: 600;
`;
