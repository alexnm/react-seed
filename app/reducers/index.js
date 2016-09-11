import { combineReducers } from "redux";
import busy from "./busyReducer";
import cart from "./cartReducer";
import selectedProduct from "./productDetailsReducer";
import products from "./productListReducer";
import serverError from "./serverErrorReducer";
import session from "./sessionReducer";

export default combineReducers( {
    busy,
    cart,
    selectedProduct,
    products,
    serverError,
    session,
} );
