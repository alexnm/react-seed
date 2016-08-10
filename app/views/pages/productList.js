import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productActions";

const ProductList = React.createClass( {
    componentDidMount( ) {
        this.props.dispatch( fetchProducts( ) );
    },

    productEntry( product, index ) {
        return (
            <div key={ index }>
                <strong>{ product.name }</strong> - <span>{ product.price }</span>
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

function mapStateToProps( state ) {
    return {
        products: state.products.products,
    };
}

export default connect( mapStateToProps )( ProductList );
