import React from "react";
import Formsy from "formsy-react";
import { InputField } from "../formElements";

const LoginForm = ( { onSubmit } ) => (
    <Formsy.Form onValidSubmit={ onSubmit }>
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
);

LoginForm.propTypes = {
    onSubmit: React.PropTypes.func,
};

export default LoginForm;
