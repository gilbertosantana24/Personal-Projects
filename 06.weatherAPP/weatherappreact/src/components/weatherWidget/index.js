import React from "react";
import './weatherWidget.css';

import FeatherIcon from 'feather-icons-react';

function weatherWidget({weatherData}) {

//obtener fecha actual
let newDate = new Date (); 
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let dayNumber = newDate.getDate();
const days =  ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

    return (
        <>
            <div className="container">
                <div className="weather-side">
                    <div className="weather-gradient"></div>
                    <div className="date-container">
                        <h2 className="date-dayname">{days[dayNumber]}</h2><span className="date-day">{month}{year}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{weatherData.name}, {weatherData.sys.contry}</span>
                    </div>
                    <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                        <h1 className="weather-temp">{weatherData.main.temp}°C</h1>
                        <h3 className="weather-desc">{weatherData.weather[0].description}</h3>
                    </div>
                </div>
                <div className="info-side">
                    <div className="today-info-container">
                        <div className="today-info">
                            <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">{weatherData.main.pressure} %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{weatherData.main.humidity} %</span>
                                <div className="clear"></div>
                            </div>
                            <div className="wind"> <span className="title">WIND</span><span className="value">{weatherData.wind.speed} km/h</span>
                                <div className="clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="location-container">
                        <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default weatherWidget;