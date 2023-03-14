import React from "react";
import styled from "styled-components";

const ChipSkill = styled.div`
  background-color: #e4ebe4;
  color: #5e6d55;
  display: grid;
  place-items: center;
  padding: 0.2rem 0.5rem;
  border-radius: 50px;
  font-size: 14px;
`;

const Chip = ({ title }) => {
  return <ChipSkill>{title}</ChipSkill>;
};

export default Chip;
