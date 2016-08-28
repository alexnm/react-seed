import React from "react";
import { IndexRoute, Route } from "react-router";
import { Cart, Home, Login, ProductList, ProductDetails } from "./views/pages";
import Layout from "./views/layouts/layout";
import { userLoggedIn } from "./reducers";

const routes = ( dispatch, getState ) => {
    const requireAuth = ( nextState, replace ) => {
        const state = getState( );
        if ( !userLoggedIn( state ) ) {
            replace( { pathname: "/login" } );
        }
    };

    return (
        <Route path="/" component={ Layout }>
            <IndexRoute component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/products" component={ ProductList } onEnter={ ( ) => dispatch( ProductList.prerequisites( ) ) } />
            <Route path="/products/:id" component={ ProductDetails } />
            <Route path="/my-cart" component={ Cart } onEnter={ requireAuth } />
        </Route>
    );
};

export default routes;
