import * as Actions from "../actionIdentifiers";

export const addToCart = product => ( {
    type: Actions.ADD_TO_CART,
    product,
} );

export const fetchProduct = {
    name: Actions.GET_PRODUCT,
    started: ( ) => ( {
        type: Actions.GET_PRODUCT,
    } ),
    completed: response => ( {
        type: Actions.GET_PRODUCT_COMPLETED,
        product: response.product,
    } ),
    failed: ( ) => ( {
        type: Actions.GET_PRODUCT_FAILED,
    } ),
};

export const fetchProducts = {
    name: Actions.GET_PRODUCTS,
    started: ( ) => ( {
        type: Actions.GET_PRODUCTS,
    } ),
    completed: response => ( {
        type: Actions.GET_PRODUCTS_COMPLETED,
        products: response.products,
    } ),
    failed: ( ) => ( {
        type: Actions.GET_PRODUCTS_FAILED,
    } ),
};
