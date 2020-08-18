import {
  ENTITIES_CHARACTER_ADD_CHARACTER,
  ENTITIES_CHARACTER_UPDATE_CHARACTER,
} from "../../../constants/actionTypes.constant";

export const addCharacter = (payload) => ({
  type: ENTITIES_CHARACTER_ADD_CHARACTER,
  payload,
});

export const updateCharacter = (payload) => ({
  type: ENTITIES_CHARACTER_UPDATE_CHARACTER,
  payload,
});
