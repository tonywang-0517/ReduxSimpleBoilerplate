import React from "react";
import CharacterContainer from "../SearchPage/modules/CharactersModule";
import SearchBarContainer from "../SearchPage/modules/SearchBarModule";
import styled from "styled-components";

const SearchPageContainer = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;
`;

const SearchPage = () => {
  return (
    <SearchPageContainer>
      <SearchBarContainer />
      <CharacterContainer />
    </SearchPageContainer>
  );
};

export default SearchPage;
