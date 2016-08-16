import { API_CALL_STARTED, API_CALL_ENDED } from "../actionIdentifiers";

function apiCallStarted( ) {
    return {
        type: API_CALL_STARTED,
    };
}

function apiCallEnded( ) {
    return {
        type: API_CALL_ENDED,
    };
}

export default {
    apiCallStarted,
    apiCallEnded,
};
