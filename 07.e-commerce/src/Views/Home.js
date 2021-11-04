import React, { useState, useEffect } from "react";
import * as constants from '../constants'
import ProductsGrids from "../components/ProductsGrid";
import Searchbar from "../components/Searchbar";
import '../Styles/home.css';


const Home = () => {

    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");



    useEffect(() => {
        fetch(constants.apiUrl)
            .then((response) => response.json())
            .then((e) => setItems(e))
    }, []);


    return (
        <>


            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            

            <ProductsGrids items={items} searchTerm={searchTerm} />

        </>
    )
}

export default Home;