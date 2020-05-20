import React, { useState, useEffect } from "react";
import "./App.css";
import InputDataFields from "./components/InputDataFields";
import WeatherData from "./components/WeatherData";
import { myContext } from "./other/reducer";
import { useGetWeatherData } from "./other/GetWeatherData";

function App() {
  const { Provider } = myContext;
  const [state, makeRequest] = useGetWeatherData();

  return (
    <Provider value={{ state, makeRequest }}>
      <div className="App">
        <header className="App-header">
          <InputDataFields />
          <WeatherData />
        </header>
      </div>
    </Provider>
  );
}

export default App;
