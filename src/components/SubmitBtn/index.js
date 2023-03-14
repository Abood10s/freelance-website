import React from "react";
import { Button } from "./style";

const SubmitBtn = ({ text = "Sign up" }) => {
  return <Button type="submit">{text}</Button>;
};

export default SubmitBtn;
