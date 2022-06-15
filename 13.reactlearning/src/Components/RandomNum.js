import React, { useState } from 'react';
import "./RandomNum.css";

function RandomNum() {

    const [num, setNum] = useState();

    return (
        <div className='randomnum'>
            <h2>Random Number</h2>
            <button onClick={()=> setNum(Math.floor(Math.random() * 100))}>Get your number</button>
            <p>Your number is: {num} </p>
            <p>{num > 50 ? "Big" : "Small"} Number</p>

        </div>
    )
}

export default RandomNum