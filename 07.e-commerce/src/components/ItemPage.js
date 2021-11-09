import React from 'react'
import './itempage.css';
import { useUpdateCart } from '../Context/CartContext';
import { ToastContainer, toast } from "react-toastify";

const ItemPage = (props) => {

    const [, , add] = useUpdateCart();

    const handleClick = (productname, price) => {
        add(productname, price);
        notify(productname);
    };

    const notify = (item) =>
        toast(`${item} added to cart`, {
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
        });

    return (

        <div className="parent">

            <div className="item_img">
                <img src={props.item.image} alt="item" />
            </div>

            <div className="item_info">
                <h1 className="item_title">{props.item.product_name}</h1>
                <p>{props.item.brand}</p>
                <img className="stars" src="https://www.starpng.com/public/uploads/preview/5-star-rating-png-21573998074syeo5vib9a.png" alt="stars" />
                <p className="amazon_choice">Amazon's Choice </p>
                <p><strong>Category:</strong> {props.item.category} </p>
                <p>{props.item.description}</p>
                <p><strong>SKU:</strong> {props.item.sku}</p>
            </div>

            <div className="item_checkout">
                <p className="price"><strong>${props.item.price}</strong></p>
                <p>Shipping Calculated At Checkout</p>
                <p><strong>Delivery By:</strong> Dec. 11, 2021 <br /> <strong>If Order Within:</strong> 15hrs 14mins</p>
                <p className="instock"><strong>In Stock</strong></p>
                <p>Ships From Amazon</p>
                <p><strong>Sold By:</strong> {props.item.brand}</p>
                <p><strong>Return Policy:</strong> Returnable Until January 28, 2022 </p>
                <p><strong>SECURE TRANSACTION</strong> </p>

                <div className="gift">
                    <input type="checkbox"></input>
                    <span>This Order Contains A Gift</span>
                </div>

                <div className="protection">
                    <input type="checkbox"></input>
                    <span>Add Amazon Protection Plan</span>
                </div>

                <div className="addToCart">
                    <button className="item_pg_btn"
                        onClick={() => handleClick(props.item.product_name, props.item.price)}>
                        Add to Cart
                    </button>
                </div>
            </div>

            <ToastContainer />
        </div>



    )
}

export default ItemPage
