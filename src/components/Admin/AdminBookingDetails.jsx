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
