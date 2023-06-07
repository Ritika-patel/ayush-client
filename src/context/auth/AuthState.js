import React, { useState, useRef } from "react";
import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";

const AuthState = (props) => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const toggleLoginSignup = () => {
    setMessage("");
    setStatus("");
    setLogin(!login);
  };

  //REGISTER START

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    cpassword: "",
    type: "0",
  });

  async function registedUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/auth/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        type: credentials.type,
      }),
    });
  
    const data = await response.json();
  
    setMessage(data.data);
    setStatus(data.status);

    if(data.data.token){
      localStorage.setItem('token', data.data.token)
      setLogin(true)
    }
    console.log(data);
  }
  
  //REGISTER END

  //LOGIN START

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
    type: "0",
  });

  async function loginUser(e) {


    e.preventDefault();
    const response = await fetch("http://localhost:8000/auth/login-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginCredentials.email,
        password: loginCredentials.password,
        type: loginCredentials.type,
      }),
    });

    const data = await response.json();
    setMessage(data.data);
    setStatus(data.status);

    if(data.data.token){
      localStorage.setItem('token', JSON.stringify(data.data.token))
      localStorage.setItem('userId', JSON.stringify(data.data.user.id));
    }

      navigate('/add_details')
    
  }


  //LOGIN END

  //ADD DETAILS START
  const [detailCredentials, setDetailCredentials] = useState({
    name: "",
    user_id: "",
    phone: "",
    website: "",
    latitude: "",
    longitude: "",
    address: "",
    state: "",
    city: "",
    type: "",
    opening_time: '',
    closing_time: '',
    total_beds: 0,
    available_beds: 0,
    specifications: "",
    functionalities: "",
  });

  async function addDetails(e) {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem('userId'));
    const response = await fetch("http://localhost:8000/detail/add-detail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'x-access-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({
        name: detailCredentials.name,
        user_id: userId,
        phone: detailCredentials.phone,
        website: detailCredentials.website,
        latitude: detailCredentials.latitude,
        longitude: detailCredentials.longitude,
        address: detailCredentials.address,
        state: detailCredentials.state,
        city: detailCredentials.city,
        type: detailCredentials.type,
        opening_time: detailCredentials.opening_time,
        closing_time: detailCredentials.closing_time,
        total_beds: detailCredentials.total_beds,
        available_beds: detailCredentials.available_beds,
        specifications: detailCredentials.specifications,
        functionalities: detailCredentials.functionalities,
      }),
    });
  
    const data = await response.json();
    setMessage(data.data);
    setStatus(data.status);

    if (data.status==="success") {
      navigate('/single_detail')
    }
    
    console.log(data);
  }
  
  const [detailAdded, setDetailAdded] = useState(false);

  return (
    <AuthContext.Provider value={{ detailAdded, setDetailAdded, detailCredentials, setDetailCredentials, addDetails, login, message, status, loginUser, loginCredentials, setLoginCredentials, registedUser, toggleLoginSignup, message, status, credentials, setCredentials }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

