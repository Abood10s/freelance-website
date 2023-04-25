import styled from "styled-components";

export const Button = styled.button`
  border: 2px solid #108a00;
  color: #108a00;
  padding: 0.5em 1em;
  background-color: transparent;
  border-radius: 50px;
  width: 60%;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  white-space: nowrap;
  margin: auto;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #f2f7f2;
  }
  @media (max-width: 1200px) {
    padding: 0.5em 0.3em;
  }
`;
