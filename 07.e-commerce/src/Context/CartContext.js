import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();
const updateCartContext = createContext();

export function useCart() {
    return useContext(cartContext);
}

export function useUpdateCart() {
    return useContext(updateCartContext);
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const updateCartPlus = (name) => {
        setCart(cart.map(item => {
            if (item.name === name) {
                item.qty++;
            }
            return item;
        }));

    }
    const updateCartMinus = (name) => {

        setCart(cart.map(item => {
            if (item.name === name) {
                if (item.qty > 1) {
                    item.qty--;
                }
            }
            return item;
        }));

    }

    const addItem = (name, price) => {
        setCart([...cart, { name, price, qty: 1 }]);

    }

    const resetCart = () => {
        setCart([]);
    }

    const removeItem = (name) => {
        setCart(cart.filter(item => item.name !== name));
    }

    return (
        <cartContext.Provider value={cart}>
            <updateCartContext.Provider value={[updateCartPlus, updateCartMinus, addItem, resetCart, removeItem]}>
                {children}
            </updateCartContext.Provider>
        </cartContext.Provider>
    );
};
