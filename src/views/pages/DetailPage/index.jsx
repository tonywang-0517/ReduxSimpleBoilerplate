import React from "react";
import styled from "styled-components";
import CharacterCardModule from "./modules/CharacterCardModule";

const DetailPageContainer = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 20px;
`;

const DetailPage = () => {
  return (
    <DetailPageContainer>
      <CharacterCardModule />
    </DetailPageContainer>
  );
};

export default DetailPage;
