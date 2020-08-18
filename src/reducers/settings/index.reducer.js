import { combineReducers } from "redux";
import themeReducer from "./theme/index.reducer";
import { SETTINGS_THEME } from "../../constants/reducersNames.constant";

const settingReducer = combineReducers({
  [SETTINGS_THEME]: themeReducer,
});

export default settingReducer;
