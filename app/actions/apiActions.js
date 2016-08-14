export const API_CALL_STARTED = "API_CALL_STARTED";
export const API_CALL_ENDED = "API_CALL_ENDED";

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
