import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import { Api } from "../../helpers";

const ProductList = React.createClass( {
    statics: {
        prerequisites: ( ) => Api.get( fetchProducts ),
    },

    componentDidMount( ) {
        if ( this.props.products.length === 0 ) {
            this.props.dispatch( Api.get( fetchProducts ) );
        }
    },

    productEntry( product, index ) {
        return (
            <div key={ index }>
                <Link to={ `/products/${ product.id }` }>
                    { product.name }
                </Link> - <span>{ product.price }</span>
            </div>
        );
    },

    render( ) {
        const products = this.props.products;
        return (
            <div>
                <h1>Product List!</h1>
                { products.map( this.productEntry ) }
            </div>
        );
    },
} );

const mapStateToProps = ( state ) => ( {
    products: state.products,
} );

export default connect( mapStateToProps )( ProductList );
