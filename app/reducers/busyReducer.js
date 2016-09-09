import { API_CALL_STARTED, API_CALL_ENDED } from "../actionIdentifiers";
import createReducer from "./createReducer";

const initialState = 0;

export default createReducer( initialState )( {
    [ API_CALL_STARTED ]: state => state + 1,
    [ API_CALL_ENDED ]: state => state - 1,
} );
