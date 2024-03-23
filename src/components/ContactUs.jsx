import React from 'react'
import NavbarComp from './NavbarComp/NavbarComp'
import FooterComp from './FooterComp/FooterComp'
import ContactForm from './ContactComp/ContactForm'

export default function ContactUs() {
  return (
    <>
    <NavbarComp/>
    <div className='container' style={{ width: '90%', maxWidth: '90%', marginTop:'30px', marginBottom:'30px'}}>
    <h2>Contact Us</h2>
          <hr />
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60287.886078955526!2d72.89302593158622!3d19.1955133316725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91a14628d87%3A0xa7ea222ef54c50ec!2sMillennium%20Toyota!5e0!3m2!1sen!2sin!4v1702042810443!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
    </div>
    <ContactForm/>
    <FooterComp/>
    </>
  )
}
