import { combineReducers } from "redux";
import displayReducer from "./displayReducer";

export default combineReducers({
  display: displayReducer
});
