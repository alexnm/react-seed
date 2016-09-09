import { LOGIN_FAILED } from "../actionIdentifiers";
import createReducer from "./createReducer";

const initialState = "";

export default createReducer( initialState )( {
    [ LOGIN_FAILED ]: ( state, payload ) => payload.message,
} );
