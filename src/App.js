import React, { useState, useEffect } from "react";
import "./App.css";
import InputDataFields from "./components/InputDataFields";
import WeatherData from "./components/WeatherData";
import { myContext } from "./other/reducer";
import { useGetWeatherData } from "./other/GetWeatherData";

function App() {
  const { Provider } = myContext;
  const [city, setCity] = useState("Cluj Napoca");
  const [countryCode, setCountryCode] = useState("Ro");
  const requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&APPID=ad232c5285db15075e3e2ece306f1649`;
  const [state, makeRequest] = useGetWeatherData(requestUrl);
  
  const getInputData = (country, city) => {
    setCity(city);
    setCountryCode(country);
  };
  return (
    <Provider value={{ state, makeRequest }}>
      <div className="App">
        <header className="App-header">
          <InputDataFields getInputData={getInputData} />
          <WeatherData />
        </header>
      </div>
    </Provider>
  );
}

export default App;
