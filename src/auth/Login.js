import React, { useState } from "react";
import "../assets/styles/Login.css";
import FormControl from "../components/FormControl";
import { IMAGES } from "../utils/Index";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import {
  checkDigitsRegExp,
  checkemail,
  checkLowerCase,
  checkMinLengthRegExp,
  checkSpecialCharRegExp,
  checkUpperCase,
} from "../config/Validate.js";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [state, setState] = useState({
    Email: "",
    Password: "",
    errors: [],
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errors: { ...state.errors, [e.target.name]: "" },
    });
  };

  const clearStates = () => {
    setState({
      Email: "",
      Password: "",
      errors: "",
    });
  };

  const validate = () => {
    const errors = {};
    let IsValid = true;

    if (!state.Email) {
      IsValid = false;
      errors["Email"] = "Email ID Is Required";
    } else if (!checkemail(state.Email)) {
      IsValid = false;
      errors["Email"] = "Please Enter valid Email id";
    } else {
      errors["Email"] = "";
    }

    if (!state.Password) {
      IsValid = false;
      // errors["Password"] = "Password contain minimum 8 chars & at least 1 upper,lower(case) letter,1 digit,1 special char";
      errors["Password"] = "Password contain minimum 8 character";
    } else if (!checkUpperCase(state.Password)) {
      IsValid = false;
      errors["Password"] = "At least one Uppercase";
    } else if (!checkLowerCase(state.Password)) {
      IsValid = false;
      errors["Password"] = "At least one Lowercase";
    } else if (!checkDigitsRegExp(state.Password)) {
      IsValid = false;
      errors["Password"] = "At least one digit";
    } else if (!checkSpecialCharRegExp(state.Password)) {
      IsValid = false;
      errors["Password"] = "At least one Special Characters";
    } else if (!checkMinLengthRegExp(state.Password)) {
      IsValid = false;
      errors["Password"] = "At least minumum 8 characters";
    } else {
      errors["Password"] = "";
    }

    setState({
      ...state,
      errors: errors,
    });
    return IsValid;
  };

  const handleSubmit = () => {
    console.log(state);
    if (validate()) {
      clearStates();
      alert("Done");
      navigate("/app/dashboard");
    } else {
      alert("Please Enter Proper Details ");
    }
  };

  return (
    <>
      <div className="login-outer-wrapper">
        <div className="login-inner-wrapper">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="login-vector">
                <img src={IMAGES.Login} alt="LoginImg" className="login-img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="p-4 login-form">
                <div className="login-heading">
                  <img src={IMAGES.Logo} alt="Logo" className="logo" />
                  <h4>Welcome to HRMS</h4>
                  <h6>Please Login to your account</h6>
                </div>
                <div className="">
                  <div className="">
                    <FormControl
                      wrapperClass=""
                      label="Email ID"
                      type="text"
                      data-name="Email"
                      name="Email"
                      placeholder="Please enter Email ID"
                      value={state.Email}
                      onChange={handleChange}
                      error={
                        state.errors
                          ? state.errors.Email
                            ? state.errors.Email
                            : ""
                          : ""
                      }
                    />
                  </div>
                  <div className=" position-relative">
                    <FormControl
                      wrapperClass=""
                      label="Password"
                      type={showPassword ? "text" : "Password"}
                      data-name="Password"
                      name="Password"
                      placeholder="Please enter Password"
                      value={state.Password}
                      onChange={handleChange}
                      error={
                        state.errors
                          ? state.errors.Password
                            ? state.errors.Password
                            : ""
                          : ""
                      }
                    />
                    <button
                      className="show-hide"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VscEyeClosed size={20} />
                      ) : (
                        <VscEye size={20} />
                      )}
                    </button>
                    <p className="forget-pass">Forget Password ?</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mb-2">
                  <button className="btn" onClick={handleSubmit}>
                    Login
                  </button>
                </div>
                <p className="create-acc">
                  Create an Account ? <span>Register</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
