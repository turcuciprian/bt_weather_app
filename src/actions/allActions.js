//SAGA TRIGGERS
const activateSagaWeatherWatcher = (location) => {
  return {
    type: "SAGA_WEATHER_WATCHER",
    payload: location,
  };
};
const getCitiesWatcher = (location) => {
  return {
    type: "SAGA_INPUT_DATA_WATCHER",
    payload: location,
  };
};

// STORE ACTIONS
const setWeatherData = (data) => {
  return {
    type: "WEATHER_DATA",
    payload: data.payload,
  };
};
export default { activateSagaWeatherWatcher, setWeatherData, getCitiesWatcher };
