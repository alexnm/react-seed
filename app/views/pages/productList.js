import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import { fetchProducts } from "../../actions/productActions";
import { Api } from "../../helpers";
import { ProductEntry } from "../components";

const ProductList = React.createClass( {
    propTypes: {
        products: React.PropTypes.object,
    },

    statics: {
        prerequisites: ( ) => Api.get( fetchProducts ),
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
