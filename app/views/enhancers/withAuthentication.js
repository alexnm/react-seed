import React from "react";
import { connect } from "react-redux";
import { Router } from "../helpers";

export default function withAuthentication( WrappedComponent ) {
    const AuthComponent = React.createClass( {
        propTypes: {
            isAuthenticated: React.PropTypes.bool,
            location: React.PropTypes.shape( {
                pathname: React.PropTypes.string,
            } ),
        },

        componentWillMount( ) {
            if ( !this.props.isAuthenticated ) {
                Router.redirectTo( "/login" );
            }
        },

        componentWillReceiveProps( nextProps ) {
            if ( !nextProps.isAuthenticated ) {
                Router.redirectTo( "/login" );
            }
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
    } );

    return connect( mapStateToProps )( AuthComponent );
}
