import { combineReducers } from "redux";
import busy from "./busyReducer";
import cart from "./cartReducer";
import notifications from "./notificationsReducer";
import products from "./productListReducer";
import selectedProduct from "./productDetailsReducer";
import serverError from "./serverErrorReducer";
import session from "./sessionReducer";

export default combineReducers( {
    busy,
    cart,
    notifications,
    products,
    selectedProduct,
    serverError,
    session,
} );
