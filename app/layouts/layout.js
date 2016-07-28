import React from "react";
import { Link } from "react-router";

export default React.createClass( {
    render( ) {
        return (
            <div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                </div>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
} );
