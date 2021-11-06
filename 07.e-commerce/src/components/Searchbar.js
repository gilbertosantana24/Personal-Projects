import React, { useState, useEffect } from "react";
import './searchbar.css';

const Searchbar = (props) => {


const handleChange = (e) => {
    var search = e.target.value;
    props.setSearchTerm(search.toLowerCase());
};

return (
    <form>
    <input className = "searchbar"
    onChange={(e) => handleChange(e)}
    className="searchbar"
    type="search"
    placeholder="Search Items"
    />
    </form>
)


}

export default Searchbar;