import React from "react";
import '../Styles/grid.css';

const ProductsGrids = (props) => {

return <div className="gridColumns">

{
    props.items.map(product => {
        return <div className="articles"> 
        <h2 className="title">{product.product_name}</h2>
        <img src={product.image} alt="productos" />
        
        <p className="product_name">${product.price}</p>

        <button className="add_to_bag">Add to bag</button>
        
        </div>
    })
}


</div>


}

export default ProductsGrids;