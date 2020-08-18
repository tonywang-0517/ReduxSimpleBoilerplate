import { render } from "@testing-library/react";
//import user from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import configureStore, { history } from "./store/configureStore";
import { ConnectedRouter } from "connected-react-router";
React.useLayoutEffect = React.useEffect;
const store = configureStore({}, history);
describe("AppTest", () => {
  it("is App working", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
    const searchBar = getByTestId("search-bar");
    expect(searchBar).not.toBeNull();
  });
});

/*To whom it may concern:
        sorry, I haven't got chance to fulfill the unit/integration tests and API definition documents, but I know they are essential for the development.
 I'll try to complete the rest work once I get chance.*/
