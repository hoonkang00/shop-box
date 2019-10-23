import { combineReducers } from "redux";
import productInfoReducer from "./productInfoReducer";
import reviewMetaDataReducer from "./reviewMetaDataReducer";
import getQuestionsReducer from "./getQuestionsReducer.js";

const rootReducer = combineReducers({
  productInfo: productInfoReducer,
  reviewMetaData: reviewMetaDataReducer,
  getQuestionsReducer: getQuestionsReducer
});

export default rootReducer;
