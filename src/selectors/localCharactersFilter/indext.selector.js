import { createSelector } from "reselect";
import {
  URT,
  URT_API_FETCH_ALL_CHARACTERS,
  LOCAL_CHARACTERS_FILTER,
} from "../../constants/reducersNames.constant";
import { getCharactersSelector } from "../entities/character/index.selector";
const fetchLocalFilterSelector = (state) => state[LOCAL_CHARACTERS_FILTER];
const fetchAllCharactersAPISelector = (state) =>
  state[URT][URT_API_FETCH_ALL_CHARACTERS] || {};

export const fetchCharactersWithLocalFilterSelector = createSelector(
  [
    fetchAllCharactersAPISelector,
    getCharactersSelector,
    fetchLocalFilterSelector,
  ],
  (APIData, characters, filter) => {
    let items = APIData.data ? APIData.data.map((id) => characters[id]) : [];
    if (!!filter.searchValue) {
      items = items.filter((item) => {
        return item[filter.searchKey].indexOf(filter.searchValue) !== -1;
      });
    }
    return items.map((item) => ({
      _id: item._id,
      name: item.name,
    }));
  }
);
