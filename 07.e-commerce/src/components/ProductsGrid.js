import React from "react";
import '../Styles/grid.css';
import { useUpdateCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const ProductsGrids = (props) => {

    const [, , add] = useUpdateCart();




    return (
        <div className="gridColumns">
            {props.items.map((product) => {
                var name = product.product_name.toLowerCase();
                if (name.startsWith(props.searchTerm)) {
                    return (
                        <div className="articles">

                            <Link to={`/${product._id}`}>
                            <h2 className="title">{product.product_name}</h2>
                            <img src={product.image} alt="productos" />
                            </Link>

                            <p className="product_price">${product.price}</p>

                            <button className="prod_btn"
                                onClick={() => add(product.product_name, product.price)}>
                                Add to Cart
                            </button>

                        </div>
                    )
                } else {
                    return <>
                    </>
                }
            }
            )}

        </div>
    )


}

export default ProductsGrids;


