import React from "react";

export default function WeatherDetail(props) {
  const unitMapping = {
    celsius: `°C`,
    fahrenheit: `°F`,
  };


  return (
 
      <div className="weatherDetail">
        <ul>
          <li className="mt-4 mb-1">
            Feels like: {props.feels}{unitMapping[props.unit]}
          </li>
          <li className="mb-1">Humidity: {props.humidity}%</li>
          <li>Wind: {props.wind} km/h</li>
        </ul>
      </div>

  );
}