import React from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Formsy from "formsy-react";
import Dictionary from "../../dictionary";
import { Api } from "../../helpers";
import { login } from "../../actions/sessionActions";
import { InputField } from "../components/formElements";

const Login = React.createClass( {
    componentWillReceiveProps( nextProps ) {
        if ( !this.props.isAuthenticated && nextProps.isAuthenticated ) {
            browserHistory.push( this.props.redirectAfterLogin || "/" );
        }
    },

    render( ) {
        return (
            <div>
                <Helmet title={ Dictionary.login.explanation } />
                <h1>{ Dictionary.login.title }</h1>

                <Formsy.Form onValidSubmit={ this.props.onSubmitLogin }>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <InputField type="text" name="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <InputField type="password" name="password" />
                    </div>

                    <button type="submit">Submit</button>
                </Formsy.Form>
            </div>
        );
    },
} );

const mapStateToProps = ( state ) => ( {
    isAuthenticated: state.session.isAuthenticated,
    redirectAfterLogin: state.session.redirectUrl,
} );

const mapDispatchToProps = ( dispatch ) => ( {
    onSubmitLogin: ( model ) => {
        dispatch( Api.post( login )( null, model ) );
    },
} );

export default connect( mapStateToProps, mapDispatchToProps )( Login );
