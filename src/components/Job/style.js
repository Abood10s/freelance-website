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
  @media (max-width: 900px) {
    padding: 0.8rem 0.5rem;
  }
`;
export const Flex1 = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 80% 20%;
  }
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
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
export const PayInfo = styled.small``;
export const Body = styled.p``;
export const Skills = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  @media (max-width: 900px) {
    gap: 0.5rem;
    flex-wrap: wrap;
  }
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
export const Like = styled.div`
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  background-color: ${({ isLiked }) => (isLiked ? "#83c883" : null)};
  padding: 0.3rem;
  &:hover {
    background-color: #83c883;
  }
`;
