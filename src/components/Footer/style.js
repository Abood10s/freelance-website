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
  @media (max-width: 900px) {
    padding: 2rem 0.5rem;
    width: 90%;
    margin: 1rem auto;
  }
`;
export const Grid = styled.div`
  width: 90%;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  color: #fff;
  @media (max-width: 1200px) {
    width: 100%;
    justify-items: center;
    align-items: center;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  @media (max-width: 800px) {
    margin: 2rem;
    align-self: center;
  }
`;
export const Social = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  border-bottom: 1px solid #9aaa97;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
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
