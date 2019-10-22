import { combineReducers } from "redux";
import productInfoReducer from "./productInfoReducer"
import reviewMetaDataReducer from "./reviewMetaDataReducer"

const rootReducer = combineReducers({
    productInfo:productInfoReducer,
    reviewMetaData:reviewMetaDataReducer
});

export default rootReducer;
