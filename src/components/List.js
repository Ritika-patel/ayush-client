import React from "react";

const List = () => {
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
                        <span>email</span>
                      </th>
                      <th>
                        <span>Phone</span>
                      </th>

                      <th>
                        <span></span>
                      </th>

                      {/* <th>&nbsp;</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span className="">
                          Pt. Khushilal Sharma Govt. (Autonomous) Ayurveda
                          College & Institute Bhopal
                        </span>
                      </td>

                      <td>
                        <span>Ayurveda Hospital</span>
                      </td>

                      <td className="text-center">
                        <span className="label label-default">
                          Science Hills, Nehru Nagar - Kolar Bypass Road,
                          Bhopal, MP
                        </span>
                      </td>

                      <td className="text-center">
                        <span className="label label-default">
                          ritikapatel290@gmail.com
                        </span>
                      </td>

                      <td className="text-center">
                        <span className="label label-default">
                          +91 8965950607
                        </span>
                      </td>

                      <td style={{ width: "10%" }}>
                        <a href="#" className="table-link">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>

                        <a href="#" className="table-link">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" className="table-link danger">
                          <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
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
