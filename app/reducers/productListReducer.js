import { GET_PRODUCTS_COMPLETED } from "../actionIdentifiers";

const initialState = [ ];

export default ( state = initialState, action ) => {
    switch ( action.type ) {

    case GET_PRODUCTS_COMPLETED:
        return action.products;

    default: return state;
    }
};
