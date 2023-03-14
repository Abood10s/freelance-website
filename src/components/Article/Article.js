import React from "react";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const Article = ({ title, body }) => {
  return (
    <Content>
      <h3>{title}</h3>
      <p>{body}</p>
    </Content>
  );
};

export default Article;
