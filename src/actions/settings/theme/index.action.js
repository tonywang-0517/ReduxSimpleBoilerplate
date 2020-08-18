import { SETTINGS_THEME_CHANGE_THEME } from "../../../constants/actionTypes.constant";

export const changeTheme = (payload) => ({
  type: SETTINGS_THEME_CHANGE_THEME,
  payload,
});
