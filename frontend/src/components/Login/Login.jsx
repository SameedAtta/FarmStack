import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// import {HiMail} from "react-icons/hi"
// import {VscKey} from "react-icons/vsc"
//import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verifyEmailAndPass = () => {
    if (email && password) {
      navigate("/Home");
    } 
  };


  return (
    <section>
      <div>
        <h1 className="header-class">Welcome to My First Website</h1>
      </div>
      <div className="App">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <form id="loginform">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  required
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className="submit-button">
                  <button
                    type="submit"
                    onClick={verifyEmailAndPass}
                    className="register-button"
                  >
                    Login
                  </button>
                  <button 
                  onClick={() => {
                    navigate("/SignUp");
                  }}
                  className="register-button">SignUp</button> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
