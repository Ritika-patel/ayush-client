import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { FaTimes } from "react-icons/fa";
import axios from 'axios';

const Edit_modal = () => {
  const context = useContext(AuthContext);
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

  const [updatedDetail, setUpdatedDetail] = useState({
    opening_time: "", // Provide initial value or assign value separately
    closing_time: "", // Provide initial value or assign value separately
    total_beds: "", // Provide initial value or assign value separately
    available_beds: "" // Provide initial value or assign value separately
  });

  async function handleUpdateDetail(e) {
    e.preventDefault();
    const id = JSON.parse(localStorage.getItem('userId'));
    console.log(id)
    try {
      const response = await axios.put(`http://localhost:8000/detail/update-detail`, {
        user_id: id,
        opening_time: updatedDetail.opening_time,
        closing_time: updatedDetail.closing_time,
        total_beds: updatedDetail.total_beds,
        available_beds: updatedDetail.available_beds,
      });
      const data = response.data;
      setIsModalOpen(false);
    //   setMessage(data.data); // Make sure to define and import setMessage
    //   setStatus(data.status); // Make sure to define and import setStatus
      console.log(data);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  const onChange = (e) => {
    setUpdatedDetail({
      ...updatedDetail,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <div className="flex-2">
            <h3>EDIT DEMOGRAPHIC DATA:</h3>
            <h3 type="button" onClick={closeModal}><FaTimes /></h3>
          </div>
          <br></br>
          {/* Opening and closing start */}
          <div className="formbold-input-flex">
            <div>
              <label htmlFor="opening_time" className="formbold-form-label">
                Opening Time
              </label>
              <input
                value={updatedDetail.opening_time}
                onChange={onChange}
                type="time"
                name="opening_time"
                id="opening_time"
                className="formbold-form-input"
              />
            </div>
            <div>
              <label htmlFor="closing_time" className="formbold-form-label">
                Closing Time
              </label>
              <input
                value={updatedDetail.closing_time}
                onChange={onChange}
                type="time"
                name="closing_time"
                id="closing_time"
                className="formbold-form-input"
              />
            </div>
          </div>
          {/* Opening and closing end */}
          {/* Beds available and total beds start */}
          <div className="formbold-input-flex">
            <div>
              <label htmlFor="total_beds" className="formbold-form-label">
                Total Beds
              </label>
              <input
                value={updatedDetail.total_beds}
                onChange={onChange}
                type="number"
                name="total_beds"
                id="total_beds"
                className="formbold-form-input"
              />
            </div>
            <div>
              <label htmlFor="available_beds" className="formbold-form-label">
                Total Beds available
              </label>
              <input
                value={updatedDetail.available_beds}
                onChange={onChange}
                type="number"
                name="available_beds"
                id="available_beds"
                className="formbold-form-input"
              />
            </div>
          </div>
          {/* Beds available and total beds end */}
          <button className="submit_btn" onClick={handleUpdateDetail}>Save</button>
        </div>
      </div>
    </>
  );
};

export default Edit_modal;
