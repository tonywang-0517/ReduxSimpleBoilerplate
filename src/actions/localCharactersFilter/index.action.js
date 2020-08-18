import { LOCAL_CHARACTERS_FILTER_UPDATE } from "../../constants/actionTypes.constant";

export const updateLocalFilter = (payload) => ({
  type: LOCAL_CHARACTERS_FILTER_UPDATE,
  payload,
});
