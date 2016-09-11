import * as Actions from "../actionIdentifiers";
import { Notification } from "../helpers";

const addToCartAction = ( product ) => ( {
    type: Actions.ADD_TO_CART,
    payload: {
        product,
    },
} );

export const addToCart = ( product ) => ( dispatch ) => {
    dispatch( addToCartAction( product ) );
    dispatch( Notification.info( "Product added to cart" ) );
};

export const removeFromCart = ( index ) => ( {
    type: Actions.REMOVE_FROM_CART,
    payload: {
        index,
    },
} );

export const fetchProduct = {
    name: Actions.GET_PRODUCT,
    started: {
        type: Actions.GET_PRODUCT,
    },
    completed: ( response ) => ( {
        type: Actions.GET_PRODUCT_COMPLETED,
        payload: {
            product: response.product,
        },
    } ),
    failed: ( error ) => ( {
        type: Actions.GET_PRODUCT_FAILED,
        payload: {
            message: error.message,
        },
    } ),
};

export const fetchProducts = {
    name: Actions.GET_PRODUCTS,
    started: {
        type: Actions.GET_PRODUCTS,
    },
    completed: ( response ) => ( {
        type: Actions.GET_PRODUCTS_COMPLETED,
        payload: {
            products: response.products,
        },
    } ),
    failed: ( error ) => ( {
        type: Actions.GET_PRODUCTS_FAILED,
        payload: {
            message: error.message,
        },
    } ),
};
