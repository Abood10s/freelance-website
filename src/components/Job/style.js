import styled from "styled-components";

export const JobContainer = styled.div`
  border-top: 1px solid #e4ebe4;
  border-bottom: 1px solid #e4ebe4;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  transition: all 0.1s ease;
  cursor: pointer;
  &:hover {
    background-color: #f2f7f2;
  }
`;
export const Flex1 = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
`;
export const Flex2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const Title = styled.h3`
  transition: all 0.2s ease;
  &:hover {
    color: #108a18;
    text-decoration: underline;
  }
`;
export const PayInfo = styled.small``;
export const Body = styled.p``;
export const Skills = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
export const PayAndLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Proposals = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
