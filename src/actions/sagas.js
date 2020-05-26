import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";
import { countries } from "country-data";
const getWeatherData = function* (location) {
  const { city, country } = location.payload;
  let remoteData;
  yield axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${country},${city}&APPID=ad232c5285db15075e3e2ece306f1649`
    )
    .then((resp) => {
      remoteData = resp.data;
    });
  yield put({ type: "WEATHER_DATA", payload: remoteData });
};
const getInputDataFieldsData = function* () {
  console.log('asd')
  yield put({
    type: "INPUT_DATA",
    ...countries,
    city: "Cluj NApoca",
    country: "RO",
  });
  //
};
function* activateWeatherWatcher() {
  yield takeLatest("SAGA_WEATHER_WATCHER", getWeatherData);
}
function* activateInputDataWatcher() {
  yield takeLatest("SAGA_INPUT_DATA_WATCHER", getInputDataFieldsData);
}

export default function* rootSaga() {
  yield all([activateWeatherWatcher(), activateInputDataWatcher()]);
}
