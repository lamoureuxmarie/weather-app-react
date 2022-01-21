import React from "react";
import "./Weather.css";


export default function Weather() {
    return <div className="Weather">

        <h1>Berlin</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"/>
            6°C
          </div>


        <div className="col-6">
        <ul>
            <li>Précipitations : 1%</li>
            <li>Humidité : 62%</li>
            <li>Vent : 23 km/h</li>
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
            <button className="btn btn-primary" type="submit">Go</button>
            <button className="btn btn-primary">Current location</button>
            </div>
            </div>
            </form>

            </div>
}