import { weatherDataReducer,inputDataFieldsReducer } from "./allReducers";
import { combineReducers } from "redux";
const rootReducer = combineReducers({ weatherDataReducer,inputDataFieldsReducer });
export default rootReducer;
