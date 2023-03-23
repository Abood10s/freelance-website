import React from "react";
import styled from "styled-components";
const Option = styled.p`
  text-align: center;
  position: relative;
  color: #babdba;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0%;
    width: ${(props) => props.line || "45%"};
    height: 1px;
    background-color: #babdba;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0%;
    width: ${(props) => props.line || "45%"};
    height: 1px;
    background-color: #babdba;
  }
`;
const Divider = ({ text = "or", line, comp }) => {
  return (
    <Option line={line}>
      {text} {comp}
    </Option>
  );
};

export default Divider;
