import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import loader from "../images/loader.gif";

const useStyles = makeStyles((theme) => ({
  image: {
    marginTop: "200px",
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
    <div>
      <img src={loader} className={classes.image} alt="loading..." />
    </div>
  );
};
