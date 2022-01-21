import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";


export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const apiKey = "666e992c8bf5317be35ba26eb820d6ec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000)
        })
    }

    if (weatherData.ready) {
    return <div className="Weather">

        <h1 className="city">{weatherData.city}</h1> 
        <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.city}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
          <div className="clearfix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"className="float-left" />
            <div className="float-left">
            <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
            </div>
            </div>
          </div>


        <div className="col-6">
        <ul>
            <li>Humidité : {weatherData.humidity}%</li>
            <li>Vent : {weatherData.wind} km/h</li>
        </ul>
        </div>
        </div>

          <form>
          <div className="row">
          <div className="col-6">
           <input
                Type="search"
                placeHolder="Change city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-6">
            <button className="btn btn-primary" Type="submit">Go</button>
            <button className="btn btn-primary" Type="submit">Current location</button>
            </div>
            </div>
            </form>

            </div>
}
}