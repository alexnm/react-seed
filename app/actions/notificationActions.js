import * as Actions from "../actionIdentifiers";

export const pushNotification = ( type, text ) => ( {
    type: Actions.PUSH_NOTIFICATION,
    payload: {
        type,
        text,
    },
} );

export const dismissNotification = ( id ) => ( {
    type: Actions.DISMISS_NOTIFICATION,
    payload: {
        id,
    },
} );
