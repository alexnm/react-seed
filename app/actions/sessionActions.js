import * as Actions from "../actionIdentifiers";

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

export const logout = {
    type: Actions.LOGOUT,
};

export const setRedirectAfterLogin = ( redirectUrl ) => ( {
    type: Actions.SET_REDIRECT_AFTER_LOGIN,
    payload: {
        redirectUrl,
    },
} );
