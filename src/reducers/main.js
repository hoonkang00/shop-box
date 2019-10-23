import { combineReducers } from "redux";
import productInfoReducer from "./productInfoReducer";
import reviewsListReducer from "./reviewsList.js";

const rootReducer = combineReducers({
  productInfo: productInfoReducer,
  reviews: reviewsListReducer
});

export default rootReducer;
