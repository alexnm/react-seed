import React from "react";
import { Link } from "react-router";
import Dictionary from "../../dictionary";

const CartItem = ( { item, index, onRemoveItem } ) => (
    <div className="cart-item">
        <Link to={ `/products/${ item.id }` }>
            { item.name }
        </Link> - <span>{ item.price }</span>
        <span className="link" onClick={ ( ) => onRemoveItem( index ) }>{ Dictionary.cart.remove }</span>
    </div>
);

CartItem.propTypes = {
    item: React.PropTypes.object,
    key: React.PropTypes.number,
    onRemoveItem: React.PropTypes.func,
};

export default CartItem;
