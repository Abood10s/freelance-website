import styled from "styled-components";
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  border-bottom: 1px solid #eee;
  margin: 1rem 0;
  padding: 0.5em 0;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
export const Blue = styled.p`
  color: #0d6efd;
  font-size: 13px;
  font-weight: bold;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  transition: 0.6s;
`;
export const InputWrap = styled.div`
  display: flex;
  gap: 0.3em;
  cursor: pointer;
`;