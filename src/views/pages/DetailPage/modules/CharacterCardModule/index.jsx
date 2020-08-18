import React from "react";
import { Breadcrumb } from "antd";
import CharacterPanel from "../../../../components/CharacterPanel";
import styled from "styled-components";
import { fetchCharacterById } from "../../../../../actions/urt/indext.action";
import {
  fetchCharacterByIdSelector,
  fetchCharacterByIdLoadingStatusSelector,
} from "../../../../../selectors/urt/indext.selector";
import { LOADING } from "../../../../../constants/loadStatus.constant";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
const CharacterCardContainer = styled.section`
  .ant-card {
    //width: 100%;
    max-width: 1024px;
    margin-top: 10px;
  }
  .ant-breadcrumb-link > a {
    color: ${(props) => props.theme.baseColor} !important;

    :hover {
      text-decoration: underline;
    }
  }
`;

const CharacterCardModlue = (props) => {
  const params = useParams();
  const { loadingStatus, character, fetchCharacterById } = props;
  React.useEffect(() => {
    fetchCharacterById(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CharacterCardContainer>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link replace to="/">
            Back
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <CharacterPanel data={character} loading={loadingStatus === LOADING} />
    </CharacterCardContainer>
  );
};

const mapStateToProps = (state) => ({
  character: fetchCharacterByIdSelector(state),
  loadingStatus: fetchCharacterByIdLoadingStatusSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCharacterById: (id) => dispatch(fetchCharacterById(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterCardModlue);
