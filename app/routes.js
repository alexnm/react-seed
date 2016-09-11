import React from "react";
import { IndexRoute, Route } from "react-router";
import { Cart, Home, Login, NotFound, ProductList, ProductDetails } from "./views/pages";
import Layout from "./views/layouts/layout";
import { withAuthentication } from "./enhancers";
import { setRedirectAfterLogin } from "./actions/sessionActions";

export default function createRoutes( dispatch ) {
    const setRedirectUrl = ( prevState, nextState ) => {
        const oldUrl = prevState.location.pathname;
        const newUrl = nextState.location.pathname;

        if ( nextState.location.action === "PUSH" && newUrl === "/login" ) {
            dispatch( setRedirectAfterLogin( oldUrl ) );
        }
    };

    return (
        <Route path="/" component={ Layout } onChange={ setRedirectUrl }>
            <IndexRoute component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/products" component={ ProductList } />
            <Route path="/products/:id" component={ ProductDetails } />
            <Route path="/my-cart" component={ withAuthentication( Cart ) } />
            <Route path="/*" component={ NotFound } />
        </Route>
    );
}
