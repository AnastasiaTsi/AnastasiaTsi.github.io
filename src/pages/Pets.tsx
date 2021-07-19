import { PetsDiv, PurpleSpan, RootDiv } from "../style/genericStyles";
import {
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core";
import PetCard from "../components/PetCard";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const margin = "140px";

const Pets = () => {
  return (
    <RootDiv>
      <MuiThemeProvider theme={theme}>
        <div style={{ marginTop: margin }} />
        <Typography
          style={{ textAlign: "center", color: "white" }}
          variant="h2"
          gutterBottom
        >
          Because
          <PurpleSpan>...</PurpleSpan> Why not
          <PurpleSpan> ?</PurpleSpan>
        </Typography>

        <div style={{ marginTop: margin }} />
        <PetsDiv>
          <PetCard />
          <PetCard />
        </PetsDiv>
      </MuiThemeProvider>
      <div style={{ marginTop: margin }} />
    </RootDiv>
  );
};

export default Pets;
