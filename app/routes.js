import React from "react";
import { IndexRoute, Route } from "react-router";
import { Home, ProductList, ProductDetails } from "./views/pages";
import Layout from "./views/layouts/layout";

const routes = ( dispatch ) => (
    <Route path="/" component={ Layout }>
        <IndexRoute component={ Home } />
        <Route path="/products" component={ ProductList } onEnter={ ( ) => dispatch( ProductList.prerequisites( ) ) } />
        <Route path="/products/:id" component={ ProductDetails } />
    </Route>
);

export default routes;
