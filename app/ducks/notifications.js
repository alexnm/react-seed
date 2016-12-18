import Immutable from "immutable";
import { createReducer } from "./utilities";

const DISMISS_NOTIFICATION = "DISMISS_NOTIFICATION";
const PUSH_NOTIFICATION = "PUSH_NOTIFICATION";

export const pushNotification = ( type, text ) => ( {
    type: PUSH_NOTIFICATION,
    payload: {
        type,
        text,
    },
} );

export const dismissNotification = ( id ) => ( {
    type: DISMISS_NOTIFICATION,
    payload: {
        id,
    },
} );

const initialState = Immutable.List( );

export default createReducer( initialState )( {
    [ PUSH_NOTIFICATION ]: ( state, payload ) => state.push( Immutable.fromJS( payload ) ),
    [ DISMISS_NOTIFICATION ]: ( state, payload ) => {
        const index = state.map( n => n.get( "id" ) ).indexOf( payload.id );
        return state.delete( index );
    },
} );
