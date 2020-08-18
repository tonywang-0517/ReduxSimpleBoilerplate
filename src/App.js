import React from "react";
import HomeLayout from "./views/layout";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { SETTINGS, SETTINGS_THEME } from "./constants/reducersNames.constant";
import { connect } from "react-redux";
import { GREEN } from "./constants/theme.constant";
import { greenTheme, blueTheme } from "./helpers/theme";
require("antd/dist/antd.min.css");

const GlobalStyle = createGlobalStyle`
#root{
height:100%
}
`;

const App = (props) => {
  const { theme } = props;

  return (
    <ThemeProvider theme={theme === GREEN ? greenTheme : blueTheme}>
      <GlobalStyle />
      <HomeLayout />
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  theme: state[SETTINGS][SETTINGS_THEME],
});

export default connect(mapStateToProps)(App);
