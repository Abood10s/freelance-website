import React from "react";
import { Input, InputWrapper } from "./style";

const FormInput = ({ type, placeholder = "Email or Username" }) => {
  return (
    <InputWrapper>
      <i className="fa-solid fa-user"></i>
      <Input type={type} placeholder={`${placeholder}`} />
    </InputWrapper>
  );
};

export default FormInput;
