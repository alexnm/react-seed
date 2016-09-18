import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { NotificationCenter } from "../components";
import { logout } from "../../ducks/session";

const Layout = ( { showSpinner, isAuthenticated, children, onLogout } ) => {
    const spinner = showSpinner ? ( <span>Loading...</span> ) : "";

    const userLink = isAuthenticated ?
        ( <span className="navlink" onClick={ onLogout }>Logout</span> ) :
        ( <Link className="navlink" to="/login">Login</Link> );

    return (
        <div>
            <div>
                <Link className="navlink" to="/">Home</Link>
                <Link className="navlink" to="/products">Products</Link>
                <Link className="navlink" to="/my-cart">My Cart</Link>
                { userLink }
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
    isAuthenticated: React.PropTypes.bool,
    children: React.PropTypes.object,
};

const mapStateToProps = ( state ) => ( {
    showSpinner: state.busy > 0,
    isAuthenticated: state.session.isAuthenticated,
} );

const mapDispatchToProps = ( dispatch ) => ( {
    onLogout: ( ) => dispatch( logout ),
} );

export default connect( mapStateToProps, mapDispatchToProps )( Layout );
