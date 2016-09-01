import { combineReducers } from "redux";
import busy from "./busyReducer";
import selectedProduct from "./productDetailsReducer";
import products from "./productListReducer";
import session from "./sessionReducer";

export default combineReducers( {
    busy,
    selectedProduct,
    products,
    session,
} );
