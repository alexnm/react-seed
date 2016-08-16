import { GET_PRODUCT, GET_PRODUCT_COMPLETED } from "../actionIdentifiers";

const initialState = { };

export default ( state = initialState, action ) => {
    switch ( action.type ) {

    case GET_PRODUCT:
        return { };

    case GET_PRODUCT_COMPLETED:
        return action.product;

    default: return state;
    }
};
