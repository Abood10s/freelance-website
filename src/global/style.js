import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: 0.5rem auto;
  display: grid;
  grid-template-columns: ${(props) => (props.reverse ? "1fr 3fr" : "3fr 1fr")};
  gap: 1.5em;
  padding: 1.5rem;
  margin: auto;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding: 0.5rem;
  }
`;
export const Spin = keyframes`
 to {
      transform: rotate(360deg);
    }
`;
export const Spinner = styled.p`
  display: block;
  margin: 0.3rem auto;
  width: 40px;
  height: 40px;
  border: 5px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  border-top-color: #108a00;
  animation: ${Spin} 0.5s ease-in-out infinite;
`;
