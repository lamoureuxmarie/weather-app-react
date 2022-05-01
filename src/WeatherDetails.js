import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faWater } from '@fortawesome/free-solid-svg-icons'

import "./WeatherDetails.css";

export default function WeatherDetail(props) {

  return (
 
      <div className="weatherDetail">
        <ul>
          <li className="mb-1"><FontAwesomeIcon icon={faWater} />: {props.humidity}%</li>
          <li><FontAwesomeIcon icon={faWind} />: {props.wind} km/h</li>
        </ul>
      </div>

  );
}