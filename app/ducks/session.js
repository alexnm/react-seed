import { createReducer } from "../utilities";

export const LOGIN = "LOGIN";
const LOGIN_COMPLETED = "LOGIN_COMPLETED";
const LOGIN_FAILED = "LOGIN_FAILED";
const LOGOUT = "LOGOUT";
const SET_REDIRECT_AFTER_LOGIN = "SET_REDIRECT_AFTER_LOGIN";

export const login = {
    name: LOGIN,
    url: ( baseUrl ) => `${ baseUrl }/login/`,
    started: {
        type: LOGIN,
    },
    completed: ( response ) => ( {
        type: LOGIN_COMPLETED,
        payload: {
            token: response.token,
        },
    } ),
    failed: ( response ) => ( {
        type: LOGIN_FAILED,
        payload: {
            message: response.error,
        },
    } ),
};

const logoutAction = {
    type: LOGOUT,
};

export const logout = ( dispatch ) => {
    dispatch( logoutAction );
    dispatch( Notification.info( "Successfully logged out!" ) );
};

export const setRedirectAfterLogin = ( redirectUrl ) => ( {
    type: SET_REDIRECT_AFTER_LOGIN,
    payload: {
        redirectUrl,
    },
} );

const initialState = { token: null };

export default createReducer( initialState )( {
    [ LOGIN_COMPLETED ]: ( state, payload ) => Object.assign( { }, state, {
        token: payload.token,
        isAuthenticated: true,
    } ),
    [ LOGOUT ]: ( ) => ( {
        token: null,
        isAuthenticated: false,
    } ),
    [ SET_REDIRECT_AFTER_LOGIN ]: ( state, payload ) => Object.assign( { }, state, {
        redirectUrl: payload.redirectUrl,
    } ),
} );
