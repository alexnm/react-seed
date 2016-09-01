import React from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { setRedirectAfterLogin } from "../actions/sessionActions";

export default function withAuthentication( WrappedComponent ) {
    const AuthComponent = React.createClass( {
        propTypes: {
            isAuthenticated: React.PropTypes.bool,
            redirectAfterLogin: React.PropTypes.string,
            location: React.PropTypes.shape( {
                pathname: React.PropTypes.string,
            } ),
            onRedirectToLogin: React.PropTypes.func,
        },

        componentWillMount( ) {
            if ( !this.props.isAuthenticated ) {
                this.redirectIfGuest( );
            }
        },

        componentWillReceiveProps( nextProps ) {
            if ( !nextProps.isAuthenticated ) {
                this.redirectIfGuest( );
            }
        },

        redirectIfGuest( ) {
            this.props.onRedirectToLogin( this.props.location.pathname );
            browserHistory.push( "/login" );
        },

        render( ) {
            return (
                <div>
                    { this.props.isAuthenticated === true ? <WrappedComponent { ...this.props } /> : null }
                </div>
            );
        },
    } );

    const mapStateToProps = ( state ) => ( {
        isAuthenticated: state.session.isAuthenticated,
        redirectAfterLogin: state.session.redirectUrl,
    } );

    const mapDispatchToProps = ( dispatch ) => ( {
        onRedirectToLogin: ( url ) => dispatch( setRedirectAfterLogin( url ) ),
    } );

    return connect( mapStateToProps, mapDispatchToProps )( AuthComponent );
}
