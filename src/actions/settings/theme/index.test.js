import * as Actions from "./index.action";
import { SETTINGS_THEME_CHANGE_THEME } from "../../../constants/actionTypes.constant";
import { BLUE } from "../../../constants/theme.constant";

describe("actions/settings/theme", () => {
  describe("Action: changeTheme", () => {
    it("Should be return an action.", () => {
      const action = Actions.changeTheme(BLUE);
      expect(action).toHaveProperty("type", SETTINGS_THEME_CHANGE_THEME);
    });
  });
});
