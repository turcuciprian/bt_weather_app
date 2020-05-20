import React, { useState, useContext } from "react";
import { myContext } from "../other/reducer";
import {
  InputFieldsWrapper,
  CountryWrapper,
  CityWrapper,
} from "../other/styledComponents";

const InputDataFields = (props) => {
  const tempContext = useContext(myContext);
  const [city, setCity] = useState("Cluj Napoca");
  const [country, setCountry] = useState("RO");

  const optionList =
    tempContext && tempContext.state && tempContext.state.countryCodes
      ? tempContext.state.countryCodes.all.map((countryData, index) => {
          const selectRo = countryData.alpha2 === "RO" ? "SELECTED" : "";
          return (
            <option
              value={countryData.alpha2}
              key={`optionKey${index}`}
              selected={selectRo}
            >
              {countryData.name}
            </option>
          );
        })
      : [];
  const requestWeatherData = () => {
    tempContext.makeRequest(
      `http://api.openweathermap.org/data/2.5/weather?q=${country},${city}&APPID=ad232c5285db15075e3e2ece306f1649`
    );
  };
  return (
    <>
      <InputFieldsWrapper>
        <p>Seteaza un oras si o Tara:</p>
        <CountryWrapper>
          Tara:
          <select
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            {optionList}
          </select>
        </CountryWrapper>
        <CityWrapper>
          Orasul :{" "}
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                requestWeatherData()
              }
            }}
          />
        </CityWrapper>
        <button onClick={() => requestWeatherData}>Actualizeaza Vremea</button>
      </InputFieldsWrapper>
    </>
  );
};
export default InputDataFields;
