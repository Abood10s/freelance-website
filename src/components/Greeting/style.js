import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  border-radius: ${(props) => props.theme.Global.borderRadius};
  border: 1px solid #ddd;
`;
export const DayAndDate = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;
export const Personal = styled.div`
  display: flex;
  gap: 0.5em;
  flex-direction: column;
`;
