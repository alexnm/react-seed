import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

const Layout = ( { showSpinner, children } ) => {
    const spinner = showSpinner ? ( <span>Loading...</span> ) : "";

    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/my-cart">My Cart</Link>
            </div>
            <div>
                { spinner }
                { children }
            </div>
        </div>
    );
};

Layout.propTypes = {
    showSpinner: React.PropTypes.bool,
    children: React.PropTypes.object,
};

function mapStateToProps( state ) {
    return {
        showSpinner: state.busy > 0,
    };
}

export default connect( mapStateToProps )( Layout );
