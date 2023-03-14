import styled from "styled-components";
export const Wrapper = styled.div`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.clr};
  border-radius: 50px;
  text-align: center;
  padding: 0.7rem 1rem;
  position: relative;
  border: ${(props) => (props.border ? "1px solid #000" : "0px")};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
