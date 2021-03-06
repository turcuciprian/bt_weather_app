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
          return (
            <option value={countryData.alpha2} key={`optionKey${index}`}>
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
        <p>Set a City and Country:</p>
        <CountryWrapper>
          Country:<br/>
          <select
            defaultValue={"RO"}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            {optionList}
          </select>
        </CountryWrapper>
        <CityWrapper>
          City :<br/>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                requestWeatherData();
              }
            }}
          />
        </CityWrapper>
        <button onClick={() => requestWeatherData()}>
          Update
        </button>
      </InputFieldsWrapper>
    </>
  );
};
export default InputDataFields;
