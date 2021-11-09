import React, { useState, useEffect } from "react";
import * as constants from '../constants'
import ProductsGrids from "../components/ProductsGrid";
import Searchbar from "../components/Searchbar";
import '../Styles/home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {

    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const notify = (product) =>
    toast(`${product} added to cart`, {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
    });
    

    useEffect(() => {
        fetch(constants.apiUrl)
            .then((response) => response.json())
            .then((e) => setItems(e))
    }, []);


    return (
        <>


            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            

            <ProductsGrids 
            items={items} 
            alert={notify}
            searchTerm={searchTerm}
            
            />

            <ToastContainer />

        </>
    )
}

export default Home;