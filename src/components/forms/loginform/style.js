import styled from "styled-components";
export const FormWrapper = styled.div`
  position: relative;
  width: 35%;
  border: 1px solid #e4ebe4;
  border-radius: 10px;
  margin: 2rem auto;
  padding: 1.5em;
`;
export const GoogleIcon = styled.div`
  display: grid;
  place-items: center;
  padding: 0.4rem 0.5rem;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
`;
export const FormContainer = styled.form`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5em;
`;
export const Error = styled.p`
  color: red;
  margin-bottom: 5px;
`;
