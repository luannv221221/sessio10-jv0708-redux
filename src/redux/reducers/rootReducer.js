import { combineReducers } from "redux";
import { cartQty } from "./cartQty";

const rootReducer = combineReducers({
    cartQtyState: cartQty
});

export default rootReducer;