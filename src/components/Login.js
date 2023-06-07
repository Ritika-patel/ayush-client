import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/auth/authContext";
import ErrorMessage from "./message/ErrorMessage";

const Login = () => {
  const context = useContext(AuthContext);
  const { message, status, toggleLoginSignup, loginCredentials, setLoginCredentials, loginUser } = context;

  const onChange = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };




  return (
    <>
      <section className="login">
        <form id="comment-form1" name="contact-form1" onSubmit={loginUser}>
          <div className="container">
            <h3>SIGN IN</h3>

            {status === "success" ? (
              <div></div>
            ) : (
              <div className="messages">{ErrorMessage({message, status})}</div>
            )}

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              value={loginCredentials.email}
              onChange={onChange}
              type="email"
              placeholder="xyz@gmail.com"
              name="email"
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              value={loginCredentials.password}
              onChange={onChange}
              type="password"
              placeholder="******"
              name="password"
            />

            <label htmlFor="user_type">
              <b>User Type</b>
            </label>
            <select
              name="type"
              value={loginCredentials.type}
              onChange={onChange}
              className="user-type"
            >
              <option value="0">User Type</option>
              <option value="1">Hospital admin</option>
              <option value="2">Dashboard admin</option>
            </select>

            <input
              className="submit_btn"
              type="submit"
              name="submit"
              value="Submit"
            />

            <div className="signup_forgotPassword">
              <div className="forgot_password">Forgot Password?</div>
              <div>
                <div className="toggle" onClick={toggleLoginSignup}>
                  Create new Account
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
