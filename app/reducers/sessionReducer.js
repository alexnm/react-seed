import { LOGIN_COMPLETED, LOGOUT, SET_REDIRECT_AFTER_LOGIN } from "../actionIdentifiers";
import createReducer from "./createReducer";

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
