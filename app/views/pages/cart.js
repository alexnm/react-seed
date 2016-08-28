import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Api } from "../../helpers";

const Cart = React.createClass( {
    propTypes: {
    },

    render( ) {
        return (
            <div>
                <Helmet title="My shopping cart" />
                <h1>My shopping cart</h1>
            </div>
        );
    },
} );

export default connect( null )( Cart );
