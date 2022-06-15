import React, { useState } from 'react'
import "./Count.css";

function Count() {

const [count, setCount] = useState(0);
const reset = () => setCount(0);




  return (
    <div className='counter'>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count+1)}> + </button>
        <button className='btn2' onClick={()=> setCount(count-1)}> - </button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Count