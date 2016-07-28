import express from "express";
import apiRoutes from "./apiRoutes";

import React from "react";
import { renderToString } from "react-dom/server";
import { RouterContext, match } from "react-router";
import routes from "../app/config/routes";

const app = express( );

app.use( "/dist", express.static( "dist" ) );

app.use( "/api", apiRoutes );

app.use( ( req, res ) => {
    match( { routes: routes, location: req.url }, ( error, redirect, props ) => {
        const reactDom = renderToString(
            <RouterContext { ...props } />
        );

        res.set( "Content-Type", "text/html" ).status( 200 ).end( renderPage( reactDom ) );
    } );
} );

const renderPage = ( reactDom ) => {
    return `
        <!doctype html>
        <html>
            <head>

            </head>
            <body>
                <div id="react-root">${ reactDom }</div>
                <script type="text/javascript" src="/dist/bundle.js"></script>
            </body>
        </html>
    `;
};

app.listen( 1234, ( err ) => {
    if ( !err ) {
        console.log( "App started on port 1234" ); // eslint-disable-line
    }
} );
