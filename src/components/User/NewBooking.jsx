// import React, { useState, useEffect } from "react";
// import UserSidebar from "./UserSidebar";
// import { useNavigate } from "react-router-dom";

// const NewBooking = () => {
//   const navigate = useNavigate();
//   const [eventBookings, setEventBookings] = useState([]);
//   const [formData, setFormData] = useState({
//     phoneNumber: "",
//     eventDate: "",
//     startingTime: "",
//     hotel: "",
//     numberOfGuests: "",
//     eventTimingHours: "",
//   });

//   const [validationErrors, setValidationErrors] = useState({
//     phoneNumber: "",
//     eventDate: "",
//     startingTime: "",
//     hotel: "",
//     numberOfGuests: "",
//     eventTimingHours: "",
//   });

//   useEffect(() => {
//     getAllEventBookings();
//   }, []);

//   const getAllEventBookings = () => {
//     fetch("http://localhost:9093/getallevents")
//       .then((response) => response.json())
//       .then((data) => setEventBookings(data))
//       .catch((error) => console.error("Error fetching event bookings:", error));
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     // Reset validation error for the field being modified
//     setValidationErrors({ ...validationErrors, [name]: "" });
//   };

//   const isPhoneNumberUnique = (phoneNumber) => {
//     return eventBookings.every(
//       (booking) => booking.phoneNumber !== phoneNumber
//     );
//   };
//   const isValidIndianPhoneNumber = (phoneNumber) => {
//     const indianPhoneNumberRegex = /^[6-9]\d{9}$/;
//     return indianPhoneNumberRegex.test(phoneNumber);
//   };

//   const isEventDateUnique = (eventDate) => {
//     return eventBookings.every((booking) => booking.eventDate !== eventDate);
//   };

//   const isStartingTimeUnique = (startingTime) => {
//     return eventBookings.every(
//       (booking) => booking.startingTime !== startingTime
//     );
//   };

//   // const handleFormSubmit = (event) => {
//   //   event.preventDefault();

//   //   // Validation
//   //   let errors = {};

//   //   if (!formData.phoneNumber || !/^[7-9]\d{9}$/.test(formData.phoneNumber)) {
//   //     errors.phoneNumber = '*Must be 10 digits and start with 7, 8, or 9';
//   // }

//   //   if (!isEventDateUnique(formData.eventDate)) {
//   //     errors.eventDate = "Event date must be unique";
//   //   }

//   //   if (!isStartingTimeUnique(formData.startingTime)) {
//   //     errors.startingTime = "Starting time must be unique";
//   //   }

//   //   // Set validation errors
//   //   setValidationErrors(errors);

//   //   // Check for validation errors
//   //   if (Object.keys(errors).length > 0) {
//   //     return;
//   //   }

//   //   // Form submission logic
//   //   fetch("http://localhost:9093/createeventBooking", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify(formData),
//   //   })
//   //     .then((response) => {
//   //       if (response.ok) {
//   //         console.log("Event booking created successfully");
//   //         getAllEventBookings();
//   //         setFormData({
//   //           phoneNumber: "",
//   //           eventDate: "",
//   //           startingTime: "",
//   //           hotel: "",
//   //           numberOfGuests:"",
//   //           eventTimingHours:""
//   //         });
//   //         navigate("/RazorPay");
//   //       } else {
//   //         console.error("Failed to create event booking");
//   //       }
//   //     })
//   //     .catch((error) => console.error("Error creating event booking:", error));
//   // };

//   const [isSidebarVisible, setSidebarVisible] = useState(true);

//   const handleToggleSidebar = () => {
//     setSidebarVisible(!isSidebarVisible);
//   };

//   return (
//     <div style={{ display: "flex", margin: 0, padding: 0 }}>
//       {isSidebarVisible && <UserSidebar />}

