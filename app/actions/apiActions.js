import { API_CALL_STARTED, API_CALL_ENDED } from "../actionIdentifiers";

const apiCallStarted = ( ) => ( { type: API_CALL_STARTED } );
const apiCallEnded = ( ) => ( { type: API_CALL_ENDED } );

export default {
    apiCallStarted,
    apiCallEnded,
};
