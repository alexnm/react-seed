import React from "react";
import { Link } from "react-router";

export default ( { product } ) => (
    <div>
        <Link to={ `/products/${ product.id }` }>
            { product.name }
        </Link> - <span>{ product.price }</span>
    </div>
);
