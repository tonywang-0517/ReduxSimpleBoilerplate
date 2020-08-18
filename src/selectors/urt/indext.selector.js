import { createSelector } from "reselect";
import { getCharactersSelector } from "../entities/character/index.selector";
import {
  URT,
  URT_API_FETCH_ALL_CHARACTERS,
  URT_API_FETCH_CHARACTERS_BY_ID,
} from "../../constants/reducersNames.constant";

const fetchAllCharactersAPISelector = (state) =>
  state[URT][URT_API_FETCH_ALL_CHARACTERS] || {};

const fetchCharactersByIdAPISelector = (state) =>
  state[URT][URT_API_FETCH_CHARACTERS_BY_ID] || {};

export const fetchAllCharactersSelector = createSelector(
  [fetchAllCharactersAPISelector, getCharactersSelector],
  (APIData, characters) => {
    return APIData.data
      ? APIData.data.map((id) => ({
          _id: characters[id]._id,
          name: characters[id].name,
        }))
      : [];
  }
);

export const fetchAllCharactersLoadingStatusSelector = createSelector(
  fetchAllCharactersAPISelector,
  (data) => data.fetchStatus || ""
);

export const fetchCharacterByIdSelector = createSelector(
  fetchCharactersByIdAPISelector,
  (APIData) => APIData.data
);

export const fetchCharacterByIdLoadingStatusSelector = createSelector(
  fetchCharactersByIdAPISelector,
  (data) => data.fetchStatus || ""
);
