import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import { useJwt } from "react-jwt";
import { isExpired, decodeToken } from "react-jwt";

const AddDetails = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    setDetailAdded,
    addDetails,
    detailCredentials,
    setDetailCredentials,
  } = context;

  const [user, setUser] = useState(null);

  //adding details

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userToken = decodeToken(token);
      if (!userToken) {
        localStorage.removeItem("token");
        console.log("User not found");
        navigate("/"); // Redirect to the login page if user token is invalid or not found
      } else {
        const userId = JSON.parse(localStorage.getItem('userId'));
        // Check if details are already added by fetching the detail based on userId
        const fetchDetail = async () => {
          try {
            const response = await fetch(`http://localhost:8000/detail/fetch-single-detail/${userId}`);
            console.log(response)
            if (response.ok) {
              const data = await response.json();
              // console.log(data)
              if (data.data) {
                console.log("Details are already added");
                console.log(data.data)
                navigate("/single_detail"); // Redirect to '/single_detail' page
              }
            } else {
              // Handle error response
              console.error('Error fetching user detail');
            }
          } catch (error) {
            console.log(error)
            console.error('Error fetching user detail', error);
          }
        };
  
        fetchDetail();
        
        console.log("Logged in");
        setUser(userToken);
      }
    } else {
      console.log("Don't try to see details without logging in");
      navigate("/");
    }
  }, []);
  
  
  // useEffect(() => {
  //   const handlePopstate = () => {
  //     handleLogout();
  //   };

  //   window.addEventListener('popstate', handlePopstate);

  //   return () => {
  //     window.removeEventListener('popstate', handlePopstate);
  //   };
  // }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("detailId");
    setDetailAdded(false);
    setUser(null);
    console.log("loged out");
    navigate("/");
  };

  if (!user) {
    return null; // Render an appropriate loading or authentication check
  }

  const onChange = (e) => {
    setDetailCredentials({
      ...detailCredentials,
      [e.target.name]: e.target.value,
    });
  };

    return (
      <>
        <button onClick={handleLogout}>Logout</button>
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <form onSubmit={addDetails}>
              <div className="formbold-form-title">
                {/* <h2>Submit Hospital Details</h2> */}
                <p>
                  Submitting hospital details simplifies finding hospitals and
                  accessing important information for patients and users.
                </p>
              </div>

              {/* Hospital Name start*/}
              <div className="formbold-mb-3">
                <label htmlFor="hospital_name" className="formbold-form-label">
                  Hospital Name
                </label>
                <input
                  value={detailCredentials.name}
                  onChange={onChange}
                  type="tel"
                  name="name"
                  id="name"
                  className="formbold-form-input"
                />
              </div>
              {/* Hospital Name end */}

              {/* Phone start */}

              <div className="formbold-mb-3">
                <label htmlFor="phone" className="formbold-form-label">
                  Phone no
                </label>
                <input
                  value={detailCredentials.phone}
                  onChange={onChange}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="formbold-form-input"
                />
              </div>
              {/* phone end */}

              {/* email and website start */}
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="website url" className="formbold-form-label">
                    Website URL
                  </label>
                  <input
                    value={detailCredentials.website}
                    onChange={onChange}
                    type="url"
                    name="website"
                    id="website url"
                    className="formbold-form-input"
                  />
                </div>
              </div>
              {/* email and website end */}

              {/* Latitude and longitude start */}
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="latitude" className="formbold-form-label">
                    Latitude
                  </label>
                  <input
                    value={detailCredentials.latitude}
                    onChange={onChange}
                    type="text"
                    name="latitude"
                    id="latitude"
                    className="formbold-form-input"
                  />
                </div>
                <div>
                  <label htmlFor="longitude" className="formbold-form-label">
                    Longitude
                  </label>
                  <input
                    value={detailCredentials.longitude}
                    onChange={onChange}
                    type="text"
                    name="longitude"
                    id="longitude"
                    className="formbold-form-input"
                  />
                </div>
              </div>
              {/* Latitude and longitude end */}

              {/* Address start*/}
              <div className="formbold-mb-3">
                <label htmlFor="address" className="formbold-form-label">
                  Street Address
                </label>
                <input
                  value={detailCredentials.address}
                  onChange={onChange}
                  type="text"
                  name="address"
                  id="address"
                  className="formbold-form-input"
                />
              </div>
              {/* Address end */}

              {/* state and country start */}
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="state" className="formbold-form-label">
                    State/Province
                  </label>
                  <select
                    value={detailCredentials.state}
                    onChange={onChange}
                    id="state"
                    type="text"
                    name="state"
                    className="formbold-form-input"
                  >
                    <option value="">Select state</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="LA">Ladakh</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Odisha</option>
                    <option value="PY">Puducherry</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TG">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="UT">Uttarakhand</option>
                    <option value="WB">West Bengal</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="city" className="formbold-form-label">
                    City
                  </label>
                  <input
                    value={detailCredentials.city}
                    onChange={onChange}
                    type="text"
                    name="city"
                    id="city"
                    className="formbold-form-input"
                  />
                </div>
              </div>
              {/* state and country end */}

              {/*"hospital_type start*/}
              <div className="formbold-mb-3">
                <label htmlFor="type" className="formbold-form-label">
                  Hospital Type
                </label>
                <select
                  className="form-control formbold-form-input"
                  type="text"
                  name="type"
                  id="type"
                  value={detailCredentials.type}
                  onChange={onChange}
                >
                  <option value="">select type</option>
                  <option value="ayurveda">Ayurveda</option>
                  <option value="yoga">Yoga</option>
                  <option value="unani">Unani</option>
                  <option value="siddha">Siddha</option>
                  <option value="homeopathy">Homeopathy</option>
                </select>
              </div>
              {/*"hospital_type end */}

              {/* opeaning and closing start */}
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="opening_time" className="formbold-form-label">
                    Opeaning Time
                  </label>

                  <input
                    value={detailCredentials.opening_time} // Set a default value of empty string if detailCredentials.opening_time is undefined
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
                    value={detailCredentials.closing_time} // Set a default value of empty string if detailCredentials.opening is undefined
                    onChange={onChange}
                    type="time"
                    name="closing_time"
                    id="closeing_time"
                    className="formbold-form-input"
                  />
                </div>
              </div>
              {/* opeaning and closing end */}

              {/* Beds available and total beds start */}
              <div className="formbold-input-flex">
                <div>
                  <label htmlFor="total_beds" className="formbold-form-label">
                    Total Beds
                  </label>
                  <input
                    value={detailCredentials.total_beds}
                    onChange={onChange}
                    type="number"
                    name="total_beds"
                    id="total_beds"
                    className="formbold-form-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="available_beds"
                    className="formbold-form-label"
                  >
                    Total Beds available
                  </label>
                  <input
                    value={detailCredentials.available_beds}
                    onChange={onChange}
                    type="number"
                    name="available_beds"
                    id="available_beds"
                    className="formbold-form-input"
                  />
                </div>
              </div>
              {/* Beds available and total beds end */}

              {/* specifications and functionalities start */}
              <div className="formbold-input-flex">
                <div>
                  <label
                    htmlFor="specifications"
                    className="formbold-form-label"
                  >
                    specifications
                  </label>
                  <input
                    value={detailCredentials.specifications}
                    onChange={onChange}
                    type="text"
                    name="specifications"
                    id="specifications"
                    className="formbold-form-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="functionalities"
                    className="formbold-form-label"
                  >
                    functionalities
                  </label>
                  <input
                    value={detailCredentials.functionalities}
                    onChange={onChange}
                    type="text"
                    name="functionalities"
                    id="functionalities"
                    className="formbold-form-input"
                  />
                </div>
              </div>
              {/* specifications and functionalities end */}

              <button className="formbold-btn">Save</button>
            </form>
          </div>
        </div>
      </>
    );
};

export default AddDetails;





// useEffect(() => {
//   fetchDetail();
// }, []);

// const fetchDetail = async () => {
//   const detailId = localStorage.getItem('detailId');
//   if (detailId) {
//     // Check if detailId is not null
//     try {
//       const response = await fetch(
//         `http://localhost:8000/detail/fetch-single-detail/${detailId}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch notes");
//       }

//       const data = await response.json();
//       console.log("aur data is:");
//       console.log(data);
//       setData(data);
//     } catch (error) {
//       console.error("Error fetching notes:", error);
//     }
//   } else {
//     console.log("No detailId found in localStorage");
//   }
// };