import { LOGIN_COMPLETED } from "../actionIdentifiers";

const initialState = { token: null };

export default ( state = initialState, action ) => {
    switch ( action.type ) {

    case LOGIN_COMPLETED: return { token: action.token };

    default: return state;
    }
};

export const userLoggedIn = ( state ) => !!state.token;
