import { combineReducers } from "redux";
import productInfoReducer from "./productInfoReducer";
import productStylesReducer from "./productStylesReducer";
import reviewMetaDataReducer from "./reviewMetaDataReducer";

const rootReducer = combineReducers({
  productInfo: productInfoReducer,
  productStyles: productStylesReducer,
  reviewMetaData: reviewMetaDataReducer
});

export default rootReducer;
