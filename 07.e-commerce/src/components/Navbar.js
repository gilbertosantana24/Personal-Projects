import React from "react";
import * as constants from '../constants';
import { Link } from 'react-router-dom';
import GlobalSearch from './GlobalSearch';
import '../Styles/nav.css';
import { useUserContext } from "../Context/userContext";


const Navbar = (props) => {

    var items = props.items;

    var usuario = useUserContext();

    return (
        <div className="navbar">
            <Link to="/">
                <img className="amazon_pic" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amznLogo" />
            </Link>

            <div className="globalSearch">

            
            <GlobalSearch items={items} />



            </div>
            
           

            <div className="navbar_nav">

            <div className="user">
            {usuario && <p>Hello, {usuario.user.first_name}</p>}
            </div>


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
                        <img className="shopping_pic" src="https://icon-library.com/images/white-shopping-bag-icon/white-shopping-bag-icon-4.jpg" alt="shoppingCart" />

                    </Link>
                </div>

            </div>

        </div>

    )
}

export default Navbar;