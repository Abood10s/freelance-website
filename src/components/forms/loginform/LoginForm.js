import React, { useState } from "react";
import FormBtn from "../formbtn";
import FormHeader from "../formheader";
import { Error, FormContainer, FormWrapper, GoogleIcon } from "./style";
import google from "../../../assets/google.png";
import Divider from "../Divider";
import SubmitBtn from "../../SubmitBtn";
import * as Yup from "yup";
import { handleAuth } from "../../../redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../../global/style";
import { useNavigate } from "react-router-dom";
import { Input, InputWrapper } from "../forminput/style";

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("you should have an email address"),
  password: Yup.string().required("password cannot be empty"),
});

const LoginForm = () => {
  const { isLoading, authenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(process.env.REACT_APP_API_BASE_URL);
    console.log(errors);
    await Schema.validate(values, { abortEarly: false })
      .then(() => {
        dispatch(handleAuth(values.email, values.password));
      })
      .catch((error) => {
        setErrors([...errors, ...error.errors]);
      });
  };
  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        {errors?.map((err, index) => {
          return <Error key={index}>ــ {err}</Error>;
        })}
        <FormHeader />
        <InputWrapper>
          <i className="fa-solid fa-user"></i>
          <Input
            type="email"
            id="email"
            placeholder="Type here"
            onChange={handleChange}
            value={values.email}
          />
        </InputWrapper>
        <InputWrapper>
          <i className="fa-solid fa-user"></i>
          <Input
            type="password"
            id="password"
            placeholder="Type here"
            onChange={handleChange}
            value={values.password}
          />
        </InputWrapper>

        <FormBtn bg="#108a00" clr="#fff" />
        <Divider />
        <FormBtn bg="#4285f4" clr="#fff" type="Google">
          <GoogleIcon>
            <img src={google} alt="google login" />
          </GoogleIcon>
        </FormBtn>
        <FormBtn bg="#fff" clr="#000" type="Apple">
          <i className="fa-brands fa-apple"></i>
        </FormBtn>
        <Divider text="Don't have an Upwork account?" line="18%" />
        <SubmitBtn text={`${isLoading ? <Spinner /> : "Sign up"}`} />
      </FormContainer>
      {authenticated ? navigate("/") : null}
    </FormWrapper>
  );
};
export default LoginForm;
