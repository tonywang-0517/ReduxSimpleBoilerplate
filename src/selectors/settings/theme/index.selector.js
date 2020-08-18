import {
  SETTINGS,
  SETTINGS_THEME,
} from "../../../constants/reducersNames.constant";

export const getThemeSelector = (state) => state[SETTINGS][SETTINGS_THEME];
