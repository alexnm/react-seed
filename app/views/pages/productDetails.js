import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/productActions";
import { Api } from "../../helpers";

const loadProduct = Api.get( fetchProduct );

const ProductDetails = React.createClass( {
    propTypes: {
        params: React.PropTypes.object,
        product: React.PropTypes.object.isRequired,
        dispatch: React.PropTypes.func,
    },

    statics: {
        prerequisites: ( { params } ) => loadProduct( { id: params.id } ),
    },

    componentDidMount( ) {
        if ( this.props.product.id !== parseInt( this.props.params.id, 10 ) ) {
            this.props.dispatch( loadProduct( { id: this.props.params.id } ) );
        }
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

const mapStateToProps = ( state ) => ( {
    product: state.selectedProduct,
} );

export default connect( mapStateToProps )( ProductDetails );
