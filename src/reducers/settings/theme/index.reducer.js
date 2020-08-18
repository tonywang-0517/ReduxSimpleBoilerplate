import { SETTINGS_THEME_CHANGE_THEME } from "../../../constants/actionTypes.constant";

const initialState = process.env.REACT_APP_DEFALUT_LOCAL_THEME;
export default function themeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SETTINGS_THEME_CHANGE_THEME:
      return payload;
    default:
      return state;
  }
}
