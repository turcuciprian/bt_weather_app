import React, { useContext } from "react";
import { myContext } from "../other/reducer";
import {WeatherDescription} from "../other/styledComponents";

const WeatherData = () => {
  const tempContext = useContext(myContext);
  const { weatherData } = tempContext.state;
  console.log(weatherData ? weatherData : "");

  const temperature = weatherData
    ? Math.floor(weatherData.main.temp - 273.15)
    : "";
  const temp_min = weatherData
    ? Math.floor(weatherData.main.temp_min - 273.15)
    : "";
  const temp_max = weatherData
    ? Math.floor(weatherData.main.temp_max - 273.15)
    : "";
  const pressure = weatherData ? weatherData.main.pressure : "";
  const humidity = weatherData ? weatherData.main.humidity : "";

  const weatherDescription = weatherData
    ? weatherData.weather[0].description
    : "";

  if (temperature)
    return (
      <>
        <WeatherDescription>{weatherDescription}</WeatherDescription>
        <p>
          <b>Temperatura:</b> {temperature}
        </p>
        <p>
          <b>Minimul Zilei:</b> {temp_min}
        </p>
        <p>
          <b>Maximul Zilei:</b> {temp_max}
        </p>
        <p>
          <b>Presiune:</b> {pressure}
        </p>
        <p>
          <b>Umiditate:</b> {humidity}
        </p>
        
       
      </>
    );
  else return <></>;
};
export default WeatherData;
