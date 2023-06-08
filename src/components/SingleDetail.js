import React, { useEffect, useState, useContext } from "react";
import img from "../assets/default_hospital.jpg";
import AuthContext from "../context/auth/authContext";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import Edit_modal from "./Edit_modal";
import axios from "axios";

function SingleDetail() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    openModal,
    closeModal,
    isModalOpen,
    setIsModalOpen,
    setDetailAdded,
    addDetails,
    detailCredentials,
    setDetailCredentials,
  } = context;

  const [userdata, setuserData] = useState(null);
  const [url, setUrl] = useState("");

  const handleLogout = () => {
  
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("detailId");
    setDetailAdded(false);
    console.log("loged out");
    navigate("/");
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const userId = JSON.parse(localStorage.getItem("userId"));
  const fetchDetail = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/detail/fetch-single-detail/${userId}`
      );
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setuserData(data.data);
        if (data.data) {
          console.log(data.data);
          const latitude = data.data.latitude;
          const longitude = data.data.longitude;
          setUrl(
            `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
          );
        }
      } else {
        console.error("Error fetching user detail");
      }
    } catch (error) {
      console.log(error);
      console.error("Error fetching user detail", error);
    }
  };

  const handleDeleteUser = async () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    console.log(userId)


    try {
      const token = JSON.parse(localStorage.getItem("token")).accessToken;
      if (!token) {
        throw new Error("No access token found");
      }
  
      const response = await fetch(`http://localhost:8000/auth/delete-user/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const data = await response.json();
      console.log(data)
  
      if (response.ok) {
        console.log(data.message);
        // Perform any additional actions after successful deletion
      } else {
        throw new Error(data.message);
      }
    } 
    
    catch (error) {
      console.log(error);
    }
  };
  
  
  

  return (
    <div>
      {userdata ? (
        <>
          <div className="single-detail">
            <div className="defaultImg">
              <img src={img} alt="Description of the image" />
            </div>

            <div className="userDetail">
              <div className={!isModalOpen ? "abc1" : "abc2"}>
                <div className="hospital">
                  {userdata.name}
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    &nbsp; <FaMapMarkerAlt />
                  </a>
                </div>
                <div className="type">{userdata.type} Hospital</div>
                <div className="address">{userdata.address},</div>
                <p className="grey">
                  {userdata.city}, {userdata.state}
                </p>
                <br></br>

                <p className="specifications">
                  hospital offers {userdata.specifications} treatments, which
                  are a set of Ayurvedic therapies aimed at detoxifying and
                  rejuvenating the body. The hospital follows specific
                  specifications to ensure the effective delivery of these
                  treatments
                </p>
                <p className="functionalities">
                  providing comprehensive care ensures that patients can
                  experience the benefits {userdata.functionalities}
                </p>

                <div className="contact">CONTACT DETAILS : </div>
                <div className="contact-us">
                  <p>
                    Website: <a href={userdata.website}>{userdata.website}</a>
                  </p>
                  <p>
                    phone: <a href={userdata.phone}>+91 {userdata.phone}</a>
                  </p>
                </div>

                <div className="demographic contact">DEMOGRAPHIC DATA : </div>

                <div className="contact-us">
                  <p>Opeaning time : {userdata.opening_time}</p>
                  <p>Closing time : {userdata.closing_time}</p>
                </div>

                <div className="contact-us">
                  <p>Available Beds: {userdata.available_beds}</p>
                  <p>Total Beds : {userdata.total_beds}</p>
                </div>
                <br></br>
                <br></br>
              </div>

              <div>
                <button
                  className={
                    !isModalOpen ? "submit_btn button1" : "submit_btn button2"
                  }
                  onClick={openModal}
                >
                  Edit Demographic Data
                </button>

                {isModalOpen && <Edit_modal />}

                <br></br>

                <button
                  onClick={handleDeleteUser}
                  className={
                    !isModalOpen ? "delete button1" : " delete button2"
                  }
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleDetail;
