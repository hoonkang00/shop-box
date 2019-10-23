import { combineReducers } from "redux";
import productInfoReducer from "./productInfoReducer";
import productStylesReducer from "./productStylesReducer";

const rootReducer = combineReducers({
  productInfo: productInfoReducer,
  productStyles: productStylesReducer
});

export default rootReducer;
