import React from "react";
import styled from "styled-components";
import Profileicon from "./Profileicon";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin: ${(props) => props.margin || "1.5rem 0"};
`;
const ProfileItem = ({ title, children, icon, margin, component }) => {
  return (
    <Container margin={margin}>
      <h4>{title}</h4>
      <Profileicon component={component}>{children}</Profileicon>
      {icon}
    </Container>
  );
};

export default ProfileItem;
