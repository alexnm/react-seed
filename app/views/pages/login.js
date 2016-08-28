import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { Api } from "../../helpers";

const Login = React.createClass( {
    propTypes: {
    },

    render( ) {
        return (
            <div>
                <Helmet title="Login to have access to all functionalities" />
                <h1>Login</h1>
            </div>
        );
    },
} );

const mapStateToProps = ( state ) => ( {

} );

export default connect( mapStateToProps )( Login );
