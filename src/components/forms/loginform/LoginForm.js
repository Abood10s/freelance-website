import React, { useEffect, useState } from "react";
import FormBtn from "../formbtn";
import FormHeader from "../formheader";
import { Error, FormContainer, FormWrapper, GoogleIcon } from "./style";
import google from "../../../assets/google.png";
import Divider from "../Divider";
import SubmitBtn from "../../SubmitBtn";
import * as Yup from "yup";
import { handleAuth } from "../../../redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Input, InputWrapper } from "../forminput/style";
import FormFooter from "../../FormFooter";

const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("you should have an email address"),
  password: Yup.string().required("password cannot be empty"),
});

const LoginForm = () => {
  const { isLoading } = useSelector((state) => state.auth);
  let authenticated = localStorage.getItem("authenticated");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, [authenticated, navigate]);

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
    console.log(isLoading);
    await Schema.validate(values, { abortEarly: false })
      .then(() => {
        dispatch(handleAuth(values.email, values.password));
        setErrors([]);
      })
      .catch((error) => {
        setErrors(error.errors);
      });
  };
  return (
    <>
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
              placeholder="Your Email"
              onChange={handleChange}
              value={values.email}
            />
          </InputWrapper>
          <InputWrapper>
            <i className="fa-solid fa-lock"></i>
            <Input
              type="password"
              id="password"
              placeholder="Your Password  "
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
          <Divider
            text="Don't have an Upwork account?"
            comp={
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "green",
                  fontSize: "16px",
                }}
              >
                Sign up
              </Link>
            }
            line="12%"
          />

          <SubmitBtn loading={isLoading} />
        </FormContainer>
      </FormWrapper>
      <FormFooter />
    </>
  );
};
export default LoginForm;
