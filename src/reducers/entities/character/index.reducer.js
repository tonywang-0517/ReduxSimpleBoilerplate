import {
  ENTITIES_CHARACTER_ADD_CHARACTER,
  ENTITIES_CHARACTER_UPDATE_CHARACTER,
} from "../../../constants/actionTypes.constant";

const initialState = {};

export default function characterReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ENTITIES_CHARACTER_ADD_CHARACTER:
      return {
        ...state,
        ...payload,
      };
    case ENTITIES_CHARACTER_UPDATE_CHARACTER:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
