import { combineReducers } from "redux";
import productsReducer from "./main.reducer";
import searchReducer from "./search.reducer";
import uiReducer from "./ui.reducer";

const rootReducers = combineReducers({
  productsReducer,
  uiReducer,
  searchReducer,
});

export default rootReducers;
