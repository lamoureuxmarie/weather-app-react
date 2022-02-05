import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherHeader(props) {
  return (
    <div className="Current">
      <ul>
        <li className="City">
          {props.city}
        </li>
        <li className="Date">
          <FormattedDate date={props.date} />
        </li>
        <li className="WeatherDescription">{props.description}</li>
      </ul>
    </div>
  );
}