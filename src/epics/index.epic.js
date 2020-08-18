import { combineEpics } from "redux-observable";
import characterEpic from "./character/index.epic";
const rootEpic = combineEpics(characterEpic);
export default rootEpic;
