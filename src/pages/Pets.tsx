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

const fivos =
  "Fivos is a maltese dog. This gentleman was born in 2015 and can't get enough cuddles";
const charlotte =
  "Charlotte, queen of the house, was rescued when she was days old from the streets and is bullying us ever since";

const Pets = () => {
  return (
    <RootDiv>
      <MuiThemeProvider theme={theme}>
        <div style={{ marginTop: "140px" }} />
        <Typography
          style={{ textAlign: "center", color: "white" }}
          variant="h2"
          gutterBottom
        >
          Because
          <PurpleSpan>...</PurpleSpan> Why not
          <PurpleSpan> ?</PurpleSpan>
        </Typography>

        <div style={{ marginTop: "70px" }} />
        <PetsDiv>
          <PetCard
            path="images/pets/fivos.jpg"
            name="Fivos"
            description={fivos}
          />
          <PetCard
            path="images/pets/charlotte.jpg"
            name="Charlotte"
            description={charlotte}
          />
        </PetsDiv>
      </MuiThemeProvider>
      <div style={{ marginTop: "30px" }} />
    </RootDiv>
  );
};

export default Pets;
