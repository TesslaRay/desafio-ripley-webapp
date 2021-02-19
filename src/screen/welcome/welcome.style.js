import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../../utils/colors";
import { boxShadow } from "../../utils/constans";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F9F9F9",
    textAlign: "center",
    height: "100vh",
  },
  logo: {
    marginTop: "10vh",
    width: "178px",
    height: "178px",
    color: primary,
  },
  title: {
    marginTop: "10vh",
    fontFamily: theme.typography.fontFamily,
    fontSize: "40px",
    fontWeight: "600",
    itemAlignt: "center",
  },
  subtitle: {
    margin: "auto",
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
    fontFamily: theme.typography.fontFamily,
    fontSize: "13px",
    color: "#4A4A4A",
  },
  bottom: {
    color: "white",
  },
  button: {
    textTransform: "none",
    color: "white",
    borderRadius: "8px",
    boxShadow: boxShadow.boxShadow,
  },
  textButton: {
    fontWeight: "600",
    fontSize: "15px",
  },
}));

export default useStyles;
