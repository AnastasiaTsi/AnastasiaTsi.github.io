import { Typography, Divider } from "@material-ui/core";
import { CardDiv } from "./skillsStyles";

type CardProps = {
  title: string;
  paragraph1?: string;
};

const Card = ({ title, paragraph1 }: CardProps) => {
  return (
    <CardDiv style={{ marginBottom: "5%" }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <hr />
      <Typography variant="subtitle1">node</Typography>
      <Typography variant="subtitle1">git</Typography>
      <Typography variant="subtitle1">react</Typography>
      <Typography variant="subtitle1">node</Typography>
      <Typography variant="subtitle1">git</Typography>
      <Typography variant="subtitle1">react</Typography>
    </CardDiv>
  );
};

export default Card;
