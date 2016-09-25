import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { Cookies, LocalStorage } from "../app/utilities";
import createRoutes from "../app/routes";
import configureStore from "../app/store";
import { initializeSession } from "../app/ducks/session";
import { initializeCart } from "../app/ducks/cart";

const store = configureStore( window.INITIAL_STATE );
const routes = createRoutes( store.dispatch );

const rootHtml = (
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>
);

render( rootHtml, document.getElementById( "react-root" ) );

/* const token = Cookies.get( "token" );
if ( token ) {
    store.dispatch( initializeSession( token ) );
}*/

const cart = LocalStorage.loadCart( );
if ( cart ) {
    store.dispatch( initializeCart( cart ) );
}
