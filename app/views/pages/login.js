import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Formsy from "formsy-react";
import Dictionary from "../../dictionary";
import { Api } from "../../helpers";
import { login } from "../../actions/sessionActions";

const Login = ( { onSubmitLogin } ) => (
    <div>
        <Helmet title={ Dictionary.login.explanation } />
        <h1>{ Dictionary.login.title }</h1>

        <Formsy.Form onValidSubmit={ onSubmitLogin }>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" />
            </div>

            <button type="submit">Submit</button>
        </Formsy.Form>
    </div>
);

const mapDispatchToProps = ( dispatch ) => ( {
    onSubmitLogin: ( model ) => {
        const body = { };
        console.log( model );
        dispatch( Api.post( login )( null, body ) );
    },
} );

export default connect( null, mapDispatchToProps )( Login );
