import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "../actions/fetch-products.actions";

import {
  INCREMENT_VALUE_ERROR,
  INCREMENT_VALUE_REQUEST,
  INCREMENT_VALUE_SUCCESS,
} from "../actions/increment-value.actions";

import {
  DECREMENT_VALUE_ERROR,
  DECREMENT_VALUE_REQUEST,
  DECREMENT_VALUE_SUCCESS,
} from "../actions/decrement-value.actions";

import {
  ADD_COUNTER_ERROR,
  ADD_COUNTER_REQUEST,
  ADD_COUNTER_SUCCESS,
} from "../actions/add-counter.actions";
import {
  DELETE_COUNTER_ERROR,
  DELETE_COUNTER_REQUEST,
  DELETE_COUNTER_SUCCESS,
} from "../actions/delete-counter.actions";

const initialState = {
  loading: false,
  loadingChangeValue: false,
  loadingAddCounter: false,
  error: "",
  errorChangeValue: "",
  errorAddCounter: "",
  errorDeleteCounter: "",
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: action.payload[0] === "" ? [] : action.payload,
      };
    }
    case FETCH_PRODUCTS_ERROR: {
      return {
        ...state,
        products: [],
        error: action.payload,
      };
    }

    case INCREMENT_VALUE_REQUEST: {
      return {
        ...state,
        loadingChangeValue: true,
      };
    }

    case INCREMENT_VALUE_SUCCESS: {
      state.products[0].forEach((element) => {
        if (element.id === action.payload[0].id) {
          element.count = action.payload[0].count;
        }
      });

      return {
        ...state,
        loadingChangeValue: false,
        products: state.products,
      };
    }

    case INCREMENT_VALUE_ERROR: {
      return {
        ...state,
        errorChangeValue: action.payload,
      };
    }

    case DECREMENT_VALUE_REQUEST: {
      return {
        ...state,
        loadingChangeValue: true,
      };
    }

    case DECREMENT_VALUE_SUCCESS: {
      state.products[0].forEach((element) => {
        if (element.id === action.payload[0].id) {
          element.count = action.payload[0].count;
        }
      });

      return {
        ...state,
        loadingChangeValue: false,
        products: state.products,
      };
    }

    case DECREMENT_VALUE_ERROR: {
      return {
        ...state,
        errorChangeValue: action.payload,
      };
    }

    case ADD_COUNTER_REQUEST: {
      return {
        ...state,
        loadingAddCounter: true,
      };
    }

    case ADD_COUNTER_SUCCESS: {
      if (state.products.length) {
        state.products[0].push(action.payload[0]);
      } else {
        state.products.push(action.payload);
      }
      return {
        ...state,
        loadingAddCounter: false,
      };
    }

    case ADD_COUNTER_ERROR: {
      return {
        ...state,
        loadingAddCounter: false,
        errorAddCounter: action.payload,
      };
    }

    case DELETE_COUNTER_REQUEST: {
      return {
        ...state,
      };
    }

    case DELETE_COUNTER_SUCCESS: {
      state.products[0].forEach((e) =>
        console.log(e.id != action.payload[0].deleteProduct)
      );
      const newState = [];
      newState[0] = state.products[0].filter(
        (product) => product.id != action.payload[0].deleteProduct
      );

      return {
        ...state,
        products: newState,
      };
    }

    case DELETE_COUNTER_ERROR: {
      return {
        ...state,
        errorDeleteCounter: action.payload,
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
