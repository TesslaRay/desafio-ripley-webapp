import { makeStyles } from "@material-ui/core";
import { primary } from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  box: {
    height: "350px",
    width: "80%",
    padding: "20px",
    margin: "30px",
  },
  image: {
    width: "350px",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  brand: {
    textAlign: "left",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "700",
    color: "#212121",
    fontSize: "12px",
  },
  title: {
    textAlign: "left",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "400",
    color: "#212121",
    fontSize: "12px",
    width: "50%",
  },
  rigthside: {
    float: "right",
    display: "flex",
    alignItems: "center",
  },
  price: {
    textAlign: "left",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "600",
    color: "black",
    textDecoration: "line-through",
  },
  discount: {
    textAlign: "left",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "600",
    color: primary,
  },
}));

export default useStyles;
