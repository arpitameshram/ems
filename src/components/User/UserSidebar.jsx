// import React from 'react';

// const UserSidebar = () => {
//   return (
//     <div className="wrapper">
//       <nav id="sidebar" className="bg-dark">
//         <div className="sidebar-header bg-dark">
//           <h3>
//             USER
//           </h3>
//         </div>
//         <hr className="bg-info" />
//         <ul className="list-unstyled components">
//           <li>
//             <a href="/userhome">
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a href="/userhotels&events">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="/usernewbooking">
//               New Booking
//             </a>
//           </li>
//           <li>
//             <a href="/userbookingdetails">
//               Booking Details
//             </a>
//           </li>
//         </ul>
//         <ul className="list-unstyled CTAs">
//           <li>
//             <a href="/LOGIN" className="article">

//               <span className="ml-2"></span>
//               <span className="mr-3">Logout</span>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default UserSidebar;
// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const UserSidebar = () => {
//   const history = useHistory();

//   const handleLogout = () => {
//     // Assuming you have a function to clear user authentication state or token
//     clearUserAuthentication();

//     // Redirect the user to the login page
//     history.push('/login');
//   };

//   const clearUserAuthentication = () => {
//     // You should implement this function based on your authentication system
//     // For example, clear local storage, remove tokens, or send a logout API request
//     // Clearing user data is essential for proper logout functionality
//     // Example:
//     // localStorage.removeItem('authToken');
//   };

//   return (
//     <div className="wrapper">
//       <nav id="sidebar" className="bg-dark">
//         <div className="sidebar-header bg-dark">
//           <h3>
//             USER
//           </h3>
//         </div>
//         <hr className="bg-info" />
//         <ul className="list-unstyled components">
//           <li>
//             <a href="/userhome">
//               Dashboard
//             </a>
//           </li>
//           <li>
//             <a href="/userhotels&events">
//               Services
//             </a>
//           </li>
//           <li>
//             <a href="/usernewbooking">
//               New Booking
//             </a>
//           </li>
//           <li>
//             <a href="/userbookingdetails">
//               Booking Details
//             </a>
//           </li>
//         </ul>
//         <ul className="list-unstyled CTAs">
//           <li>
//             <button onClick={handleLogout} className="article">
//               <span className="ml-2"></span>
//               <span className="mr-3">Logout</span>
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default UserSidebar;
import React from "react";
import { useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // UserLogout()
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="wrapper">
      <nav id="sidebar" className="bg-dark">
        <div className="sidebar-header bg-dark">
          <h3>USER</h3>
        </div>
        <hr className="bg-info" />
        <ul className="list-unstyled components">
          <li>
            <a href="/userhome">Dashboard</a>
          </li>
          <li>
            <a href="/userhotels&events">Services</a>
          </li>
          <li>
            <a href="/usernewbooking">New Booking</a>
          </li>
          <li>
            <a href="/userbookingdetails">Booking Details</a>
          </li>
        </ul>
        <ul className="list-unstyled CTAs">
          <li>
            <button onClick={handleLogout} className="article">
              <span className="ml-2"></span>
              <span className="mr-3">Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;
