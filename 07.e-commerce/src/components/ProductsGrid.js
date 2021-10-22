import React from "react";
import '../Styles/grid.css';

const ProductsGrids = (props) => {

return <div className="gridColumns">

{
    props.items.map(product => {
        return <div className="articles"> 
        <h2 className="title">{product.product_name}</h2>
        <img src={product.image} alt="productos" />
        
        
        </div>
    })
}


</div>


}

export default ProductsGrids;