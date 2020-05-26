const weatherDataReducer = (state = "", action) => {
  switch (action.type) {
    case "WEATHER_DATA":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
const inputDataFieldsReducer = (state = "", action) => {
  switch (action.type) {
    case "INPUT_DATA":
      return { ...state, countries:action.all };
    default:
      return state;
  }
};

export { weatherDataReducer, inputDataFieldsReducer };
