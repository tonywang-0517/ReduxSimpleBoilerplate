import {
  ENTITIES,
  ENTITIES_CHARACTERS,
} from "../../../constants/reducersNames.constant";

export const getCharactersSelector = (state) =>
  state[ENTITIES][ENTITIES_CHARACTERS];
