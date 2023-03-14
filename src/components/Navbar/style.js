import styled from "styled-components";
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;
export const NavFlex1 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
export const NavFlex2 = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
export const Logout = styled.button`
  color: #fff;
  background-color: ${(props) => props.theme.Global.txtGreen};
  display: block;
  padding: 0.5em 1.5em;
  border-radius: 50px;
  white-space: nowrap;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  margin: 0.2rem auto;
`;
