import React from "react";
import FormBtn from "../formbtn";
import { FormContainer, FormWrapper, GoogleIcon } from "../loginform/style";
import google from "../../../assets/google.png";
import Divider from "../Divider";
import PrimaryBtn from "../../buttons/PrimaryBtn";
import { Check } from "./style";

const Signup = () => {
  return (
    <FormWrapper>
      <FormContainer width="100%">
        <FormBtn bg="#fff" clr="#000" type="Apple">
          <i className="fa-brands fa-apple"></i>
        </FormBtn>
        <FormBtn bg="#4285f4" clr="#fff" type="Google">
          <GoogleIcon>
            <img src={google} alt="google login" />
          </GoogleIcon>
        </FormBtn>
        <Divider />
        <Check>
          <input type="checkbox" id="sendemails" />
          <label htmlFor="sendemails">
            Send me helpful emails to find rewarding work and job leads
          </label>
        </Check>{" "}
        <Check>
          <input type="checkbox" id="sendemails" />
          <label htmlFor="sendemails">
            Send me helpful emails to find rewarding work and job leads
          </label>
        </Check>
        <PrimaryBtn title="Create my account" />
      </FormContainer>
    </FormWrapper>
  );
};

export default Signup;
