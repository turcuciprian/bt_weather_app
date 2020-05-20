import { createContext } from "react";
import { FETCHING, SUCCESS, ERROR } from "../actions/actionTypes";
const countryCodes = require("countryCodes");

export const myContext = createContext();

export const initialState = {
  status: null,
  weatherData: null,
  countryCodes,
};

export const reducer = (state = initialState, { type, response } = {}) => {
  switch (type) {
    case FETCHING:
      return { ...initialState, status: FETCHING };
    case SUCCESS:
      return { ...state, status: SUCCESS, weatherData: response };
    case ERROR:
      return { ...state, status: ERROR, weatherData: response };
    default:
      return state;
  }
};
