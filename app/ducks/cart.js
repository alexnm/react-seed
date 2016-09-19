import { createReducer, Notification } from "./utilities";

const ADD_TO_CART = "ADD_TO_CART";
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

const initialState = [ ];

export default createReducer( initialState )( {
    [ ADD_TO_CART ]: ( state, payload ) => [ ...state, payload.product ],
    [ REMOVE_FROM_CART ]: ( state, payload ) => [
        ...state.slice( 0, payload.index ),
        ...state.slice( payload.index + 1 ),
    ],
} );
