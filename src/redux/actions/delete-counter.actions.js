import axios from "axios";
import url from "../../config/env.js";

export const DELETE_COUNTER_REQUEST = "DELETE_COUNTER_REQUEST";
export const DELETE_COUNTER_SUCCESS = "DELETE_COUNTER_SUCCESS";
export const DELETE_COUNTER_ERROR = "DELETE_COUNTER_ERROR";
// --end-actions-types--

// Actions
export const deleteCounterRequest = () => {
  return {
    type: DELETE_COUNTER_REQUEST,
  };
};

export const deleteCounterSuccess = (response) => {
  return {
    type: DELETE_COUNTER_SUCCESS,
    payload: response,
  };
};

export const deleteCounterError = (error) => {
  return {
    type: DELETE_COUNTER_ERROR,
    payload: error,
  };
};

export const deleteCounter = (id) => {
  return (dispatch) => {
    dispatch(deleteCounterRequest());
    return axios
      .delete(`${url}/product/${id}`)
      .then((response) => {
        dispatch(deleteCounterSuccess([response.data]));
      })
      .catch((error) => dispatch(deleteCounterError("No connection")));
  };
};
