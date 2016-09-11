import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { fetchProducts } from "../../actions/productActions";
import { Api } from "../../helpers";
import { ProductEntry } from "../components";

const loadProducts = Api.get( fetchProducts );

const ProductList = React.createClass( {
    propTypes: {
        products: React.PropTypes.array,
        dispatch: React.PropTypes.func,
    },

    statics: {
        prerequisites: loadProducts,
    },

    componentDidMount( ) {
        if ( this.props.products.length === 0 ) {
            this.props.dispatch( loadProducts( ) );
        }
    },

    render( ) {
        const products = this.props.products;
        return (
            <div>
                <Helmet title="Fresh food!" />
                <h1>Product List!</h1>
                { products.map( ( product, index ) => (
                    <ProductEntry product={ product } key={ index } />
                ) ) }
            </div>
        );
    },
} );

const mapStateToProps = ( state ) => ( {
    products: state.products,
} );

export default connect( mapStateToProps )( ProductList );
