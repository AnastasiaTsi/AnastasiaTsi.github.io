import { Typography } from "@material-ui/core/";
import { CardDiv } from "./heroStyles";

const CommentCard = () => {
  return (
    <CardDiv style={{ marginTop: "30px" }}>
      <Typography
        style={{ fontFamily: "courier", fontWeight: "bold" }}
        variant="h5"
        gutterBottom
      >
        /* <br />
        - Web Development <br />- at its most
        <br />- <span style={{ color: "#555" }}>mediocre</span> form <br />
        */
      </Typography>
    </CardDiv>
  );
};

export default CommentCard;
