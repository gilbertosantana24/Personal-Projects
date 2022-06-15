import React, { useState } from 'react'
import ItemCart from './ItemCart'
import "./Cart.css";

function Cart({ initialItems }) {

    const [items, setItems] = useState(initialItems);

    const updateQty = ( id, newQty ) => {
        const newItems = items.map(item => {
            if ( item.id === id ) {
                return { ...item, qty: newQty }
            }
            return item;
        });
        setItems(newItems);
    }

    const grandTotal = items.reduce((total, item) => (
        total + item.qty * item.price
    ), 0).toFixed(2);



    return (
        <div className='cart'>
            I am your shopping cart.
            <div className='cart-items'>
            {items.map(item => (
                <ItemCart key={item.id} updateQty={updateQty} {...item} />
            ))}
            </div>
            <h2>Grand Total: ${grandTotal} </h2>
        </div>
    )
}

export default Cart