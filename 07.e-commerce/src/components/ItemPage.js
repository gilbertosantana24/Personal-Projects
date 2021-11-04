import React from 'react'
import './itempage.css';
import { useUpdateCart } from '../Context/CartContext';

const ItemPage = (props) => {

    const [, , add] = useUpdateCart();


    return (
        
        <div className="parent">

        <div className="item_img">
        <img src={props.item.image} alt="item"/>
        </div>

        <div className="item_info">
        <h1>{props.item.product_name}</h1>
        <p>{props.item.brand}</p>
        <p>{props.item.description}</p>
        <p>${props.item.price}</p>
        <button className="item_pg_btn" 
        onClick={() => add(props.item.product_name, props.item.price)}>
        Add to Cart
        </button>

        </div>

        </div>

        
    

    )
}

export default ItemPage
