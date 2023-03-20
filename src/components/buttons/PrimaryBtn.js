import React from "react";
import styled from "styled-components";
import { Spinner } from "../../global/style";

const Btn = styled.button`
  color: #fff;
  background-color: ${(props) => props.theme.Global.txtGreen};
  padding: 0.8em 1.5em;
  border-radius: 50px;
  white-space: nowrap;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

const PrimaryBtn = ({ title, func, submit, loading }) => {
  return (
    <Btn type={`${submit ? submit : ""}`} onClick={func}>
      {/* {title} */}
      {loading ? <Spinner /> : title}
    </Btn>
  );
};

export default PrimaryBtn;
