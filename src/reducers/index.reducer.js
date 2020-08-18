import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import entitiesReducer from "./entities/index.reducer";
import settingsReducer from "./settings/index.reducer";
import localCharactersFilterReducer from "./localCharactersFilter/indext.reducer";
import urtReducer from "./urt/indext.reducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import {
  ENTITIES,
  SETTINGS,
  URT,
  ROUTER,
  LOADING_BAR,
  LOCAL_CHARACTERS_FILTER,
} from "../constants/reducersNames.constant";

const rootReducer = (history) =>
  combineReducers({
    [ROUTER]: connectRouter(history),
    [ENTITIES]: entitiesReducer,
    [SETTINGS]: settingsReducer,
    [URT]: urtReducer,
    [LOADING_BAR]: loadingBarReducer,
    [LOCAL_CHARACTERS_FILTER]: localCharactersFilterReducer,
  });

export default rootReducer;
