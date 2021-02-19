import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import loader from "../images/loader.gif";

const useStyles = makeStyles((theme) => ({
  containderLoader: {
    marginTop: "200px",
    width: "300px",
    height: "300px",
    margin: "auto",
  },
  loader: {
    width: "300px",
    height: "300px",
  },
  // [theme.breakpoints.down("xs")]: {
  //   // marginTop: "100px",
  // },
}));

export const ActivityIndicator = () => {
  const classes = useStyles();
  return (
    <div className={classes.containderLoader}>
      <img src={loader} className={classes.loader} alt="loading..." />
    </div>
  );
};
