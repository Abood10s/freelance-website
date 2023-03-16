import React from "react";
import styled from "styled-components";
import Profileicon from "./Profileicon";
import EditSvg from "../../SVGs/EditSvg";

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Available = styled.div`
  border: 1px solid #e4ebe4;
  border-radius: 50px;
  padding: 0.2rem 0.5rem;
  color: #868585;
`;
const OnlineStatus = ({ editable = "true" }) => {
  return (
    <Content>
      <Available>Available now</Available>
      <span>off</span>
      {editable === "true" ? (
        <Profileicon>
          <EditSvg />
        </Profileicon>
      ) : null}
    </Content>
  );
};

export default OnlineStatus;
