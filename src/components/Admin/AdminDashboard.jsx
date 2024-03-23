import React,{useState} from "react";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {

  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // const session = { Admin_gender: "male" };
  // const Admin_firstname = "John";
  // const Admin_lastname = "Doe";
  // const admin_user_count = 100;
  
  return (
    <>
      <style>
        {`.card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06);
          transition: 0.3s ease-in-out;
          cursor:pointer;
        }`}
      </style>
      <div style={{ display: "flex", margin: 0, padding: 0 }}>
      {isSidebarVisible && <AdminSidebar />}
        <div id="content" style={{ padding: "20px", flexGrow: 1 }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-info"
                style={{width:"20%"}}
                onClick={handleToggleSidebar}
              >
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
              <div>
                <h3 className="text-info">ADMIN DASHBOARD</h3>
              </div>
              <div>
                <p>
                  Welcome{" "}
                  {/* {session.getAttribute("Admin_gender") === "male"
                  ? "Mr."
                  : "Miss."}{" "}
                <span className="font-weight-bold text-info">
                  ${Admin_firstname} ${Admin_lastname}
                </span>  */}
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

          <div className="grey-bg container-fluid">
            <section id="minimal-statistics">
              <div className="row">
                <div className="col-12 mt-3 mb-1">
                  <h4 className="text-uppercase">Minimal Statistics Cards</h4>
                  <p>Statistics on minimal cards.</p>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="align-self-center">
                            <i class="fas fa-users primary fa-3x"></i>
                          </div>
                          <div class="media-body text-right">
                            {/* <h3 class="success">${admin_user_count}</h3>*/}
                          <span>Total Users</span> 
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
                          <div class="align-self-center">
                            <i class="fas fa-concierge-bell warning fa-3x"></i>
                          </div>
                          <div class="media-body text-right">
                            {/* <h3 class="danger">${admin_hotel_count}</h3>*/}
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
                          <div class="align-self-center">
                            <i class="fas fa-birthday-cake success fa-3x"></i>
                          </div>
                          <div class="media-body text-right">
                            {/* <h3 class="primary">${admin_event_count}</h3>*/}
                          <span>Total Events</span> 
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
                            {/* <h3 class="success">${admin_booking_count}</h3>*/}
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
              </div>

              <div class="row">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <div class="media d-flex">
                          <div class="media-body text-left">
                            {/* <h3 class="warning">
                            ${admin_bookingcancelbyadmin_count}
                          </h3> */}
                            <span>Bookings Cancelled by Admin</span>
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

export default AdminDashboard;