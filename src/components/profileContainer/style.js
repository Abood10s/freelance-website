import styled from "styled-components";
import avatar from "../../assets/avatar.jpeg";
export const Container = styled.div`
  width: 65%;
  margin: 1rem auto;
  border: 1px solid #e4ebe4;
  border-radius: 12px;
`;
export const HeadSection = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 1.5rem 2rem;
`;
export const MainSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 1.5rem 2rem;
`;
export const Avatar = styled.div`
  background: ${`url(${avatar})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: fit-content;
  position: relative;
  border-radius: 50%;
  width: ${(props) => props.size || "80px"};
  height: ${(props) => props.size || "80px"};
  margin: auto;
`;
export const Online = styled.div`
  position: absolute;
  right: 5%;
  bottom: 5%;
  background-color: rgb(20, 168, 0);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  padding: 0.2rem;
`;
export const EditAvatar = styled.div`
  position: absolute;
  left: -15%;
  top: -7%;
  background-color: #fff;
  width: fit-content;
  border-radius: 50%;
  border: 2px solid #e4ebe4;
  padding: 0.5rem;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Actions = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 1em;
`;

export const Flex1 = styled.div`
  display: flex;
  align-items: start;
  gap: 2rem;
`;
export const Column1 = styled.div`
  border-right: 1px solid #e4ebe4;
`;
export const Column2 = styled.div`
  padding: 0.5rem;
`;
export const JobDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Section = styled.div`
  border-top: 1px solid #e4ebe4;
  border-bottom: 1px solid #e4ebe4;
  padding: 1rem 0;
`;
export const AllWork = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0.5rem 1.2rem;
  margin-left: -2rem;
  background-color: #108a00;
`;
export const P = styled.p`
  font-weight: bold;
  color: #fff;
`;
