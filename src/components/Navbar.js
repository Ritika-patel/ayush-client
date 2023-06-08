import Ayush_hospital from "../assets/ayush_hospital.png";
import AuthContext from "../context/auth/authContext";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

const Navbar = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    setDetailAdded,
    addDetails,
    detailCredentials,
    setDetailCredentials,
  } = context;

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("detailId");
    setDetailAdded(false);
    console.log("logged out");
    navigate("/");
  };

  return (
    <div className="topnav">
      <div className="l flex-2">
        <div className="NavIcon" href="#">
          <img className="NavImg" src={Ayush_hospital} alt="Ayush Hospital" />
        </div>
        <div>
          <div className="logout" onClick={handleLogout}>
          <FaPowerOff  size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
