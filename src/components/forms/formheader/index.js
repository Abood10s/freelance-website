import React from "react";

const FormHeader = ({ title = "Log in to Upwork" }) => {
  return <h2 style={{ textAlign: "center" }}>{title}</h2>;
};

export default FormHeader;
