import { createReducer } from "../utilities";

export const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_COMPLETED = "GET_PRODUCTS_COMPLETED";
const GET_PRODUCTS_FAILED = "GET_PRODUCTS_FAILED";

export const fetchProducts = {
    name: GET_PRODUCTS,
    url: ( baseUrl ) => `${ baseUrl }/products/`,
    started: {
        type: GET_PRODUCTS,
    },
    completed: ( response ) => ( {
        type: GET_PRODUCTS_COMPLETED,
        payload: {
            products: response.products,
        },
    } ),
    failed: ( error ) => ( {
        type: GET_PRODUCTS_FAILED,
        payload: {
            message: error.message,
        },
    } ),
};

const initialState = [ ];

export default createReducer( initialState )( {
    [ GET_PRODUCTS_COMPLETED ]: ( state, payload ) => payload.products,
} );
