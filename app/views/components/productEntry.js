import React from "react";
import { Link } from "react-router";

const ProductEntry = ( { product } ) => (
    <div className="product-box">
        <img className="product-image" src={ product.get( "imageUrl" ) } alt={ product.get( "name" ) } />
        <Link to={ `/products/${ product.get( "id" ) }` }>
            { product.get( "name" ) }
        </Link> - <span>{ product.get( "price" ) } €</span>
    </div>
);

const { shape, string, number } = React.PropTypes;
ProductEntry.propTypes = {
    product: shape( {
        id: number.isRequired,
        imageUrl: string.isRequired,
        name: string.isRequired,
        price: string.price,
    } ),
};

export default ProductEntry;
