import { useState, useEffect } from 'react';
import './App.css';
import weatherWidget from './components/weatherWidget';

function App() {
// #2 Manejo de states de la app
const [apiData, setApiData] = useState({}) //Guardar la respuesta de la API
const [inputState, setInputState] = useState('Tijuana') //Guardar el Input
const [state, setState] = useState('Tijuana') //copia de getState para el onClick



// #1 Añado info de manejo de la API 
const apiKey = `180e36a6e7f703138bbdcf21031953e6` //process.env.REACT_APP_WEATHER_API_KEY;
console.log(apiKey);
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&lang=es&units=metric&appid=${apiKey}`;
console.log(apiUrl);

//#3 Side effect: useEffect 
//Manda a llamar la API y actualiza el estado solo cuando apiURL cambie
useEffect(()=>{
fetch(apiUrl)
.then((res)=> res.json())
.then((data) => setApiData(data))
},[apiUrl]);

//Obtengo la data de cada teclazo del input y actualizo el estado
const inputHandler = (event) => {
  setInputState(event.target.value);
}

//Copio lo que tengo en inputstate y lo coloco en setstate
//esto deberia ejecutar nuevamente mi useeffect
const submitHandler = () => {
  setState(inputState);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        </header>
        <div className="container">
          <label HTMLFor="location-name">
            Enter location:
          </label>
          <input 
          type="text"
          id="location-name"
          className=""
          onChange = {inputHandler}
          value = {inputState} 
          />
          <button onClick = {submitHandler}>
          Search
          </button>

          <section className="data">
            { apiData.main ? (
              <main>
                <img
                  src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                  alt="weather status icon"
                  className="weather-icon"
                />
                <p>{apiData.main.temp}&deg; C</p>
                <p>Location: <strong>{apiData.name}</strong></p>
                <p>Min <strong>{apiData.main.temp_min}&deg; C</strong></p>
                <p>Max <strong>{apiData.main.temp_max}&deg; C</strong></p>
                <p>Conditions: <strong>{apiData.weather[0].description}</strong></p>
              </main>
            ) : (
              <h2>Loading...</h2>
            ) }
          </section>
        </div>
        { apiData.main ? (<weatherWidget weatherData={apiData}/>) : (<h2>Loading...</h2>)}
    </div>
  );
}

export default App;
