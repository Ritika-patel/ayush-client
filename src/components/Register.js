import React, { useContext, useState } from "react";
import AuthContext from "../context/auth/authContext";
import ErrorMessage from "./message/ErrorMessage";
import { useNavigate } from "react-router-dom";

// in signup if we choose hospital admin go to add details page for adding details
// dashboard admin - redirect to list page

const Register = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { registedUser, toggleLoginSignup, message, status, credentials, setCredentials } = context;

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <>
      <section className="signup">
        <form
          id="comment-form1"
          name="contact-form1"
          onSubmit={registedUser}
        >
          <div className="container">
            <h3>SIGN UP</h3>

            {status === "success" ? (
              <div></div>
            ) : (
              <div className="messages">{ErrorMessage({message, status})}</div>
            )}

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="xyz@gmail.com"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              value={credentials.password}
              type="password"
              placeholder="******"
              name="password"
              onChange={onChange}
            />

            <label htmlFor="cpassword">
              <b>Confirm Password</b>
            </label>
            <input
              onChange={onChange}
              value={credentials.cpassword}
              type="password"
              placeholder="******"
              name="cpassword"
            />

            <label htmlFor="user_type">
              <b>User Type</b>
            </label>
            <select
              alue={credentials.type}
              onChange={onChange}
              name="type"
              className="user-type"
            >
              <option value="0">User Type</option>
              <option value="1">Hospital admin</option>
              {/* <option value="2">Dashboard admin</option> */}
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
                  Already have an account
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
