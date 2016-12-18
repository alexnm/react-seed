import Immutable from "immutable";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { LocalStorage } from "../app/utilities";
import createRoutes from "../app/routes";
import configureStore from "../app/store";
import { initializeCart } from "../app/ducks/cart";

const immutableInitialState = Immutable.fromJS( window.INITIAL_STATE );
const store = configureStore( immutableInitialState );
const routes = createRoutes( store.dispatch );

const rootHtml = (
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>
);

render( rootHtml, document.getElementById( "react-root" ) );

const cart = LocalStorage.loadCart( );
if ( cart ) {
    store.dispatch( initializeCart( cart ) );
}
