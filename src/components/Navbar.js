import React from 'react';
import Ayush_hospital from "../assets/ayush_hospital.png";

const Navbar = () => {
  return (

      <div className="topnav">
        <div className="l">
          <a className="NavIcon" href="#">
            <img className="NavImg" src={Ayush_hospital} alt="Ayush Hospital" />
          </a>
        </div>
      </div>
  );
};

export default Navbar;
