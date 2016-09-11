import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionIdentifiers";
import createReducer from "./createReducer";

const initialState = [ ];

export default createReducer( initialState )( {
    [ ADD_TO_CART ]: ( state, payload ) => [ ...state, payload.product ],
    [ REMOVE_FROM_CART ]: ( state, payload ) => [
        ...state.slice( 0, payload.index ),
        ...state.slice( payload.index + 1 ),
    ],
} );
