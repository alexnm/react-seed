import { LOGIN_COMPLETED, LOGOUT, SET_REDIRECT_AFTER_LOGIN } from "../actionIdentifiers";

const initialState = { token: null };

export default ( state = initialState, action ) => {
    switch ( action.type ) {

    case LOGIN_COMPLETED:
        return Object.assign( { }, state, {
            token: action.token,
            isAuthenticated: true,
        } );

    case LOGOUT: return {
        token: null,
        isAuthenticated: false,
    };

    case SET_REDIRECT_AFTER_LOGIN:
        return Object.assign( { }, state, {
            redirectUrl: action.redirectUrl,
        } );

    default: return state;
    }
};
