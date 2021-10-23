import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/nav.css';

const Navbar = () => {

    return(
        <div className="nav">
            <nav>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/login"> Log In </Link></li>
                <li><Link to="signup">Sign up </Link></li>
            </ul>
            </nav>
        </div>

    )
}

export default Navbar;