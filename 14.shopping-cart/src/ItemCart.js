import React from 'react'

function ItemCart( { id, name, price, qty, updateQty }) {

const addOne = () => {
  updateQty(id, qty + 1);
}

const minusOne = () => {
  updateQty(id, qty - 1);
}



  return (
    <div className='itemcart'>
        <div>{name}</div>
        <div>${price}</div>

        <div>
          <button onClick = {addOne}> + </button>
              {qty}
          <button onClick = {minusOne} disabled={qty <=1}>-</button>
        </div>

        <div>Total: ${qty * price}</div>
    </div>
  )
}

export default ItemCart