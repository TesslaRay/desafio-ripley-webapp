import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import { useSelector } from "react-redux";

import CounterCell from "./countercell/countercell.component";

const useStyles = makeStyles((theme) => ({
  noresults: {
    marginTop: "40vh",
  },
}));

const ItemList = () => {
  const classes = useStyles();

  const productsReducer = useSelector((state) => state.productsReducer);
  const searchReducer = useSelector((state) => state.searchReducer);

  let searchFilter;
  if (productsReducer.products[0] != undefined) {
    if (searchReducer.searchCounter.length > 3) {
      searchFilter = productsReducer.products[0].filter(
        (product) =>
          product.brand
            .toLowerCase()
            .includes(searchReducer.searchCounter.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchReducer.searchCounter.toLowerCase())
      );
    } else {
      searchFilter = productsReducer.products[0].filter(
        (product) => product.id == searchReducer.searchCounter
      );
    }
  }

  if (productsReducer.products.length > 0) {
    if (searchReducer.searchState) {
      return searchFilter.map((product, key) => {
        return <CounterCell product={product} key={key} />;
      });
    } else {
      return productsReducer.products[0].map((product, key) => {
        return <CounterCell product={product} key={key} />;
      });
    }
  } else {
    return <Typography className={classes.noresults}>No results</Typography>;
  }
};

export default ItemList;
