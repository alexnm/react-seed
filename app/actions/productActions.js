import * as Actions from "../actionIdentifiers";

export const addToCart = product => ( {
    type: Actions.ADD_TO_CART,
    payload: {
        product,
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
