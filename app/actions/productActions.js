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
