import { Typography } from "@material-ui/core/";
import { CardDiv, StyledIs } from "./heroStyles";
import colors from "../../style/colors";

type CardProps = {
  title: string;
  paragraphs?: string[];
};

const MyCard = ({ title, paragraphs }: CardProps) => {
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

      {paragraphs?.map((paragraph, index) => (
        <>
          {index % 2 === 0 ? (
            <Typography variant="h6" gutterBottom>
              {paragraph}
            </Typography>
          ) : (
            <Typography style={{ color: "#555" }} variant="body1" gutterBottom>
              {paragraph}
            </Typography>
          )}
        </>
      ))}
    </CardDiv>
  );
};

export default MyCard;
