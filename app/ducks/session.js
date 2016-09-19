import { createReducer, createAsyncAction } from "./utilities";

const LOGIN = "LOGIN";
const LOGIN_COMPLETED = "LOGIN_COMPLETED";
const LOGOUT = "LOGOUT";
const SET_REDIRECT_AFTER_LOGIN = "SET_REDIRECT_AFTER_LOGIN";

const mapResponseToPayload = ( response ) => ( {
    token: response.token,
} );

const urlMapper = ( ) => "/login/";
export const login = createAsyncAction( LOGIN, urlMapper, mapResponseToPayload );

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
