import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Dictionary from "../../dictionary";
import { CartItem } from "../components";
import { removeFromCart } from "../../actions/productActions";

const Cart = ( { items, onRemoveFromCart } ) => (
    <div>
        <Helmet title={ Dictionary.cart.myCart } />
        <h1>{ Dictionary.cart.myCart }</h1>

        { items.map( ( item, index ) => (
            <CartItem item={ item } key={ index } index={ index } onRemoveItem={ onRemoveFromCart } />
        ) ) }
    </div>
);

const mapStateToProps = ( state ) => ( {
    items: state.cart,
} );

const mapDispatchToProps = ( dispatch ) => ( {
    onRemoveFromCart: ( index ) => dispatch( removeFromCart( index ) ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( Cart );
