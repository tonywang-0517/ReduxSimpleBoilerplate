import {
  URT_FETCH_ALL_CHARACTERS_REQUEST,
  URT_FETCH_ALL_CHARACTERS_ERROR,
  URT_FETCH_ALL_CHARACTERS_SUCCESS,
  URT_FETCH_CHARACTER_BY_ID_REQUEST,
  URT_FETCH_CHARACTER_BY_ID_ERROR,
  URT_FETCH_CHARACTER_BY_ID_SUCCESS,
} from "../../constants/actionTypes.constant";

export const fetchAllCharacters = () => ({
  type: URT_FETCH_ALL_CHARACTERS_REQUEST,
});

export const fetchAllCharactersSuccess = (payload) => ({
  type: URT_FETCH_ALL_CHARACTERS_SUCCESS,
  payload,
});

export const fetchAllCharactersError = (payload) => ({
  type: URT_FETCH_ALL_CHARACTERS_ERROR,
  payload,
});

export const fetchCharacterById = (payload) => ({
  type: URT_FETCH_CHARACTER_BY_ID_REQUEST,
  payload,
});

export const fetchCharacterByIdSuccess = (payload) => ({
  type: URT_FETCH_CHARACTER_BY_ID_SUCCESS,
  payload,
});

export const fetchCharacterByIdError = (payload) => ({
  type: URT_FETCH_CHARACTER_BY_ID_ERROR,
  payload,
});
