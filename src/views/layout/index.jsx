import React from "react";
import { Layout, Space } from "antd/lib/index";
import styled from "styled-components";
import { Route, Switch, Link } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import DetailPage from "../pages/DetailPage";
import Radio from "../components/Radio";
import LoadingBar from "react-redux-loading-bar";
import { connect } from "react-redux";
import { changeTheme } from "../../actions/settings/theme/index.action";
import {
  SETTINGS,
  SETTINGS_THEME,
} from "../../constants/reducersNames.constant";
import { BLUE, GREEN } from "../../constants/theme.constant";

const { Header, Content } = Layout;

const HomePageContainer = styled.section`
  height: 100%;
  .ant-layout-header {
    text-align: right;
  }
  .theme {
    margin: 0;
    line-height: 80px;
    font-size: 1rem;
    color: ${(props) => props.theme.baseColor};
  }
  .ant-layout {
    height: 100%;
  }
  .ant-layout-header {
    padding: 0 2rem;
    height: 80px;
  }
  .logo {
    cursor: pointer;
    padding: 5px 0;
    text-align: center;
    float: left;
    a {
      font-size: 2rem;
      opacity: 80%;
      color: ${(props) => props.theme.baseColor};
      :hover {
        color: ${(props) => props.theme.baseColor};
        opacity: 100%;
      }
    }
  }
`;

const GlobalLoadingBar = styled(LoadingBar)`
  background-color: ${(props) => props.theme.baseColor};
  height: 3px;
  z-index: 1;
  position: fixed;
  top: 0;
`;

const HomePage = (props) => {
  const { changeTheme, theme } = props;
  return (
    <HomePageContainer>
      <GlobalLoadingBar />

      <Layout>
        <Header>
          <div className={"logo"}>
            <Link to={"/"}>[ ] osynlig</Link>
          </div>
          <Space size={"middle"} align="baseline">
            <span className={"theme"} data-testid="theme-text">
              Theme:
            </span>
            <Radio.Group
              value={theme}
              onChange={({ target: { value } }) => {
                changeTheme(value);
              }}
            >
              <Radio data-testid="theme-radio-green" value={GREEN}>
                Green
              </Radio>
              <Radio data-testid="theme-radio-blue" value={BLUE}>
                Blue
              </Radio>
            </Radio.Group>
          </Space>
        </Header>
        <Content>
          <Switch>
            <Route exact path="/">
              <SearchPage />
            </Route>
            <Route path="/character/:id">
              <DetailPage />
            </Route>
            <Route path="*">
              <DetailPage />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </HomePageContainer>
  );
};

const mapStateToProps = (state) => ({
  theme: state[SETTINGS][SETTINGS_THEME],
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (payload) => dispatch(changeTheme(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
