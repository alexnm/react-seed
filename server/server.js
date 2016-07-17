import express from "express";

const app = express( );

app.use( "/dist", express.static( "dist" ) );

app.use( ( req, res ) => {
    res.set( "Content-Type", "text/html" ).status( 200 ).end( renderPage( ) );
} );

const renderPage = ( ) => {
    return `
        <!doctype html>
        <html>
            <head>

            </head>
            <body>
                <div id="react-root" />
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
