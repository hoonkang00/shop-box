import { combineReducers } from "redux";
import productInfoReducer from "./productInfoReducer";
import productStylesReducer from "./productStylesReducer";
import reviewMetaDataReducer from "./reviewMetaDataReducer";
import reviewsListReducer from "./reviewsList.js";
import selectedStyleReducer from "./selectedStyleReducer";

const rootReducer = combineReducers({
  productInfo: productInfoReducer,
  productStyles: productStylesReducer,
  selectedStyleIndex: selectedStyleReducer,
  reviewMetaData: reviewMetaDataReducer,
  reviews: reviewsListReducer
});

export default rootReducer;
