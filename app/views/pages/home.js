import React from "react";
import Helmet from "react-helmet";

export default React.createClass( {
    render( ) {
        return (
            <div>
                <Helmet title="Welcome to awesomeness!" />
                <h1>Welcome to React!</h1>
            </div>
        );
    },
} );
