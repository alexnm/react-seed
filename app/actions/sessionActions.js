import * as Actions from "../actionIdentifiers";

export const login = {
    name: Actions.LOGIN,
    started: {
        type: Actions.LOGIN,
    },
    completed: ( response ) => ( {
        type: Actions.LOGIN_COMPLETED,
        token: response.token,
    } ),
    failed: ( error ) => ( {
        type: Actions.LOGIN_FAILED,
        message: error.message,
    } ),
};

export const logout = {
    type: Actions.LOGOUT,
};
