import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { NotificationCenter } from "../components";

const Layout = ( { showSpinner, children } ) => {
    const spinner = showSpinner ? ( <span>Loading...</span> ) : "";

    return (
        <div>
            <div>
                <Link className="navlink" to="/">Home</Link>
                <Link className="navlink" to="/products">Products</Link>
                <Link className="navlink" to="/my-cart">My Cart</Link>
                <Link className="navlink" to="/login">Login</Link>
            </div>
            <div>
                { spinner }
                { children }
            </div>
            <NotificationCenter />
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
