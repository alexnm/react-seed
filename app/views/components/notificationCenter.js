import React from "react";
import { connect } from "react-redux";

const buildMessage = ( message, index ) => (
    <div key={ index } className={ `message ${ message.get( "type" ) }` }>{ message.get( "text" ) }</div>
);

const NotificationCenter = ( { messages } ) => (
    <div className="notification-center">
        { messages.map( buildMessage ) }
    </div>
);

const { shape, string, arrayOf } = React.PropTypes;
NotificationCenter.propTypes = {
    messages: arrayOf( shape( {
        text: string.isRequired,
        type: string.isRequired,
    } ) ),
};

const mapStateToProps = ( state ) => ( {
    messages: state.get( "notifications" ),
} );

export default connect( mapStateToProps )( NotificationCenter );
