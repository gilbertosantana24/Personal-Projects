import {useState, useEffect} from 'react';
import './App.css';

function App() {
//2 manejo de estados
const [apiData, setApiData] = useState({})
const [inputState, setInputState] = useState('') 
const [state, setState] = useState('')


// 1 Manejo de la api
const apiUrl = `https://swapi.dev/api/starships/`

//#3 Side effect: useEffect 
//Manda a llamar la API y actualiza el estado solo cuando apiURL cambie
useEffect(()=>{
  fetch(apiUrl)
  .then((res)=> res.json())
  .then((data) => setApiData(data))
  },[apiUrl]);


  return (
    <div className="App">
  
    </div>
  );
}

export default App;
