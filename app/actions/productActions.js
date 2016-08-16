import {
    ADD_TO_CART,
    GET_PRODUCT,
    GET_PRODUCT_COMPLETED,
    GET_PRODUCT_FAILED,
    GET_PRODUCTS,
    GET_PRODUCTS_COMPLETED,
    GET_PRODUCTS_FAILED,
} from "../actionIdentifiers";

export function addToCart( product ) {
    return {
        type: ADD_TO_CART,
        product,
    };
}

export const fetchProduct = {
    name: GET_PRODUCT,
    started: ( ) => ( {
        type: GET_PRODUCT,
    } ),
    completed: response => ( {
        type: GET_PRODUCT_COMPLETED,
        product: response.product,
    } ),
    failed: ( ) => ( {
        type: GET_PRODUCT_FAILED,
    } ),
};

export const fetchProducts = {
    name: GET_PRODUCTS,
    started: ( ) => ( {
        type: GET_PRODUCTS,
    } ),
    completed: response => ( {
        type: GET_PRODUCTS_COMPLETED,
        products: response.products,
    } ),
    failed: ( ) => ( {
        type: GET_PRODUCTS_FAILED,
    } ),
};
