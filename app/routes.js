import React from "react";
import { IndexRoute, Route } from "react-router";
import { Cart, Home, Login, ProductList, ProductDetails } from "./views/pages";
import Layout from "./views/layouts/layout";

const requireAuth = ( nextState, replace ) => {
    replace( { pathname: "/login" } );
};

const routes = ( dispatch ) => (
    <Route path="/" component={ Layout }>
        <IndexRoute component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/products" component={ ProductList } onEnter={ ( ) => dispatch( ProductList.prerequisites( ) ) } />
        <Route path="/products/:id" component={ ProductDetails } />
        <Route path="/my-cart" component={ Cart } onEnter={ requireAuth } />
    </Route>
);

export default routes;
