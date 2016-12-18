import React from "react";
import { Link } from "react-router";
import Dictionary from "../../dictionary";

const CartItem = ( { item, index, onRemoveItem } ) => {
    console.log( item );
    return (
        <div className="cart-item">
            <Link to={ `/products/${ item.get( "id" ) }` }>
                { item.get( "name" ) }
            </Link> - <span>{ item.get( "price" ) }</span>
            <span className="link" onClick={ ( ) => onRemoveItem( index ) }>{ Dictionary.cart.remove }</span>
        </div>
    );
};

const { shape, string, number, func } = React.PropTypes;
CartItem.propTypes = {
    item: shape( {
        id: number.isRequired,
        name: string.isRequired,
        price: number.isRequired,
    } ),
    index: number.isRequired,
    onRemoveItem: func.isRequired,
};

export default CartItem;
