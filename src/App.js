import React from "react";
import "./App.css";
import InputDataFields from "./components/InputDataFields";
import WeatherData from "./components/WeatherData";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputDataFields />
        <WeatherData />
      </header>
    </div>
  );
}

export default App;
