import React from "react";
import "./SignUp.css";
//import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[confirmEmail,setConfirmEmail] = useState("")
  const[password,setPassword] = useState("")
  let navigate = useNavigate();
  const successfullRegistration = () => {
    if (name && email && confirmEmail && password) {
      navigate("/Home");
    } 
  };

  
  return (
    <div>
      <div className="header-class">
        <h1>SignUp</h1>
      </div>
      <div className="App">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-5">
              <form id="loginform">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <label className="form-label">
                  Confirm Your Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Confirm email"
                  onChange={(e) => {
                    setConfirmEmail(e.target.value);
                  }}
                  required
                />
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <div></div>
                <div className="submit-button">

                    <button onClick={()=>{navigate("/");}} type="submit" className="register-button">
                      Login
                    </button>
                    <button
                    onClick={successfullRegistration}
                      type="submit"
                      className="register-button"
                    >
                      Register
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
