import React from "react";
import { Wrapper } from "./style";

const FormBtn = ({ border, bg, clr, children, type = "Email" }) => {
  return (
    <Wrapper bg={bg} clr={clr} border={true}>
      {children} Continue with {type}
    </Wrapper>
  );
};

export default FormBtn;
