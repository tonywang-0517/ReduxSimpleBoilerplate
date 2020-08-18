import styled from "styled-components";
import { Radio } from "antd";

const MyRadio = styled(Radio)`
  color: ${(props) => props.theme.baseColor};
  .ant-radio-checked::after {
    border: 1px solid ${(props) => props.theme.baseColor};
  }
  .ant-radio-inner {
    border-color: ${(props) => props.theme.baseColor};
  }
  .ant-radio-inner::after {
    background-color: ${(props) => props.theme.baseColor};
  }
`;

export default MyRadio;
