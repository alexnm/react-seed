import { GET_PRODUCTS_COMPLETED } from "../actionIdentifiers";
import createReducer from "./createReducer";

const initialState = [ ];

export default createReducer( initialState )( {
    [ GET_PRODUCTS_COMPLETED ]: ( state, payload ) => payload.products,
} );
