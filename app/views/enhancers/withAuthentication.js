import React from "react";
import { connect } from "react-redux";
import { Router } from "../helpers";

const { bool } = React.PropTypes;

export default function withAuthentication( WrappedComponent ) {
    const AuthComponent = React.createClass( {
        propTypes: {
            isAuthenticated: bool.isRequired,
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
            console.log( this.props.isAuthenticated );
            return (
                <div>
                    { this.props.isAuthenticated === true ? <WrappedComponent { ...this.props } /> : null }
                </div>
            );
        },
    } );

    const mapStateToProps = ( state ) => ( {
        isAuthenticated: state.get( "session" ).get( "isAuthenticated" ),
    } );

    return connect( mapStateToProps )( AuthComponent );
}
