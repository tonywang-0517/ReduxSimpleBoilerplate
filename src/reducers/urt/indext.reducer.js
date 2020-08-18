import { LOADING, LOADED, ERROR } from "../../constants/loadStatus.constant";
import {
  URT_FETCH_ALL_CHARACTERS_REQUEST,
  URT_FETCH_ALL_CHARACTERS_SUCCESS,
  URT_FETCH_ALL_CHARACTERS_ERROR,
  URT_FETCH_CHARACTER_BY_ID_REQUEST,
  URT_FETCH_CHARACTER_BY_ID_SUCCESS,
  URT_FETCH_CHARACTER_BY_ID_ERROR,
} from "../../constants/actionTypes.constant";
import {
  URT_API_FETCH_ALL_CHARACTERS,
  URT_API_FETCH_CHARACTERS_BY_ID,
} from "../../constants/reducersNames.constant";

const initialState = {};

export default function urtReducer(state = initialState, { type, payload }) {
  switch (type) {
    case URT_FETCH_ALL_CHARACTERS_REQUEST:
      return {
        ...state,
        [URT_API_FETCH_ALL_CHARACTERS]: {
          fetchStatus: LOADING,
          errorMessage: "",
          data: [],
        },
      };
    case URT_FETCH_ALL_CHARACTERS_SUCCESS:
      return {
        ...state,
        [URT_API_FETCH_ALL_CHARACTERS]: {
          ...state[URT_API_FETCH_ALL_CHARACTERS],
          fetchStatus: LOADED,
          errorMessage: "",
          data: payload,
        },
      };
    case URT_FETCH_ALL_CHARACTERS_ERROR:
      alert(payload);
      return {
        ...state,
        [URT_API_FETCH_ALL_CHARACTERS]: {
          ...state[URT_API_FETCH_ALL_CHARACTERS],
          fetchStatus: ERROR,
          errorMessage: payload,
        },
      };
    case URT_FETCH_CHARACTER_BY_ID_REQUEST:
      return {
        ...state,
        [URT_API_FETCH_CHARACTERS_BY_ID]: {
          fetchStatus: LOADING,
          errorMessage: "",
          data: {},
        },
      };
    case URT_FETCH_CHARACTER_BY_ID_SUCCESS:
      return {
        ...state,
        [URT_API_FETCH_CHARACTERS_BY_ID]: {
          ...state[URT_API_FETCH_ALL_CHARACTERS],
          fetchStatus: LOADED,
          errorMessage: "",
          data: payload,
        },
      };
    case URT_FETCH_CHARACTER_BY_ID_ERROR:
      alert(payload);
      return {
        ...state,
        [URT_API_FETCH_CHARACTERS_BY_ID]: {
          ...state[URT_API_FETCH_ALL_CHARACTERS],
          fetchStatus: ERROR,
          errorMessage: payload,
        },
      };
    default:
      return state;
  }
}
