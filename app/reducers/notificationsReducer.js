import { PUSH_NOTIFICATION, DISMISS_NOTIFICATION } from "../actionIdentifiers";
import createReducer from "./createReducer";

const initialState = [ ];

export default createReducer( initialState )( {
    [ PUSH_NOTIFICATION ]: ( state, payload ) => [ ...state, payload ],
    [ DISMISS_NOTIFICATION ]: ( state, payload ) => {
        const index = state.map( n => n.id ).indexOf( payload.id );
        return [
            ...state.slice( 0, index ),
            ...state.slice( index + 1 ),
        ];
    },
} );