//       <div id="content" style={{ padding: "20px", flexGrow: 1 }}>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <div className="container-fluid">
//             <button
//               type="button"
//               id="sidebarCollapse"
//               className="btn btn-info"
//               style={{ width: "20%" }}
//               onClick={handleToggleSidebar}
//             >
//               <i className="fas fa-align-left"></i>
//               <span>Toggle Sidebar</span>
//             </button>
//             <div>
//               <h3 className="text-info">BOOK YOUR EVENTS</h3>
//             </div>
//             <div>
//               <p>
//                 Welcome{" "}
//                 {/* {session.getAttribute('User_gender').equals('male') ? 'Mr.' : 'Miss.'}{' '} */}
//                 <span className="font-weight-bold text-info"></span>
//               </p>
//             </div>
//           </div>
//         </nav>
//         <div>
//           <section className="container">
//             <div className="container">
//               <div className="row align-items-center my-5">
//                 <div className="col-md-12">
//                   <h1>Event Booking</h1>
//                   <form onSubmit={handleFormSubmit}>
//                     <label>Phone Number:</label>
//                     <input
//                       type="text"
//                       name="phoneNumber"
//                       value={formData.phoneNumber}
//                       onChange={handleInputChange}
//                       required // Added required attribute
//                     />
//                     {validationErrors.phoneNumber && (
//                       <span className="text-danger">
//                         {validationErrors.phoneNumber}
//                       </span>
//                     )}
//                     <br />
//                     <label>Event Date:</label>
//                     <input
//                       type="date"
//                       name="eventDate"
//                       value={formData.eventDate}
//                       onChange={handleInputChange}
//                       required // Added required attribute
//                     />
//                     {validationErrors.eventDate && (
//                       <span className="text-danger">
//                         {validationErrors.eventDate}
//                       </span>
//                     )}
//                     <br />
//                     <label>Starting Time:</label>
//                     <input
//                       type="time"
//                       name="startingTime"
//                       value={formData.startingTime}
//                       onChange={handleInputChange}
//                       required // Added required attribute
//                     />
//                     {validationErrors.startingTime && (
//                       <span className="text-danger">
//                         {validationErrors.startingTime}
//                       </span>
//                     )}
//                     <br />
//                     <label>Event no of hours:</label>
//                     <input
//                       type="number"
//                       name="eventTimingHours"
//                       value={formData.eventTimingHours}
//                       onChange={handleInputChange}
//                       required // Added required attribute
//                     />
//                     {validationErrors.eventTimingHours && (
//                       <span className="text-danger">
//                         {validationErrors.eventTimingHours}
//                       </span>
//                     )}
//                     <br />
//                     <label>No of guests:</label>
//                     <input
//                       type="number"
//                       name="numberOfGuests"
//                       value={formData.numberOfGuests}
//                       onChange={handleInputChange}
//                       required // Added required attribute
//                     />
//                     {validationErrors.numberOfGuests && (
//                       <span className="text-danger">
//                         {validationErrors.numberOfGuests}
//                       </span>
//                     )}
//                     <br />
//                     <label>Hotel:</label>
//                     <br />
//                     <select
//                       name="hotel"
//                       value={formData.hotel}
//                       onChange={handleInputChange}
//                       required
//                       style={{
//                         padding: "10px",
//                         borderRadius: "10px",
//                         borderColor: "black",
//                         width: "100%",
//                         borderStyle: "thick",
//                       }}
//                     >
//                       <option value="" disabled>
//                         Select a hotel
//                       </option>
//                       <option value="hotel1">Taj Sats</option>
//                       <option value="hotel2">JW Mariott</option>
//                       <option value="hotel3">Oriental</option>
//                       <option value="hotel4">The Oberoi</option>
//                       <option value="hotel5">Taj Palace</option>
//                       {/* Add more options as needed */}
//                     </select>
//                     {validationErrors.hotel && (
//                       <span className="text-danger">
//                         {validationErrors.hotel}
//                       </span>
//                     )}
//                     <br />
//                     <button type="submit" style={{ background: "#0dcaf0" }}>
//                       {" "}
//                       Book Event
//                     </button>
//                   </form>
//                 </div>
//                 <div className="col-md-12">
//                   <hr />
//                   {/* <h2>All Event Bookings</h2>
//                 {eventBookings.map((eventBooking) => (
//                 <div key={eventBooking.id}>
//                   <p>Phone Number: {eventBooking.phoneNumber}</p>
//                   <p>Event Date: {eventBooking.eventDate}</p>
//                   <p>Starting Time: {eventBooking.startingTime}</p>
                  
//                   <p>No of hours:{eventBooking.eventTimingHours}</p>
//                   <p>No of Guests:{eventBooking.numberOfGuests}</p>
//                   <p>Hotel: {eventBooking.hotel}</p>
//                 </div>
//               ))} */}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>

//       <hr />
//     </div>
//   );
// };

