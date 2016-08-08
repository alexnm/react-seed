import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "../app/routes";
import configureStore from "../app/store";

const store = configureStore( );

const rootHtml = (
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>
);

render( rootHtml, document.getElementById( "react-root" ) );