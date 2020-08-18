import React from "react";
import Card from "../../../../components/Card";
import { Spin } from "antd";
import styled from "styled-components";
import { push } from "connected-react-router";
import { fetchAllCharacters } from "../../../../../actions/urt/indext.action";
import { fetchAllCharactersLoadingStatusSelector } from "../../../../../selectors/urt/indext.selector";
import { fetchCharactersWithLocalFilterSelector } from "../../../../../selectors/localCharactersFilter/indext.selector";
import { LOADING } from "../../../../../constants/loadStatus.constant";
import { connect } from "react-redux";

const CharactersContainer = styled.section`
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .ant-card {
    margin: 10px;
    cursor: pointer;
  }
  .spinContainer {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    text-align: center;
    .ant-spin {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
`;

const CharactersModlue = (props) => {
  const { fetchAllCharacters, data, loadingStatus } = props;

  React.useEffect(() => {
    fetchAllCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CharactersContainer>
      {data.map((item, index) => (
        <Card
          bordered={true}
          key={item._id}
          hoverable
          onClick={() => {
            props.go(`/character/${item._id}`);
          }}
        >
          {item.name}
        </Card>
      ))}
      {loadingStatus === LOADING && (
        <div className={"spinContainer"}>
          <Spin size="large" />
        </div>
      )}
    </CharactersContainer>
  );
};

const mapStateToProps = (state) => ({
  data: fetchCharactersWithLocalFilterSelector(state),
  loadingStatus: fetchAllCharactersLoadingStatusSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCharacters: () => dispatch(fetchAllCharacters()),
    go: (url) => dispatch(push(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersModlue);
