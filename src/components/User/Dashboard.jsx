import React, { useState } from "react";
import UserSidebar from "./UserSidebar";

const UserDashboard = ({
  User_firstname,
  User_lastname,
  user_hotel_count,
  user_event_count,
}) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <style>
        {`
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
            transition: 0.3s ease-in-out;
            cursor: pointer;
          }
        `}
      </style>

      <div style={{ display: "flex", margin: 0, padding: 0 }}>
        {isSidebarVisible && <UserSidebar />}
        <div id="content" style={{ padding: "20px", flexGrow: 1 }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              {/* Sidebar Toggle Button */}
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-info"
                style={{ width: "20%" }}
                onClick={handleToggleSidebar}
              >
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>

              {/* Dashboard Title */}
              <div>
                <h3 className="text-info">USER DASHBOARD</h3>
              </div>

              {/* Welcome Message */}
              <div>
                <p>
                  Welcome{" "}
                  {/* {session.getAttribute('User_gender') === 'male' ? 'Mr.' : 'Miss.'}{' '}
                <span className="font-weight-bold text-info">{User_firstname} {User_lastname}</span> */}
                </p>
              </div>
            </div>
          </nav>

          <link
            rel="stylesheet"
            type="text/css"
            href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap-extended.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/fonts/simple-line-icons/style.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/colors.min.css"
          />

          {/* Rest of your HTML content */}
          <div className="grey-bg container-fluid">
            <section id="minimal-statistics">
              <div class="row">
                <div class="col-12 mt-3 mb-1">
                  <h4 class="text-uppercase">Minimal Statistics Cards</h4>
                  <p>Statistics on minimal cards.</p>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="success">${user_booking_count}</h3> */}
                            <span>Total Hotels</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="warning">${user_bookingpaid_count}</h3> */}
                            <span>Total Events</span>
                          </div>
                          <div class="align-self-center">
                            <i class="fa fa-birthday-cake success fa-3x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="primary">${user_bookingunpaid_count}</h3> */}
                            <span>Total Caterings</span>
                          </div>
                          <div class="align-self-center">
                            <i class="fas fa-french-fries"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="primary">${user_bookingpending_count}</h3> */}
                            <span>Total Vendors</span>
                          </div>
                          <div class="align-self-center">
                            <i class="fa fa-user-hard-hat fa-3x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="success">${user_booking_count}</h3> */}
                            <span>Total Booking</span>
                          </div>
                          <div class="align-self-center">
                            <i class="fas fa-calendar-check info fa-3x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="warning">${user_bookingpaid_count}</h3> */}
                            <span>Paid Bookings</span>
                          </div>
                          <div class="align-self-center">
                            <i class="fab fa-paypal secondary fa-3x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="primary">${user_bookingunpaid_count}</h3> */}
                            <span>UnPaid Bookings</span>
                          </div>
                          <div class="align-self-center">
                            <i class="fab fa-amazon-pay primary fa-3x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="primary">${user_bookingpending_count}</h3> */}
                            <span>Pending Bookings</span>
                          </div>
                          <div class="align-self-center">
                            <i class="fas fa-calendar-check success fa-3x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="warning">${user_bookingcancelbyadmin_count}</h3> */}
                            <span>Bookings Cancelled</span>
                          </div>
                          <div class="align-self-center">
                            <i class="fa fa-calendar-check warning fa-3x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
