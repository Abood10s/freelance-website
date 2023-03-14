import React from "react";
import { Body, Green, Header, SideContainer } from "./style";

const SideSection = ({ title, desc, body }) => {
  return (
    <SideContainer>
      <Header>
        <h3>{title}</h3>
        <Green>{desc}</Green>
      </Header>
      <Body>{body}</Body>
    </SideContainer>
  );
};

export default SideSection;
