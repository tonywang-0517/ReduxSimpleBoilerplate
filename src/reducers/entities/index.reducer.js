import { combineReducers } from "redux";
import characterReducer from "./character/index.reducer";
import { ENTITIES_CHARACTERS } from "../../constants/reducersNames.constant";

const entitiesReducer = combineReducers({
  [ENTITIES_CHARACTERS]: characterReducer,
});

export default entitiesReducer;
