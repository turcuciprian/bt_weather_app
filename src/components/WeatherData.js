import React, { useContext } from "react";
import { myContext } from "../other/reducer";

const WeatherData = () => {
  const tempContext = useContext(myContext);
  const { weatherData } = tempContext.state;
  console.log(weatherData);

  return <>weather data goes here</>;
};
export default WeatherData;
