import { combineReducers } from "redux";
import busy from "./busyReducer";
import selectedProduct from "./productDetailsReducer";
import products from "./productListReducer";
import serverError from "./serverErrorReducer";
import session from "./sessionReducer";

export default combineReducers( {
    busy,
    selectedProduct,
    products,
    serverError,
    session,
} );
