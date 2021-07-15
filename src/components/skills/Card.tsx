import { Typography, Divider } from "@material-ui/core";
import { CardDiv } from "./skillsStyles";

type CardProps = {
  title: string;
  skills: string[];
};

const Card = ({ title, skills }: CardProps) => {
  return (
    <CardDiv style={{ marginBottom: "5%" }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <hr />
      {skills.map((skill, index) => {
        return (
          <Typography key={index} variant="subtitle1">
            {skill}
          </Typography>
        );
      })}
    </CardDiv>
  );
};

export default Card;
