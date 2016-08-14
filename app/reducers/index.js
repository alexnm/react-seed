import { combineReducers } from "redux";
import busy from "./busyReducer";
import products from "./productsReducer";

export default combineReducers( {
    busy,
    products,
} );
