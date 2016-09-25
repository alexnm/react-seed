import React from "react";
import Formsy from "formsy-react";

const InputField = React.createClass( {

    mixins: [ Formsy.Mixin ],

    changeValue( event ) {
        this.setValue( event.currentTarget.value );
    },

    render() {
        const errorClass = this.showError( ) ? "error" : null;
        const className = this.showRequired( ) ? "required" : errorClass;
        const errorMessage = this.getErrorMessage( );

        return (
            <div className={ className }>
                <input type={ this.props.type } onChange={ this.changeValue } />
                <span>{ errorMessage }</span>
            </div>
        );
    },
} );

export default InputField;
