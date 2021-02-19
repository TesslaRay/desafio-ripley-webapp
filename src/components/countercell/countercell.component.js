import React from "react";

import Container from "@material-ui/core/Container";

import { useDispatch, useSelector } from "react-redux";

import useStyles from "./style";

const CounterCell = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const uiReducer = useSelector((state) => state.uiReducer);

  // function handleDecrement() {
  //   dispatch(decrementValue(item));
  // }

  // function handleIncrement() {
  //   dispatch(incrementValue(item));
  // }

  // let item = {};

  // let isSelected = false;
  // if (uiReducer.itemSelected.length) {
  //   isSelected = uiReducer.itemSelected[0].title === item.title ? true : false;
  // }

  return (
    <Container className={classes.box}>
      <img
        className={classes.image}
        src="https://home.ripley.cl/store/Attachment/WOP/D113/2000381938952/2000381938952_2.jpg"
      />
      <div className={classes.brand}>Apple </div>
      <div className={classes.title}>
        MACBOOK AIR RETINA / M1 / GPU 7C / 256GB SSD / 13.3
      </div>
      <div className={classes.price}>$1.199.990</div>
      <div className={classes.discount}>$1.199.990</div>
    </Container>
  );
};

export default CounterCell;
