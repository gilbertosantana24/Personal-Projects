import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/nav.css';


const Navbar = () => {

    return (
        <div className="navbar">
            <Link to="/">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amznLogo" />
            </Link>

            
            <div className="navbar_nav">
                <div className="nav_option">
                    <Link to="/">Home</Link>
                </div>

                <div className="nav_option">
                    <Link to="/login">Log In</Link>
                </div>

                <div className="nav_option">
                    <Link to="/signup"> Sign Up</Link>
                </div>

                <div className="cart">
                    <Link to="/cart">
                        <img src="https://icon-library.com/images/white-shopping-bag-icon/white-shopping-bag-icon-4.jpg" alt="shoppingCart" />

                    </Link>
                </div>

            </div>

        </div>

    )
}

export default Navbar;