// export default NewBooking;
import React, { useState, useEffect } from "react";
import UserSidebar from './UserSidebar';
import { Navigate } from "react-router-dom";
const NewBooking = () => {
  //const navigate = useNavigate();
  const [eventBookings, setEventBookings] = useState([]);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    eventDate: "",
    startingTime: "",
    hotel: "",
    numberOfGuests:"",
    eventTimingHours:""
  });

  const [validationErrors, setValidationErrors] = useState({
    phoneNumber: "",
    eventDate: "",
    startingTime: "",
    hotel: "",
    numberOfGuests:"",
    eventTimingHours:""
  });

  useEffect(() => {
    getAllEventBookings();
  }, []);

  const getAllEventBookings = () => {
    fetch("http://localhost:9093/getallevents")
      .then((response) => response.json())
      .then((data) => setEventBookings(data))
      .catch((error) => console.error("Error fetching event bookings:", error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset validation error for the field being modified
    setValidationErrors({ ...validationErrors, [name]: "" });
  };

  const isPhoneNumberUnique = (phoneNumber) => {
    return eventBookings.every((booking) => booking.phoneNumber !== phoneNumber);
  };
  const isValidIndianPhoneNumber = (phoneNumber) => {
    const indianPhoneNumberRegex = /^[6-9]\d{9}$/;
    return indianPhoneNumberRegex.test(phoneNumber);
  };

  const isEventDateUnique = (eventDate) => {
    return eventBookings.every((booking) => booking.eventDate !== eventDate);
  };

  const isStartingTimeUnique = (startingTime) => {
    return eventBookings.every((booking) => booking.startingTime !== startingTime);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validation
    let errors = {};

    if (!formData.phoneNumber || !/^[7-9]\d{9}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = '*Must be 10 digits and start with 7, 8, or 9';
  }


    if (!isEventDateUnique(formData.eventDate)) {
      errors.eventDate = "Event date must be unique";
    }

    if (!isStartingTimeUnique(formData.startingTime)) {
      errors.startingTime = "Starting time must be unique";
    }

    // Set validation errors
    setValidationErrors(errors);

    // Check for validation errors
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Form submission logic
    fetch("http://localhost:9093/createeventBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Event booking created successfully");
          getAllEventBookings();
          setFormData({
            phoneNumber: "",
            eventDate: "",
            startingTime: "",
            hotel: "",
            numberOfGuests:"",
            eventTimingHours:""
          });
        //  navigate("/RazorPay");
        } else {
          console.error("Failed to create event booking");
        }
      })
      .catch((error) => console.error("Error creating event booking:", error));
  };

  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div style={{ display: "flex", margin: 0, padding: 0 }}>
      {isSidebarVisible && <UserSidebar />}
      
      <div id="content" style={{ padding: "20px", flexGrow: 1 }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="btn btn-info" style={{width:"20%"}} onClick={handleToggleSidebar}>
            <i className="fas fa-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>
          <div>
            <h3 className="text-info">BOOK YOUR EVENTS</h3>
          </div>
          <div>
            <p>
              Welcome{' '}
              {/* {session.getAttribute('User_gender').equals('male') ? 'Mr.' : 'Miss.'}{' '} */}
              <span className="font-weight-bold text-info"></span>
            </p>
          </div>
        </div>
        </nav>
        <div>
          <section className="container">
            <div className="container">
              <div className="row align-items-center my-5">
                <div className="col-md-12">
                <h1>Event Booking</h1>
                <form onSubmit={handleFormSubmit}>
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                  {validationErrors.phoneNumber && <span className="text-danger">{validationErrors.phoneNumber}</span>}
                  <br />
                  <label>Event Date:</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    required
                  />
                  {validationErrors.eventDate && <span className="text-danger">{validationErrors.eventDate}</span>}
                  <br />
                  <label>Starting Time:</label>
                  <input
                    type="time"
                    name="startingTime"
                    value={formData.startingTime}
                    onChange={handleInputChange}
                    required
                  />
                  {validationErrors.startingTime && <span className="text-danger">{validationErrors.startingTime}</span>}
                  <br />
                  <label>Event no of hours:</label>
                  <input
                    type="number"
                    name="eventTimingHours"
                    value={formData.eventTimingHours}
                    onChange={handleInputChange}
                    required
                  />
                  {validationErrors.eventTimingHours && <span className="text-danger">{validationErrors.eventTimingHours}</span>}
                  <br />
                  <label>No of guests:</label>
                  <input
                    type="number"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    required
                  />
                  {validationErrors.numberOfGuests && <span className="text-danger">{validationErrors.numberOfGuests}</span>}
                  <br />
                  <label>Hotel:</label>
                  <br/>
                    <select
                      name="hotel"
                      value={formData.hotel}
                      onChange={handleInputChange}
                      required
                      style={{padding:"10px", borderRadius:"10px",borderColor:"black", width:"100%",borderStyle:"thick"}}
                    >
                      <option value="" disabled>Select a hotel</option>
                      <option value="hotel1">Taj Sats</option>
                      <option value="hotel2">JW Mariott</option>
                      <option value="hotel3">Oriental</option>
                      <option value="hotel4">The Oberoi</option>
                      <option value="hotel5">Taj Palace</option>
                      {/* Add more options as needed */}
                    </select>
                  {validationErrors.hotel && <span className="text-danger">{validationErrors.hotel}</span>}
                  <br />
                  <button type="submit" style={{background:"#0dcaf0"}}> Book Event</button>
                </form>
                </div>
                <div className="col-md-12">
                  <hr />
                {/* <h2>All Event Bookings</h2>
                {eventBookings.map((eventBooking) => (
                <div key={eventBooking.id}>
                  <p>Phone Number: {eventBooking.phoneNumber}</p>
                  <p>Event Date: {eventBooking.eventDate}</p>
                  <p>Starting Time: {eventBooking.startingTime}</p>
                  
                  <p>No of hours:{eventBooking.eventTimingHours}</p>
                  <p>No of Guests:{eventBooking.numberOfGuests}</p>
                  <p>Hotel: {eventBooking.hotel}</p>
                </div>
              ))} */}
                </div>
              </div>
            </div>
          </section>
        </div>
      
      </div>
      
      <hr />
      
    </div>
  );
};

export default NewBooking;
