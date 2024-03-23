
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";
import { Button, Container, Row, Table } from "react-bootstrap";

export default function AdminUserDetails() {
  const navigate = useNavigate();
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [details, setDetails] = useState([]);
  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  async function populateData() {
    try {
      const response = await axios.get("http://localhost:9093/all");
      console.log(response);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    populateData();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:9093/userupdate/${id}`);
      // Refresh the data after approval
      populateData();
      navigate(`/UserUpdate`);
    } catch (error) {
      console.error("Error approving booking:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const userid = id;
      await axios.delete(`http://localhost:9093/userdelete/${userid}`);
      // Refresh the data after deletion
      populateData();
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: 0,
          padding: 0,
          flexDirection: isSidebarVisible ? "row" : "column",
        }}
      >
        {isSidebarVisible && <AdminSidebar />}
        <div id="content" style={{ padding: "20px", flexGrow: 1 }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
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
              <div>
                <h3 className="text-info">USER BOOKING DETAILS</h3>
              </div>
              <div>
                <p>
                  Welcome{" "}
                  {/* {session.getAttribute('User_gender').equals('male') ? 'Mr.' : 'Miss.'}{' '} */}
                  {/* <span className="font-weight-bold text-info">{User_firstname} {User_lastname}</span> */}
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
          <Container className="containerHost">
            <Row>
              <Table striped bordered hover style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>

                    <th>Phone Number</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {details.map((d) => (
                    <tr>
                      <td>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.phoneNo}</td>
                      <td>{d.city}</td>

                      <td>
                        <Button
                          style={{ marginLeft: 1 + "em" }}
                          variant="danger"
                          onClick={() => {
                            handleDelete(d.id);
                          }}
                        >
                          Reject
                        </Button>
                        <Button
                          style={{ marginLeft: 1 + "em" }}
                          variant="success"
                          onClick={() => {
                            handleApprove(d.id);
                          }}
                        >
                          Update
                          
                        </Button>
                      </td>
                      <td>{d.Remarks}</td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminSidebar from "./AdminSidebar";
// import axios from "axios";
// import { Button, Container, Row, Table } from "react-bootstrap";

// export default function AdminUserDetails() {
//   const navigate = useNavigate();
//   const [isSidebarVisible, setSidebarVisible] = useState(true);
//   const [details, setDetails] = useState([]);
//   const handleToggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   async function populateData() {
//     try {
//       const response = await axios.get("http://localhost:9093/all");
//       console.log(response);
//       setDetails(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     populateData();
//   }, []);

//   const handleApprove = async (id) => {
//     try {
//       await axios.put(`http://localhost:9093/userupdate/${id}`);
//       // Refresh the data after approval
//       populateData();
//       navigate(`/UserUpdate`); // Navigate to UserUpdate page after updating
//     } catch (error) {
//       console.error("Error approving booking:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       console.log(id);
//       const userid = id;
//       await axios.delete(`http://localhost:9093/userdelete/${userid}`);
//       // Refresh the data after deletion
//       populateData();
//     } catch (error) {
//       console.error("Error deleting booking:", error);
//     }
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           margin: 0,
//           padding: 0,
//           flexDirection: isSidebarVisible ? "row" : "column",
//         }}
//       >
//         {isSidebarVisible && <AdminSidebar />}
//         <div id="content" style={{ padding: "20px", flexGrow: 1 }}>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//               <button
//                 type="button"
//                 id="sidebarCollapse"
//                 className="btn btn-info"
//                 style={{ width: "20%" }}
//                 onClick={handleToggleSidebar}
//               >
//                 <i className="fas fa-align-left"></i>
//                 <span>Toggle Sidebar</span>
//               </button>
//               <div>
//                 <h3 className="text-info">USER BOOKING DETAILS</h3>
//               </div>
//               <div>
//                 <p>
//                   Welcome{" "}
//                   {/* {session.getAttribute('User_gender').equals('male') ? 'Mr.' : 'Miss.'}{' '} */}
//                   {/* <span className="font-weight-bold text-info">{User_firstname} {User_lastname}</span> */}
//                 </p>
//               </div>
//             </div>
//           </nav>
//           <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/bootstrap-extended.min.css"
//           />
//           <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/fonts/simple-line-icons/style.min.css"
//           />
//           <link
//             rel="stylesheet"
//             type="text/css"
//             href="https://pixinvent.com/stack-responsive-bootstrap-4-admin-template/app-assets/css/colors.min.css"
//           />
//           <Container className="containerHost">
//             <Row>
//               <Table striped bordered hover style={{ textAlign: "center" }}>
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Phone Number</th>
//                     <th>City</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {details.map((d) => (
//                     <tr key={d.id}>
//                       <td>{d.name}</td>
//                       <td>{d.email}</td>
//                       <td>{d.phoneNo}</td>
//                       <td>{d.city}</td>
//                       <td>
//                         <Button
//                           style={{ marginLeft: 1 + "em" }}
//                           variant="danger"
//                           onClick={() => {
//                             handleDelete(d.id);
//                           }}
//                         >
//                           Reject
//                         </Button>
//                         <Button
//                           style={{ marginLeft: 1 + "em" }}
//                           variant="success"
//                           onClick={() => {
//                             handleApprove(d.id);
//                           }}
//                         >
//                           Update
//                         </Button>
//                       </td>
//                       <td>{d.Remarks}</td>
//                       <td></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Row>
//           </Container>
//         </div>
//       </div>
//     </>
//   );
// }
