import React from "react";
import "./App.css";
import InputDataFields from "./components/InputDataFields";
import WeatherData from "./components/WeatherData";

import rootReducer from "./other/rootReducer";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootSaga from "./actions/sagas";
const initialState = {
  weatherDataReducer: "",
  inputDataFieldsReducer: { countries: [], city: "Cluj Napoca", country: "RO" },
};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
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
