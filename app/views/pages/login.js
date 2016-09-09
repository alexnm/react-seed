import React from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Dictionary from "../../dictionary";
import { Api } from "../../helpers";
import { login } from "../../actions/sessionActions";
import { LoginForm } from "../components/forms";

const Login = React.createClass( {
    propTypes: {
        isAuthenticated: React.PropTypes.bool,
        redirectAfterLogin: React.PropTypes.string,
        onSubmitLogin: React.PropTypes.func,
        serverError: React.PropTypes.string,
    },

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

                <LoginForm onSubmit={ this.props.onSubmitLogin } serverError={ this.props.serverError } />
            </div>
        );
    },
} );

const mapStateToProps = ( state ) => ( {
    isAuthenticated: state.session.isAuthenticated,
    redirectAfterLogin: state.session.redirectUrl,
    serverError: state.serverError,
} );

const mapDispatchToProps = ( dispatch ) => ( {
    onSubmitLogin: ( model ) => {
        dispatch( Api.post( login )( null, model ) );
    },
} );

export default connect( mapStateToProps, mapDispatchToProps )( Login );
