import Immutable from "immutable";
import { createReducer } from "./utilities";
import { Notification } from "../utilities";

const ADD_TO_CART = "ADD_TO_CART";
const INITIALIZE_CART = "INITIALIZE_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";

const addToCartAction = ( product ) => ( {
    type: ADD_TO_CART,
    payload: {
        product,
    },
} );

export const addToCart = ( product ) => ( dispatch ) => {
    dispatch( addToCartAction( product ) );
    dispatch( Notification.info( "Product added to cart" ) );
};

export const removeFromCart = ( index ) => ( {
    type: REMOVE_FROM_CART,
    payload: {
        index,
    },
} );

export const initializeCart = ( items ) => ( {
    type: INITIALIZE_CART,
    payload: {
        items,
    },
} );

const initialState = Immutable.List( );

export default createReducer( initialState )( {
    [ ADD_TO_CART ]: ( state, payload ) => state.push( payload.product ),
    [ INITIALIZE_CART ]: ( state, payload ) => Immutable.fromJS( payload.items ),
    [ REMOVE_FROM_CART ]: ( state, payload ) => state.delete( payload.index ),
} );
