import { useReducer, useCallback } from "react";
import { initialState, reducer } from "./reducer";
import { fetching, error, success } from "../actions/actionCreators";
import axios from "axios";

export const useGetWeatherData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const makeRequest = useCallback(
    async (url) => {
      dispatch(fetching());
      try {
        const response = await axios.get(url);
        dispatch(success(response));
      } catch (e) {
        dispatch(error(e));
      }
    },
    [dispatch]
  );
  return [state, makeRequest];
};
