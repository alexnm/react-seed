import fetch from "./fetch";
import Notification from "./notification";
import { apiCallStarted, apiCallEnded } from "../actions/apiActions";
import { GET_PRODUCT, GET_PRODUCTS, LOGIN } from "../actionIdentifiers";

const apiCall = ( method ) => ( action ) => ( params, body ) => ( dispatch ) => {
    const url = urlMapper( action, params );
    dispatch( action.started );
    dispatch( apiCallStarted );
    return fetch( url, method, body ).then(
        res => handleResponse( res, action, dispatch ),
        err => handleError( err, action, dispatch )
    );
};

function urlMapper( action, params ) {
    const baseUrl = getBaseUrl( );
    switch ( action.name ) {
    case GET_PRODUCTS: return `${ baseUrl }/products`;
    case GET_PRODUCT: return `${ baseUrl }/products/${ params.id }`;
    case LOGIN: return `${ baseUrl }/login`;
    default: throw new Error( "action does not have a url defined in api.js" );
    }
}

function getBaseUrl( ) {
    return typeof document === "undefined" ? "http://localhost:1234/api" : "/api";
}

function handleResponse( response, action, dispatch ) {
    dispatch( apiCallEnded );
    dispatch( action.completed( response ) );
}

function handleError( { status, response }, action, dispatch ) {
    dispatch( apiCallEnded );
    dispatch( action.failed( response ) );
    dispatch( Notification.error( response.error ) );
}

export default {
    get: apiCall( "GET" ),
    delete: apiCall( "DELETE" ),
    post: apiCall( "POST" ),
    put: apiCall( "PUT" ),
};
