import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.Global.footerBg};
  padding: 4em 2em;
  display: grid;
  place-items: center;
  width: 98%;
  margin: 1rem auto;
  color: #fff;
  border-radius: 10px;
`;
export const Grid = styled.div`
  width: 90%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  color: #fff;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Social = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  border-bottom: 1px solid #9aaa97;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
`;
export const Icon = styled.div`
  display: grid;
  place-items: center;
  padding: 0.5rem;
  border: 1px solid #9aaa97;
  border-color: #9aaa97;
  border-radius: 50%;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    background-color: #9aaa97;
  }
`;
