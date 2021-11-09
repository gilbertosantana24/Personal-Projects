import React, { useState, useEffect } from "react";
import { useCart, useUpdateCart } from "../Context/CartContext";
import './cart.css';

const Cart = () => {

    const [plus, minus, add, reset, remove] = useUpdateCart();
    const [total, setTotal] = useState(0);


    const cart = useCart();

    useEffect(() => {
        setTotal(() => {
            let total = 0;
            cart.map(item => {
                total += item.price * item.qty;
            });
            return total;
        })
    }, [cart]);

    return (
        <div className="cart">

            <h1 className="cart_title">Your Cart</h1>

            {useCart().map((item) => {
                return (
                    <div className="order_desc">

                        <div className="item_title">
                        <p>{item.name}</p>
                        </div>


                        {/*<p>{item.qty}</p>*/}


                        <div className="number_items_btn">
                            <button className="updownbtn" onClick={() => plus(item.name)}>+</button>
                            <p><strong>{item.qty}</strong></p>
                            <button className="updownbtn" onClick={() => minus(item.name)}>-</button>
                        </div>


                        <p> <strong>Price:</strong> ${item.price}</p>


                        {/*<p> <strong> Total: </strong> ${item.qty * item.price}</p>*/}


                        <button className="remove_item" onClick={() => remove(item.name)}>Remove</button>

                    </div>
                );
            })};

            <h1 className="total_title">Your total is: ${total}</h1>

            <div className="button_final">
                <button className="proceed_checkout">Proceed To Checkout</button>
                <button className="clear_checkout" onClick={() => reset()}>Clear</button>
            </div>

        </div>
    );

};

export default Cart;
