import { fetch } from "../helpers";

export const ADD_TO_CART = "ADD_TO_CART";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_COMPLETED = "GET_PRODUCTS_COMPLETED";
export const GET_PRODUCTS_FAILED = "GET_PRODUCTS_FAILED";

export function addToCart( product ) {
    return {
        type: ADD_TO_CART,
        product,
    };
}

export function getProductsCompleted( response ) {
    return {
        type: GET_PRODUCTS_COMPLETED,
        products: response.products,
    };
}

export function fetchProducts( ) {
    return ( dispatch ) => {
        const url = "/api/products";
        return fetch( url, "GET" ).then( res => dispatch( getProductsCompleted( res ) ) );
    };
}
