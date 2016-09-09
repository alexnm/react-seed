import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import reducers from "./reducers";

export default function configureStore( initialState ) {
    const loggerMiddleware = createLogger( );

    const createStoreWithMiddleware = applyMiddleware(
        loggerMiddleware,
        thunkMiddleware
    )( createStore );

    return createStoreWithMiddleware( reducers, initialState );
}
