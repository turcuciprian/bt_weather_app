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
  const [country, setCountry] = useState("Ro");

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

  return (
    <>
      <InputFieldsWrapper>
        <p>Seteaza un oras si o Tara:</p>
        <CountryWrapper>
          Tara:{" "}
          <select
            onSelect={(value) => {
              setCountry(value);
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
          />
        </CityWrapper>
        <button
          onClick={() => {
            props.getInputData(city, country);
            tempContext.makeRequest();
          }}
        >
          Actualizeaza Vremea
        </button>
      </InputFieldsWrapper>
    </>
  );
};
export default InputDataFields;
