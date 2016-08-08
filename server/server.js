import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { RouterContext, match } from "react-router";
import { Provider } from "react-redux";

import apiRoutes from "./apiRoutes";
import routes from "../app/routes";
import configureStore from "../app/store";

const app = express( );

app.use( "/dist", express.static( "dist" ) );

app.use( "/api", apiRoutes );

app.use( ( req, res ) => {
    match( { routes, location: req.url }, ( error, redirect, props ) => {
        const store = configureStore( );
        const reactDom = renderToString(
            <Provider store={ store }>
                <RouterContext { ...props } />
            </Provider>
        );

        const initialState = store.getState();

        res.set( "Content-Type", "text/html" )
           .status( 200 )
           .end( renderPage( reactDom, initialState ) );
    } );
} );

function renderPage( reactDom, initialState ) {
    return `
        <!doctype html>
        <html>
            <head>

            </head>
            <body>
                <div id="react-root">${ reactDom }</div>
                <script>
                    window.__INITIAL_STATE__ = ${ JSON.stringify( initialState ) };
                </script>
                <script type="text/javascript" src="/dist/bundle.js"></script>
            </body>
        </html>
    `;
}

app.listen( 1234, ( err ) => {
    if ( !err ) {
        console.log( "App started on port 1234" ); // eslint-disable-line
    }
} );
