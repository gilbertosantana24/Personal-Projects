import { useState } from 'react';
import './App.css';

 var min = 1;
  var max = 10;
  var random1 = min + Math.floor(Math.random() * (max - min));
  var random2 = min + Math.floor(Math.random() * (max - min));

  while (random2 == random1) {
    random2 = min + Math.floor(Math.random() * (max - min));
  }

function App() {

  const [contador, setContador] = useState(0);
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);
 



  const add = () => {
    if (random1 > random2) {
      setMessage("you are correct")
    } else {
      setMessage("you lose")
    }

    setText(`the number was ${random1}`)
    setDisabled(true);
  }


  const minus = () => {
    if (random1 < random2) {
      setMessage("you are correct")
    } else {
      setMessage("you lose")
    }
    setText(`the number was ${random1}`)
    setDisabled(true);
  }

  return (
    <div className="App">
      <h1>HIGH-LOW</h1>
      <div className="contador">{random1}</div>
      <button disabled={disabled} className="up" onClick={add}>+</button>
      <button disabled={disabled} className="down" onClick={minus}>-</button>
      <div className="mensaje">{random2}</div>
      <div>{message}</div>
      <div>{text}</div>
    


    </div>
  );

}

export default App;
