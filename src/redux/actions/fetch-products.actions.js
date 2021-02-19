import axios from "axios";
import url from "../../config/env.js";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";
// --end-actions-types--

// Actions
export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (response) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: response,
  };
};

export const fetchProductsError = (error) => {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    return axios
      .get(`${url}/products`)
      .then((response) => {
        dispatch(fetchProductsSuccess([response.data]));
      })
      .catch(() => dispatch(fetchProductsError("No connection")));
  };
};
