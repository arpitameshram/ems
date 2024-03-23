import React from 'react';
import './NavbarComp.css';

export default function NavbarComp() {
  return (
    <>
      <div className='fixed-top'>
        <nav className="navbar navbar-expand-lg bg-dark custom-navbar">
          <div className="container-fluid">
            <h1 className="navbar-brand">
              EventHUB
            </h1>
            <button className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/"> Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutus">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/customerstories">
                    Customer Stories
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                  SignUP <i className="fa-solid fa-user"/>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/register">
                        Register
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/login">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/adminlogin">
                        Admin login
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}