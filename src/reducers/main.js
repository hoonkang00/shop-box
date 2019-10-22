import { combineReducers } from "redux";
import productInfoReducer from "./productInfoReducer"

const rootReducer = combineReducers({
    productInfo:productInfoReducer
});

export default rootReducer;
