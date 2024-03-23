import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

export default function ContactForm() {
  const [isContactHovered, setIsContactHovered] = useState(false);
  
  const handleMouseEnter = (setImageHover) => {
    setImageHover(true);
  };

  // Function to handle mouse leave for each image
  const handleMouseLeave = (setImageHover) => {
    setImageHover(false);
  };
  
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o4jt77n', 'template_kdynrkk', form.current,{publicKey: 'n-MIGkGoBc4WeebZp',} 
        
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

      return (
        <section id="contact">
          <div className="container-xl mb-5 p-5" style={{
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    borderRadius: '5px',
                    transform: isContactHovered ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isContactHovered ? '0 0 15px #00B5B8' : 'none',
                  }}
                  onMouseEnter={() => handleMouseEnter(setIsContactHovered)}
                  onMouseLeave={() => handleMouseLeave(setIsContactHovered)}>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="message"></div>
                <div className="contact-form">
                  <h1>Contact Us</h1>
                  <p className="hint-text">
                    We'd love to hear from you, please drop us a line if you have any queries.
                  </p>
                  <form 
                  ref={form}
                  onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="FullName">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="FullName"
                            name="user_name"
                            placeholder="Enter Full Name"
                            required
                            style={{marginBottom:"5px"}}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="Email">Email Address</label>
                          <input
                            type="email"
                            className="form-control"
                            id="Email"
                            name="user_email"
                            placeholder="Enter Email Address"
                            required
                            style={{marginBottom:"5px"}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Subject">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Subject"
                        name="subject"
                        placeholder="Enter Subject"
                        required
                        style={{marginBottom:"5px"}}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Message">Message</label>
                      <textarea
                        className="form-control"
                        id="Message"
                        name="message"
                        placeholder="Enter Message"
                        rows="5"
                        required
                        style={{marginBottom:"5px"}}
                      ></textarea>
                    </div>
                    <button 
                        id="submit-btn"
                        type="submit" 
                        className="btn" 
                        name="contact"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
}
