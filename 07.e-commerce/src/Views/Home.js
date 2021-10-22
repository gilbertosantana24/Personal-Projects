import React, { useState, useEffect } from "react";
import * as Constants from '../constants';
import ProductsGrids from "../components/ProductsGrid";


const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(Constants.apiUrl)
        .then((response) => response.json())
        .then((e) => setItems(e))
    }, [] );

    
    return (
        <>
        <h1>Home</h1>

            <ProductsGrids items = {items} />

        </>
    )
}

export default Home;