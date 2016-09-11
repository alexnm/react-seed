import * as Actions from "../actionIdentifiers";
import { Notification } from "../helpers";

export const login = {
    name: Actions.LOGIN,
    started: {
        type: Actions.LOGIN,
    },
    completed: ( response ) => ( {
        type: Actions.LOGIN_COMPLETED,
        payload: {
            token: response.token,
        },
    } ),
    failed: ( response ) => ( {
        type: Actions.LOGIN_FAILED,
        payload: {
            message: response.error,
        },
    } ),
};

const logoutAction = {
    type: Actions.LOGOUT,
};

export const logout = ( dispatch ) => {
    dispatch( logoutAction );
    dispatch( Notification.info( "Successfully logged out!" ) );
};

export const setRedirectAfterLogin = ( redirectUrl ) => ( {
    type: Actions.SET_REDIRECT_AFTER_LOGIN,
    payload: {
        redirectUrl,
    },
} );
