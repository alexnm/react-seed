import { API_CALL_STARTED, API_CALL_ENDED } from "../actionIdentifiers";

export const apiCallStarted = { type: API_CALL_STARTED };
export const apiCallEnded = { type: API_CALL_ENDED };

export default {
    apiCallStarted,
    apiCallEnded,
};
