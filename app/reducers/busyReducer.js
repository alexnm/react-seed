import { API_CALL_STARTED, API_CALL_ENDED } from "../actionIdentifiers";

const initialState = 0;

export default ( state = initialState, action ) => {
    switch ( action.type ) {

    case API_CALL_STARTED: return state + 1;
    case API_CALL_ENDED: return state - 1;

    default: return state;
    }
};
