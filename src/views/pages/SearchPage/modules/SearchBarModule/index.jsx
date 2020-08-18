import React from "react";
import AutoComplete from "../../../../components/AutoComplete";
import { Affix } from "antd";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchAllCharactersSelector } from "../../../../../selectors/urt/indext.selector";
import { updateLocalFilter } from "../../../../../actions/localCharactersFilter/index.action";

const SearchBarContainer = styled.section`
  width: 100%;
  text-align: center;
  padding: 30px;
  background-color: ${(props) => props.theme.baseBackgroundColor};
  opacity: 90%;
  .ant-select {
    width: 61.8%;
    //text-align: left;
  }
`;
const SearchBarModule = (props) => {
  const { characters, searchLocalCharacterByName } = props;

  React.useEffect(
    () => () => {
      searchLocalCharacterByName({ searchValue: "" });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <Affix offsetTop={81}>
      <SearchBarContainer>
        <AutoComplete
          size={"large"}
          data-testid="search-bar"
          options={characters.map((c) => ({ value: c.name }))}
          placeholder="Search Name Here"
          autoFocus
          defaultOpen={false}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
          onChange={(text) => {
            searchLocalCharacterByName({
              searchKey: "name",
              searchValue: text,
            });
          }}
        />
      </SearchBarContainer>
    </Affix>
  );
};

const mapStateToProps = (state) => ({
  characters: fetchAllCharactersSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    searchLocalCharacterByName: (payload) =>
      dispatch(updateLocalFilter(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarModule);
