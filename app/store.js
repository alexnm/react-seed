import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { persistCart, storeAuthToken } from "./middlewares";
import busy from "./ducks/busy";
import cart from "./ducks/cart";
import notifications from "./ducks/notifications";
import products from "./ducks/productList";
import selectedProduct from "./ducks/productDetails";
import serverError from "./ducks/serverError";
import session from "./ducks/session";

export default function configureStore( initialState ) {
    const loggerMiddleware = createLogger( );

    const createStoreWithMiddleware = applyMiddleware(
        loggerMiddleware,
        thunkMiddleware,
        storeAuthToken,
        persistCart
    )( createStore );

    const combinedReducer = combineReducers( {
        busy,
        cart,
        notifications,
        products,
        selectedProduct,
        serverError,
        session,
    } );

    return createStoreWithMiddleware( combinedReducer, initialState );
}
