import { createReducer } from "../utilities";

export const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_COMPLETED = "GET_PRODUCT_COMPLETED";
const GET_PRODUCT_FAILED = "GET_PRODUCT_FAILED";

export const fetchProduct = {
    name: GET_PRODUCT,
    url: ( baseUrl, params ) => `${ baseUrl }/products/${ params.id }`,
    started: {
        type: GET_PRODUCT,
    },
    completed: ( response ) => ( {
        type: GET_PRODUCT_COMPLETED,
        payload: {
            product: response.product,
        },
    } ),
    failed: ( error ) => ( {
        type: GET_PRODUCT_FAILED,
        payload: {
            message: error.message,
        },
    } ),
};

const initialState = { };

export default createReducer( initialState )( {
    [ GET_PRODUCT ]: ( ) => initialState,
    [ GET_PRODUCT_COMPLETED ]: ( state, payload ) => payload.product,
} );
