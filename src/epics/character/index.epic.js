import { ofType } from "redux-observable";
import { mergeMap, switchMap, map, catchError, delay } from "rxjs/operators";
import ajax from "../../utils/ajax";
import { of } from "rxjs";
import {
  fetchAllCharacters,
  fetchAllCharactersSuccess,
  fetchAllCharactersError,
  fetchCharacterById,
  fetchCharacterByIdSuccess,
  fetchCharacterByIdError,
} from "../../actions/urt/indext.action";
import { addCharacter } from "../../actions/entities/character/index.action";
import { combineEpics } from "redux-observable";
import { API_DOMAIN } from "../../constants/common.constant";

function fetchAllCharactersEpic(action$) {
  return action$.pipe(
    ofType(fetchAllCharacters().type),
    delay(1000),
    switchMap(() => {
      return ajax({
        url: `${API_DOMAIN}/v1/character`,
        method: "GET",
      }).pipe(
        map(({response}) => {
          if(!response.docs)
            throw response;
          return response.docs;
        }),
        mergeMap((characters) => [
          addCharacter(
            Object.fromEntries(characters.map((item) => [item._id, item]))
          ),
          fetchAllCharactersSuccess(characters.map((c) => c._id)),
        ]),
        catchError((error) => {
          return of(fetchAllCharactersError(error.message));
        })
      );
    })
  );
}
function fetchCharactersByIdEpic(action$) {
  return action$.pipe(
    ofType(fetchCharacterById().type),
    delay(1000),
    switchMap((action) => {
      return ajax({
        url: `${API_DOMAIN}/v1/character/${action.payload}`,
        method: "GET",
      }).pipe(
        map((data) => data.response),
        mergeMap((character) => [
          addCharacter([{ [character._id]: character }]),
          fetchCharacterByIdSuccess(character),
        ]),
        catchError((error) => {
          return of(fetchCharacterByIdError(error.message));
        })
      );
    })
  );
}

const characterEpic = combineEpics(
  fetchAllCharactersEpic,
  fetchCharactersByIdEpic
);
export default characterEpic;
