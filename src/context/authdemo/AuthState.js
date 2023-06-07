
import React, { useState, useRef } from "react";
import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";

const AuthState = (props) => {
  const [RenderLoginComponent, SetRenderLoginComponent] = useState(false); // true for login

  const toggleLoginSignup = () => {
    SetRenderLoginComponent(!RenderLoginComponent)
  }
  const onChange = (e) => {
    // Handle the form field changes here
  };


  return (
    <AuthContext.Provider value={{RenderLoginComponent, toggleLoginSignup }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
