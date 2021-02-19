import React from "react";

import Container from "@material-ui/core/Container";

import { useDispatch, useSelector } from "react-redux";

import useStyles from "./style";
import { selectItem } from "../../redux/actions/select-item.actions";
import { Box } from "@material-ui/core";

const CounterCell = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const uiReducer = useSelector((state) => state.uiReducer);

  let isSelected = false;
  if (uiReducer.itemSelected.length) {
    isSelected = uiReducer.itemSelected[0].name === product.name ? true : false;
  }

  return (
    <Box
      p={1}
      className={isSelected ? classes.selected : classes.box}
      onClick={() => {
        dispatch(selectItem(product));
      }}
    >
      <img className={classes.image} src={product.image} />
      <div className={classes.brand}>{product.brand.toUpperCase()} </div>
      <div className={classes.title}>{product.name}</div>
      <div className={classes.price}>$ {product.price}</div>
      <div className={classes.discount}>$ {product.price * 0.8}</div>
    </Box>
  );
};

export default CounterCell;
