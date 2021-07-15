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
          </span>
          )
        </StyledIs>
      </Typography>
      <Typography style={{ color: "#555" }} variant="h6" gutterBottom>
        {paragraph1}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {paragraph2}
      </Typography>
    </CardDiv>
  );
};

export default MyCard;
