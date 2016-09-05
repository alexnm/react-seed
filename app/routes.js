import React from "react";
import { IndexRoute, Route } from "react-router";
import { Cart, Home, Login, ProductList, ProductDetails } from "./views/pages";
import Layout from "./views/layouts/layout";
import { withAuthentication } from "./enhancers";

const routes = (
    <Route path="/" component={ Layout }>
        <IndexRoute component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/products" component={ ProductList } />
        <Route path="/products/:id" component={ ProductDetails } />
        <Route path="/my-cart" component={ withAuthentication( Cart ) } />
    </Route>
);

export default routes;
