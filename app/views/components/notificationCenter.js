import React from "react";
import { connect } from "react-redux";

const buildMessage = ( { text, type }, index ) => (
    <div key={ index } className={ `message ${ type }` }>{ text }</div>
);

const NotificationCenter = ( { messages } ) => (
    <div className="notification-center">
        { messages.map( buildMessage ) }
    </div>
);

const mapStateToProps = ( state ) => ( {
    messages: state.notifications,
} );

export default connect( mapStateToProps )( NotificationCenter );
