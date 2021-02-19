import { makeStyles } from "@material-ui/core/styles";
import { FOTTER } from "../../utils/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      height: "800px",
    },
    margin: "auto",
  },
  title: {
    marginTop: "30vh",
    fontFamily: theme.typography.fontFamily,
    fontSize: "18px",
    fontWeight: "600",
  },
  subtitle: {
    margin: theme.spacing(8),
    fontFamily: theme.typography.fontFamily,
    fontSize: "13px",
    color: "#4A4A4A",
  },
  bottom: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: FOTTER,
  },
  searchBarContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    width: "379px",
    margin: "auto",
  },
  containerButtons: {
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
    width: "570px",
    margin: "auto",
  },
  body: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  wrap: {
    margin: "auto",
  },
}));

export default useStyles;
