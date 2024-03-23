import React from 'react'
import './FooterComp.css'

export default function FooterComp() {
  return (
    <>
    <div className='Footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-lg-4  col-12 ft-1'>
                    <h4>EventHUB</h4>
                    <p>EventHub is a cutting-edge event management system designed to streamline and enhance your event planning experience.
Whether you're organizing corporate conferences, weddings, birthday parties, or any other special occasions,
EventHub provides a comprehensive suite of tools to make your events a resounding success.</p>
                </div>
                <div className='col-md-6 col-lg-2  col-12 ft-2'>
                    <h5>Quick Links</h5>
                    <ul>
                        <li className="nav-item">
                            <a href="/aboutus" className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contactus" className="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-6 col-lg-3  col-12 ft-3'>
                    <h5>Follow eventHUB</h5>
                    <div className='footer-icons'>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>
                    </div>
                </div>
                <div className='col-md-6 col-lg-3  col-12 ft-4'>
                    <h5>Contact Info</h5>
                    <div className='contact'>
                        <p><i className="fa-solid fa-phone-volume"></i>+91 9867253789</p>
                        <p><i className="fa-solid fa-envelope"></i>test@gmail.com</p>
                        <p><i className="fa-solid fa-map-marker"></i>Mumbai, Maharashtra, India.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='footer-wrap'>
            <p>
                Copyright. eventHUB, All rights reserved.
            </p>
        </div>
    </>
  )
}
