import { LOGIN_FAILED } from "../actionIdentifiers";

const initialState = "";

export default ( state = initialState, action ) => {
    switch ( action.type ) {

    case LOGIN_FAILED:
        return action.message;

    default: return state;
    }
};
