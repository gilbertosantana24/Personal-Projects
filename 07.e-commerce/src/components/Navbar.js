import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/nav.css';

const Navbar = () => {

    return(
        <div className="navbar">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amznLogo" />

            <div className="navbar_searchbar">
                <input className="searchbar_input" type="text" />
            </div>

            <div className="navbar_nav">
                <div className="nav_option">
                    <span>Home</span>
                </div>


                <div className="nav_option">
                <span>Log In</span>
                </div>

                <div className="nav_option">
                <span> Sign Up</span>
                </div>

                <div className="cart">
                    <img src="https://icon-library.com/images/white-shopping-bag-icon/white-shopping-bag-icon-4.jpg" alt="shoppingBag" />
                    <span className="number_items">0</span>
                </div>

            </div>

        </div>

    )
}

export default Navbar;