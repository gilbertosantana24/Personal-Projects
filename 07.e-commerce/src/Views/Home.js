import React, { useState, useEffect } from "react";
import * as Constants from '../constants';
import ProductsGrids from "../components/ProductsGrid";
import Searchbar from "../components/Searchbar";
import '../Styles/home.css';


const Home = () => {

    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");



    useEffect(() => {
        fetch(Constants.apiUrl)
            .then((response) => response.json())
            .then((e) => setItems(e))
    }, []);


    return (
        <>
            <h1>Home</h1>

            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            

            <ProductsGrids items={items} searchTerm={searchTerm} />

        </>
    )
}

export default Home;