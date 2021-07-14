import { Typography } from "@material-ui/core/";
import { CardDiv, StyledIs } from "./heroStyles";
import colors from "../../style/colors";

type CardProps = {
  title: string;
  paragraph1?: string;
  paragraph2?: string;
};

const MyCard = ({ title, paragraph1, paragraph2 }: CardProps) => {
  return (
    <CardDiv>
      <Typography variant="h2" component="h1" gutterBottom>
        <StyledIs>
          .is(
          <span
            style={{
              color: colors.purple,
              fontWeight: 100,
            }}
          >
            {title}
            {/* work - react(web dev at its worst), hobbies */}
          </span>
          )
        </StyledIs>
      </Typography>
      <Typography style={{ color: "#555" }} variant="h6" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
    </CardDiv>
  );
};

export default MyCard;
