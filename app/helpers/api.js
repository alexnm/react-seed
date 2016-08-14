import fetch from "./fetch";
import ApiActions from "../actions/apiActions";

export default {
    get: apiCall.bind( null, "GET" ),
};

function apiCall( method, action ) {
    return ( dispatch ) => {
        const url = urlMapper( action );
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
    case "GET_PRODUCTS": return "/api/products";
    case "GET_PRODUCT_DETAILS": return `/api/products/${ params.id }`;
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
