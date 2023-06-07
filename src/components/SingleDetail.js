import React, { useEffect, useState } from "react";
import img from '../assets/default_hospital.jpg'
import ayushIcon from '../assets/ayush_icon.png';

function SingleDetail() {
  const [userdata, setuserData] = useState(null);

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
        }
      } else {
        console.error("Error fetching user detail");
      }
    } catch (error) {
      console.log(error);
      console.error("Error fetching user detail", error);
    }
  };

  return (
    <div>
      {userdata ? (
        <>
        <div className="detail">
          <div className="defaultImg">
          <img src={img} alt="Description of the image" />
          </div>
          <div className="userDetail">

          </div>
        </div>

        </>
        // <div>
        //   <p>name: {userdata.name}</p>
        //   <p>phone: {userdata.phone}</p>
        //   <p>website: {userdata.website}</p>
        //   <p>latitude: {userdata.latitude}</p>
        //   <p>longitude: {userdata.longitude}</p>
        //   <p>address: {userdata.address}</p>
        //   <p>state: {userdata.state}</p>
        //   <p>city: {userdata.city}</p>
        //   <p>type: {userdata.type}</p>
        //   <p>opening_time: {userdata.opening_time}</p>
        //   <p>closing_time: {userdata.closing_time}</p>
        //   <p>total_beds: {userdata.total_beds}</p>
        //   <p>available_beds: {userdata.available_beds}</p>
        //   <p>specifications: {userdata.specifications}</p>
        //   <p>functionalities: {userdata.functionalities}</p>
        // </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleDetail;
