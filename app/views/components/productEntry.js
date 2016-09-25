import React from "react";
import { Link } from "react-router";

const ProductEntry = ( { product } ) => (
    <div className="product-box">
        <img className="product-image" src={ product.imageUrl } alt={ product.name } />
        <Link to={ `/products/${ product.id }` }>
            { product.name }
        </Link> - <span>{ product.price } €</span>
    </div>
);

ProductEntry.propTypes = {
    product: React.PropTypes.object,
};

export default ProductEntry;
