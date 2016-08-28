import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Dictionary from "../../dictionary";
import { Api } from "../../helpers";
import { login } from "../../actions/sessionActions";

const Login = ( { onSubmitLogin } ) => (
    <div>
        <Helmet title={ Dictionary.login.explanation } />
        <h1>{ Dictionary.login.title }</h1>
        <div>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" />
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
        </div>
        <input type="button" name="Submit" onClick={ ( ) => onSubmitLogin( ) } />
    </div>
);

const mapDispatchToProps = ( dispatch ) => ( {
    onSubmitLogin: ( username, password ) => {
        const body = { username, password };
        console.log( body );
        dispatch( Api.post( login )( null, body ) );
    },
} );

export default connect( null, mapDispatchToProps )( Login );
