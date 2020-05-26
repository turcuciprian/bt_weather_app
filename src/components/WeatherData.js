import React from "react";
import { WeatherDescription } from "../other/styledComponents";
import { useSelector } from "react-redux";

const WeatherData = () => {
  const weatherData = useSelector((state) => state.weatherDataReducer).payload;

  const temperature =
    weatherData && weatherData.main && weatherData.main.temp
      ? Math.floor(weatherData.main.temp - 273.15)
      : "";
  const temp_min =
    weatherData && weatherData.main && weatherData.main.temp_min
      ? Math.floor(weatherData.main.temp_min - 273.15)
      : "";
  const temp_max =
    weatherData && weatherData.main && weatherData.main.temp_max
      ? Math.floor(weatherData.main.temp_max - 273.15)
      : "";
  const pressure =
    weatherData && weatherData.main && weatherData.main.pressure
      ? weatherData.main.pressure
      : "";
  const humidity =
    weatherData && weatherData.main && weatherData.main.humidity
      ? weatherData.main.humidity
      : "";
  const icon =
    weatherData &&
    weatherData.weather &&
    weatherData.weather[0] &&
    weatherData.weather[0].icon
      ? weatherData.weather[0].icon
      : "";

  const weatherDescription =
    weatherData &&
    weatherData.weather &&
    weatherData.weather[0] &&
    weatherData.weather[0].description
      ? weatherData.weather[0].description
      : "";

  if (temperature) {
    if (weatherData.cod === 404) return <>City Not Found</>;
    return (
      <>
        <WeatherDescription>
          {weatherDescription}
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />
        </WeatherDescription>
        <div>
          <b>Temperature:</b> {temperature}
        </div>
        <div>
          <b>Minimum Temperature:</b> {temp_min}
        </div>
        <div>
          <b>Max Temperature:</b> {temp_max}
        </div>
        <div>
          <b>Pressure:</b> {pressure} hpa
        </div>
        <div>
          <b>Humidity:</b> {humidity} %
        </div>
      </>
    );
  } else {
    if (weatherData === "Error") {
      return <WeatherDescription>City Not Found</WeatherDescription>;
    }
    return <></>;
  }
};
export default WeatherData;
