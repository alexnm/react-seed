import { createReducer, createAsyncAction } from "../utilities";

export const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_COMPLETED = "GET_PRODUCT_COMPLETED";

const mapResponseToPayload = ( response ) => ( {
    product: response.product,
} );

export const fetchProduct = createAsyncAction( GET_PRODUCT, mapResponseToPayload );

const initialState = { };

export default createReducer( initialState )( {
    [ GET_PRODUCT ]: ( ) => initialState,
    [ GET_PRODUCT_COMPLETED ]: ( state, payload ) => payload.product,
} );
