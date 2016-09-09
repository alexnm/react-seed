import { GET_PRODUCT, GET_PRODUCT_COMPLETED } from "../actionIdentifiers";
import createReducer from "./createReducer";

const initialState = { };

export default createReducer( initialState )( {
    [ GET_PRODUCT ]: ( ) => initialState,
    [ GET_PRODUCT_COMPLETED ]: ( state, payload ) => payload.product,
} );
