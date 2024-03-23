// import React, { useEffect, useState } from "react";
// import UserSidebar from "./UserSidebar";
// import axios from "axios";
// import { Button, Container, Row, Table } from "react-bootstrap";

// export default function UserBookingDetails() {
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
//         {isSidebarVisible && <UserSidebar />}
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
//                     <tr>
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
// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function AdminBookingDetails() {
//   const [eventBookings, setEventBookings] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get("http://localhost:9093/getallevents");
//         //console.log(response);
//         // if (!response.ok) {
//         //   throw new Error("Failed to fetch events");
//         // }
//         // const data = await response.json();
//         // console.log("data:", data);
//         setEventBookings(response);
//       } catch (error) {
//         // console.log("inside catch");
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(eventBookings);

//   return (
//     <div>
//       {isLoading && <p>Loading events...</p>}
//       {error && <p>Error fetching events: {error.message}</p>}
//       {eventBookings.data && (
//         <div>
//           {eventBookings.data.length > 0 && (
//             <table>
//               <thead>
//                 <tr>
//                   {/* Adapt headers based on your EventBooking object properties */}
//                   <th>Sr. No.</th>
//                   <th>Event date</th>
//                   <th>Event Duration</th>
//                   <th>Hotel selection</th>
//                   <th>Number of guest</th>
//                   <th>Phone number</th>
//                   <th>start time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {eventBookings.data.map((booking, index) => (
//                   <tr key={booking.id}>
//                     {/* Replace with actual property names from your object */}
//                     <td>{index + 1}</td>
//                     <td>{booking.eventDate}</td>
//                     <td>{booking.eventTimingHours}</td>
//                     <td>{booking.hotel}</td>
//                     <td>{booking.numberOfGuests}</td>
//                     <td>{booking.phoneNumber}</td>
//                     <td>{booking.startingTime}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//           {eventBookings.length === 0 && <p>No events found.</p>}
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminBookingDetails;
// import axios from "axios";
// import React, { useState, useEffect } from "react";

// function AdminBookingDetails() {
//   const [eventBookings, setEventBookings] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get("http://localhost:9093/getallevents");
//         setEventBookings(response.data); // Assuming the response is an array of event objects
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {isLoading && <p>Loading events...</p>}
//       {error && <p>Error fetching events: {error.message}</p>}
//       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         {eventBookings.map((booking, index) => (
//           <div key={index} style={{ width: '300px', margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
//             <h3>{booking.eventDate}</h3>
//             <p>Event Duration: {booking.eventTimingHours}</p>
//             <p>Hotel: {booking.hotel}</p>
//             <p>Number of Guests: {booking.numberOfGuests}</p>
//             <p>Phone Number: {booking.phoneNumber}</p>
//             <p>Start Time: {booking.startingTime}</p>
//           </div>
//         ))}
//         {eventBookings.length === 0 && <p>No events found.</p>}
//       </div>
//     </div>
//   );
// }

// export default AdminBookingDetails;
import axios from "axios";
import React, { useState, useEffect } from "react";

function AdminBookingDetails() {
  const [eventBookings, setEventBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("http://localhost:9093/getallevents");
        setEventBookings(response.data); // Assuming the response is an array of event objects
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9093/deleteevent/${id}`);
      setEventBookings(eventBookings.filter(booking => booking.id !== id));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div>
      {isLoading && <p>Loading events...</p>}
      {error && <p>Error fetching events: {error.message}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {eventBookings.map((booking, index) => (
          <div key={index} style={{ width: '300px', margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h3>{booking.eventDate}</h3>
            <p>Event Duration: {booking.eventTimingHours}</p>
            <p>Hotel: {booking.hotel}</p>
            <p>Number of Guests: {booking.numberOfGuests}</p>
            <p>Phone Number: {booking.phoneNumber}</p>
            <p>Start Time: {booking.startingTime}</p>
            <button onClick={() => handleDelete(booking.id)}>Delete</button>
          </div>
        ))}
        {eventBookings.length === 0 && <p>No events found.</p>}
      </div>
    </div>
  );
}

export default AdminBookingDetails;
