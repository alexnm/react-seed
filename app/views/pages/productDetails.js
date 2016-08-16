import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/productActions";
import { Api } from "../../helpers";

const ProductDetails = React.createClass( {
    componentDidMount( ) {
        console.log( this.props );
        this.props.dispatch( Api.get( fetchProduct, { id: this.props.params.id } ) );
    },

    render( ) {
        const product = this.props.product;
        return (
            <div>
                <h1>Product Details!</h1>
                <h2>{ product.name }</h2>
                <p>Price: ${ product.price }</p>
                <p>Description: { product.description }</p>
            </div>
        );
    },
} );

function mapStateToProps( state ) {
    return {
        product: state.selectedProduct,
    };
}

export default connect( mapStateToProps )( ProductDetails );
