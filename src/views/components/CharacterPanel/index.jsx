import styled from "styled-components";
import { Card, Descriptions } from "antd";
import React from "react";
import { Skeleton } from "antd";

const CharacterPanelContainer = styled.section`
  .ant-descriptions-title {
    color: ${(props) => props.theme.baseColor};
  }
  .ant-descriptions-item-label {
    color: ${(props) => props.theme.baseColor};
  }
`;

const CharacterPanel = (props) => {
  const { data, loading } = props;
  return (
    <CharacterPanelContainer>
      <Card borderd={"true"}>
        {loading ? (
          <Skeleton active />
        ) : (
          data &&
          data.name && (
            <Descriptions title="Character Info" bordered={true}>
              <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
              <Descriptions.Item label="Spouse">
                {data.spouse}
              </Descriptions.Item>
              <Descriptions.Item label="Race">{data.race}</Descriptions.Item>
              <Descriptions.Item label="Gender">
                {data.gender}
              </Descriptions.Item>
              <Descriptions.Item label="Height">
                {data.height}
              </Descriptions.Item>
              <Descriptions.Item label="Realm">{data.realm}</Descriptions.Item>
              <Descriptions.Item label="Birthday">
                {data.birth}
              </Descriptions.Item>
              <Descriptions.Item label="Hair">{data.hair}</Descriptions.Item>
              <Descriptions.Item label="Wiki">{data.wikiUrl}</Descriptions.Item>
            </Descriptions>
          )
        )}
      </Card>
    </CharacterPanelContainer>
  );
};

export default CharacterPanel;
