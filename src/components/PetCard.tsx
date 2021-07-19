import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: "15px",
    marginBottom: "40px",
  },
  media: {
    height: 340,
  },
});

type CardProps = {
  path: string;
  name: string;
  description: string;
};

const PetCard = ({ path, name, description }: CardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
      <CardMedia className={classes.media} image={path} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
};

export default PetCard;
