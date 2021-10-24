import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/nav.css';

const Navbar = () => {

    return(
        <>
        <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">  Amazontle</div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
            {/* <!-- USING CHECKBOX HACK --> */}
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger">&#9776;</label>
            {/* <!-- NAVIGATION MENUS --> */}
            <div className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Hello, Log In</Link></li>
                <li className="signup"><Link to="/">Sign Up</Link></li>
                <li><Link to="/contact">Orders and Returns</Link></li>
            </div>
        </ul>
    </nav>
    </>        

    )
}

export default Navbar;