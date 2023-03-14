import React from "react";
import { Spinner } from "../../global/style";
import { Button } from "./style";

const SubmitBtn = ({ text = "Login", loading }) => {
  return <Button type="submit">{loading ? <Spinner /> : text}</Button>;
};

export default SubmitBtn;
