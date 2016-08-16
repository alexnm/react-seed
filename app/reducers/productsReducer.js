import { GET_PRODUCTS_COMPLETED } from "../actionIdentifiers";

const initialState = { products: [ ] };

export default ( state = initialState, action ) => {
    switch ( action.type ) {
    case GET_PRODUCTS_COMPLETED:
        return {
            products: action.products,
        };

    default: return state;
    }
};
