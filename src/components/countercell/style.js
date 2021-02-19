import { makeStyles } from "@material-ui/core";
import { primary } from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  box: {
    height: "350px",
    width: "80%",
    padding: "20px",
    margin: "30px",
  },
  selected: {
    height: "350px",
    width: "80%",
    padding: "20px",
    margin: "30px",
    borderRadius: "26px",
    backgroundColor: "rgba(248, 51, 69, 0.3)",
  },
  image: {
    width: "350px",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  brand: {
    margin: "5px",
    textAlign: "left",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "700",
    color: "#212121",
    fontSize: "12px",
  },
  title: {
    margin: "5px",
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
    margin: "5px",
    textAlign: "left",
    fontFamily: theme.typography.fontFamily,
    fontSize: "14px",
    fontWeight: "600",
    color: "black",
    textDecoration: "line-through",
  },
  discount: {
    margin: "5px",
    textAlign: "left",
    fontFamily: theme.typography.fontFamily,
    fontSize: "20px",
    fontWeight: "600",
    color: primary,
  },
}));

export default useStyles;
