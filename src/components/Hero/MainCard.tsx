import { Typography } from "@material-ui/core/";
import { Heading1 } from "../../style/typographyStyles";
import { CardDiv } from "./heroStyles";
import colors from "../../style/colors";

const MainCard = () => {
  return (
    <CardDiv>
      <Heading1 variant="h2" component="h1" style={{ fontWeight: 400 }}>
        Anastasia
        <span
          style={{
            color: colors.purple,
            fontFamily: "courier",
            fontWeight: 600,
          }}
        >
          .is()
        </span>
      </Heading1>
      <Typography
        style={{
          color: colors.purple,
          fontFamily: "courier",
          fontWeight: "bold",
        }}
        variant="h5"
        gutterBottom
      >
        Anastasia Tsilepi
      </Typography>
      <Typography
        style={{
          fontWeight: "bold",
          fontFamily: "courier",
        }}
        variant="body1"
        gutterBottom
      >
        a software developer from Greece <br /> <br />
        and someone who keeps on exploring <br />
        new technologies in a continues <br /> attempt to make some cool web
        apps...
      </Typography>
    </CardDiv>
  );
};

export default MainCard;
