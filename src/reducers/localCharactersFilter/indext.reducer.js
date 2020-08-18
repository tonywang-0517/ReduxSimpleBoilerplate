import { LOCAL_CHARACTERS_FILTER_UPDATE } from "../../constants/actionTypes.constant";

const initialState = {
  searchValue: "",
  searchKey: "name",
};

export default function localCharactersFilterReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case LOCAL_CHARACTERS_FILTER_UPDATE:
      return {
        ...state,
        ...payload,
      };
    default:
      return { ...state };
  }
}
