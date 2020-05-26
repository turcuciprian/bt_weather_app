import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import allActions from "../actions/allActions";
import {
  InputFieldsWrapper,
  CountryWrapper,
  CityWrapper,
} from "../other/styledComponents";

const InputDataFields = () => {
  const dispatch = useDispatch();
  const inputDataFieldsObj = useSelector(
    (state) => state.inputDataFieldsReducer
  );
  const [city, setCity] = useState(inputDataFieldsObj.city);
  const [country, setCountry] = useState(inputDataFieldsObj.country);

  const optionList =
    inputDataFieldsObj && inputDataFieldsObj.countries
      ? inputDataFieldsObj.countries.map((countryData, index) => {
          return (
            <option value={countryData.alpha2} key={`optionKey${index}`}>
              {countryData.name}
            </option>
          );
        })
      : [];

  const requestWeatherData = () => {
    dispatch(allActions.activateSagaWeatherWatcher({ city, country }));
  };
  useEffect(() => {
    dispatch(allActions.getCitiesWatcher());
  }, [dispatch]);
  return (
    <>
      <InputFieldsWrapper>
        <p>Set a City and Country:</p>
        <CountryWrapper>
          Country:
          <br />
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
          City :<br />
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
        <button onClick={() => requestWeatherData()}>Update</button>
      </InputFieldsWrapper>
    </>
  );
};
export default InputDataFields;
