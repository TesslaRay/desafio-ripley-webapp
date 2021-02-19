import React, { useEffect } from "react";

import { Dimmer } from "../../components/dimmer.component";

import Divider from "@material-ui/core/Divider";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/fetch-products.actions";
import { unselectItem } from "../../redux/actions/select-item.actions";
import { desactivateSearch } from "../../redux/actions/search-counter.actions";

import AddButton from "../../components/addbutton.component";
import DeleteButton from "../../components/deletebutton.component";
import SearchBar from "../../components/searchbar.component";
import ShareButton from "../../components/sharebutton.component";
import DeletetionError from "../../components/deletetionerror.component";
import { ActivityIndicator } from "../../components/activityindicator.component";

import { Box } from "@material-ui/core";

import useStyles from "./main.style";
import ItemList from "../../components/itemlist.component";
import Header from "../../components/header.component";

const Main = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const productsReducer = useSelector((state) => state.productsReducer);
  const uiReducer = useSelector((state) => state.uiReducer);
  const searchReducer = useSelector((state) => state.searchReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let hasContent = false;
  if (productsReducer.products[0] === undefined) {
  } else {
    hasContent = productsReducer.products[0].length ? true : false;
  }

  const mainStateRender = () => {
    return (
      <React.Fragment>
        {/* Loading */}
        {productsReducer.loading && <ActivityIndicator />}

        {/* Has content */}
        {!productsReducer.loading && (
          <React.Fragment>
            <Box
              className={classes.wrap}
              display="flex"
              flexWrap="wrap"
              p={1}
              m={2}
              css={{ maxWidth: 1000 }}
            >
              <ItemList />
            </Box>
          </React.Fragment>
        )}

        {/* {hasContent && (
          <div>
            <Dimmer />
            {productsReducer.errorDeleteCounter !== "" && <DeletetionError />}
          </div>
        )} */}

        {/* No content */}
        {/* {!hasContent && !productsReducer.loading && (
          <div>
            <p className={classes.title}>No counters yet</p>
            <p className={classes.subtitle}>
              “When I started counting my blessings, my whole life turned
              around.” —Willie Nelson
            </p>
          </div>
        )} */}

        {/* Has content */}
        {/* {hasContent && (
          <div>
            <Dimmer />
            {productsReducer.errorDeleteCounter !== "" && <DeletetionError />}
          </div>
        )} */}

        {/* Error  */}
        {/* {productsReducer.error !== "" && (
          <div>
            <p className={classes.title}>Couldn’t load the counters</p>
            <p className={classes.subtitle}>
              The Internet connection appears to be offline.
            </p>
          </div>
        )} */}
      </React.Fragment>
    );
  };

  return (
    <div
      className={classes.root}
      onClick={() => {
        if (searchReducer.searchState) {
          dispatch(desactivateSearch());
        }
      }}
    >
      <div className={classes.searchBarContainer}>
        <SearchBar />
      </div>

      <Box
        className={classes.body}
        onClick={() => {
          if (uiReducer.itemSelected.length > 0) {
            dispatch(unselectItem());
          }
          dispatch(desactivateSearch());
        }}
      >
        {mainStateRender()}
      </Box>

      <div className={classes.bottom}>
        <Divider className={classes.divider} />

        <div className={classes.containerButtons}>
          {uiReducer.itemSelected.length > 0 && (
            <React.Fragment>
              <DeleteButton />
              {/* <ShareButton /> */}
            </React.Fragment>
          )}
          <AddButton />
        </div>
      </div>

      {/* <div
          className={classes.searchBarContainer}
          onClick={() => {
            if (uiReducer.itemSelected.length > 0) {
              dispatch(unselectItem());
            }
          }}
        >
          <SearchBar />
        </div> */}

      {/* <Box
          className={hasContent ? classes.body : null}
          onClick={() => {
            if (uiReducer.itemSelected.length > 0) {
              dispatch(unselectItem());
            }
          }}
        >
          {mainStateRender()}
        </Box> */}

      {/* <div
          className={classes.bottom}
          onClick={() => {
            dispatch(desactivateSearch());
          }}
        >
          <Divider className={classes.divider} />

          <div className={classes.containerButtons}>
            {uiReducer.itemSelected.length > 0 && (
              <React.Fragment>
                <DeleteButton />
                <ShareButton />
              </React.Fragment>
            )}
            <AddButton />
          </div> */}
    </div>
  );
};

export default Main;
