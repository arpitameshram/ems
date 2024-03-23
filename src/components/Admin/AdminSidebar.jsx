import React from "react";
import "./Admin.css";

export default function AdminSidebar() {
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <nav id="sidebar" className="bg-dark">
        <div className="sidebar-header bg-dark">
          <h3>ADMIN</h3>
        </div>
        <hr className="bg-info" />
        <ul className="list-unstyled components">
          <p></p>
          <li>
            <a href="/adminhome">Dashboard</a>
          </li>
          <li>
            <a href="/adminuserdetails">Users</a>
          </li>
          <li>
            <a href="/adminbookingdetails">Booking Details</a>
          </li>
        </ul>

        <ul className="list-unstyled CTAs">
          {/* <li>
            <a href="/adminaccount" className="download">
              Accounts
            </a>
          </li> */}
          <li>
            <a href="/login" className="article">
              <span className="ml-2"></span>
              <span className="mr-3">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
