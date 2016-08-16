import fetch from "./fetch";
import ApiActions from "../actions/apiActions";
import { GET_PRODUCT, GET_PRODUCTS } from "../actionIdentifiers";

export default {
    get: apiCall.bind( null, "GET" ),
};

function apiCall( method, action, params ) {
    return ( dispatch ) => {
        const url = urlMapper( action, params );
        dispatch( action.started( ) );
        dispatch( ApiActions.apiCallStarted( ) );
        return fetch( url, "GET" ).then(
            res => handleResponse( res, action, dispatch ),
            err => handleError( err, action, dispatch )
        );
    };
}

function urlMapper( action, params ) {
    switch ( action.name ) {
    case GET_PRODUCTS: return "/api/products";
    case GET_PRODUCT: return `/api/products/${ params.id }`;
    default: return null;
    }
}

function handleResponse( response, action, dispatch ) {
    dispatch( ApiActions.apiCallEnded( ) );
    dispatch( action.completed( response ) );
}

function handleError( response, action, dispatch ) {
    dispatch( ApiActions.apiCallEnded( ) );
    dispatch( action.failed( response ) );
}
