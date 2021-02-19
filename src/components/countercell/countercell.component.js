import React from "react";

import { useDispatch, useSelector } from "react-redux";

import useStyles from "./style";
import {
  selectItem,
  unselectItem,
} from "../../redux/actions/select-item.actions";
import { Box } from "@material-ui/core";

const CounterCell = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const uiReducer = useSelector((state) => state.uiReducer);

  let isSelected = false;
  if (uiReducer.itemSelected.length) {
    isSelected = uiReducer.itemSelected[0].id === product.id ? true : false;
  }

  return (
    <Box
      p={1}
      className={isSelected ? classes.selected : classes.box}
      onClick={() => {
        dispatch(selectItem(product));
        if (isSelected) dispatch(unselectItem());
      }}
    >
      <img className={classes.image} src={product.image} />
      <div className={classes.brand}>{product.brand.toUpperCase()} </div>
      <div className={classes.title}>{product.name}</div>
      {isPalindrome(product.brand) ||
      isPalindrome(product.id.toString()) ||
      isPalindrome(product.description) ? (
        <React.Fragment>
          <div className={classes.price}>$ {product.price}</div>
          <div className={classes.discount}>$ {product.price * 0.8}</div>
        </React.Fragment>
      ) : (
        <div className={classes.discount}>$ {product.price}</div>
      )}
    </Box>
  );
};

export default CounterCell;

function isPalindrome(s, i) {
  return (
    (i = i || 0) < 0 ||
    i >= s.length >> 1 ||
    (s[i] == s[s.length - 1 - i] && isPalindrome(s, ++i))
  );
}
