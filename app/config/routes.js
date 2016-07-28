import React from "react";
import { Route } from "react-router";
import Home from "../components/home";
import ProductList from "../components/productList";
import Layout from "../layouts/layout";

export default (
    <Route component={ Layout }>
        <Route path="/" component={ Home } />
        <Route path="/products" component={ ProductList } />
    </Route>
);
