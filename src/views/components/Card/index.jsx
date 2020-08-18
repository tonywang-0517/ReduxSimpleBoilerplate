import styled from "styled-components";
import { Card } from "antd";

const MyCard = styled(Card)`
  color: ${(props) => props.theme.baseColor};
`;

export default MyCard;
