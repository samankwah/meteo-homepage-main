import React from "react";

export const WeatherCard = ({ city, temperature, condition }) => (
  <div className="bg-white rounded-lg shadow-md p-4 m-2">
    <h3 className="text-xl font-semibold">{city}</h3>
    <p className="text-3xl font-bold">{temperature}°C</p>
    <p>{condition}</p>
  </div>
);

// export default WeatherCard;
