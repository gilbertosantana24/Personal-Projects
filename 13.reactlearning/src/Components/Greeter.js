import React from 'react';
import "./Greeter.css";

function Greeter({name, excitmentLevel = 1, age = 18}) {
    const greet = () => {
        alert(`Hello, ${name}, How are you?`)
    }

  return (
    <div className='greeter'>
        <h2>Hello, {name}{"!".repeat(excitmentLevel)}</h2>
        <p>You are {age} years old</p>
        <button onClick={greet}>Click Here</button>
    </div>
  )
}

export default Greeter