import { combineReducers } from "redux";
import busy from "./busyReducer";
import selectedProduct from "./productDetailsReducer";
import products from "./productListReducer";
import session, * as fromSession from "./sessionReducer";

export default combineReducers( {
    busy,
    selectedProduct,
    products,
    session,
} );

export const userLoggedIn = ( state ) => fromSession.userLoggedIn( state.session );
