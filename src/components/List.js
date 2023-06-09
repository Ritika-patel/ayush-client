import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const {
    handleLogout
  } = context;

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/detail/fetch-details"
        );
        const data = await response.json();

        if (data.status === "success") {
          setDetails(data.data.data);
        } else {
          console.error("Fetch details failed:", data.message);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
  }, []);


  // const handleDeleteUser = async (userId) => {
  //   console.log(userId)
  //   try {
  //       const response = await fetch(`http://localhost:8000/auth/delete-user/${userId}`, {
  //       method: "DELETE",
  //     });
  
  //     const data = await response.json();
  //     console.log(data)
  
  //     if (response.ok) {
  //       console.log(data.message);
  //     } else {
  //       throw new Error(data.message);
  //     }
  //   } 
  //   catch (error) {
  //     console.log(error);
  //   }
  // };



  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <table className="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span>Hospital Name</span>
                      </th>
                      <th>
                        <span>Type</span>
                      </th>
                      <th>
                        <span>Address</span>
                      </th>
                      <th>
                        <span>Phone</span>
                      </th>

                      <th>
                        <span></span>
                      </th>

                    </tr>
                  </thead>
                  <tbody>
                    {details.map((detail) => (
                      <tr key={detail.id} >
                        <td>
                          <span className="">{detail.name}</span>
                        </td>
                        <td>
                          <span>Ayurveda Hospital</span>
                        </td>
                        <td className="text-center">
                          <span className="label label-default">
                            {detail.address}, {detail.city}, {detail.state}
                          </span>
                        </td>
                        {/* <td className="text-center">
                          <span className="label label-default">
                            {detail.email}
                          </span>
                        </td> */}
                        <td className="text-center">
                          <span className="label label-default">
                            {detail.phone}
                          </span>
                        </td>
                        <td style={{ width: "20%" }}>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${detail.latitude},${detail.longitude}`}
                            className="table-link"
                            target="_blank"
                          >

                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                            </span>
                          </a>

                          <a href={detail.website} 
                          target="_blank"
                          className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fa fa-globe fa-stack-1x fa-inverse"></i>
                            </span>
                          </a>

                          {/* <a href="#" className="table-link">
                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> */}

                          {/* <a href="#" className="table-link danger" onClick={() => handleDeleteUser(detail.id)}>

                            <span className="fa-stack">
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                            </span>
                          </a> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
