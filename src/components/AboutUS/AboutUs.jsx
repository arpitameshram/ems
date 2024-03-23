import React,{useState} from 'react';
import { Card } from 'react-bootstrap';
import NavbarComp from '../NavbarComp/NavbarComp';
import FooterComp from '../FooterComp/FooterComp';
import './AboutUs.css';

export default function AboutUs() {
  const [isArpitaHovered, setIsArpitaHovered] = useState(false);
  const [isShubhamHovered, setIsShubhamHovered] = useState(false);
  const [isKuldeepHovered, setIsKuldeepHovered] = useState(false);
  const [isChaitanyaHovered, setIsChaitanyaHovered] = useState(false);
  const [isAdnanHovered, setIsAdnanHovered] = useState(false);

  const handleMouseEnter = (setImageHover) => {
    setImageHover(true);
  };

  // Function to handle mouse leave for each image
  const handleMouseLeave = (setImageHover) => {
    setImageHover(false);
  };
  return (
    <>
      <div>
        <NavbarComp />
        <div className="container">
          <h2>ABOUT OUR COMPANY</h2>
          <hr />
          <div className="container flex align-items-center">
            <div className="text-container">
              <p style={{ fontSize: '1.2em', textAlign: 'left' }}>
              Our event planning company has been serving businesses for 35 years.
              While we can do all types of events, company picnics, product launch parties, 
              business anniversaries and other corporate events are our specialty. 
              We take pride in knowing that our approach to planning events has one sole focus – your business.
              Our goal is to be the only event planning company you’ll ever need. 
              Our event planners express a unique passion for helping people create and celebrate the moments that truly matter.
              Events have power. The power to connect and inspire.
              When people come together, ideas take root. Relationships are built. Real change happens.
              With imagination and skill, the latest technology, and a passion for excellence, we create innovative event solutions.
              Our global team of creators, innovators and experts transform events into immersive, collaborative experiences that deliver real results.
              Encore. Events that Transform.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <h2>WORLD CLASS SERVICES</h2>
          <hr />
          <div className="container flex align-items-center">
            <div className="text-container">
              <p style={{ fontSize: '1.2em', textAlign: 'left' }}>
              Our team of professionals get to know your company inside and out and handle every detail to produce a world-class event. Simply put, we’ll plan your event start to finish. Every aspect, from colors to location to staff to food. And the best part? You’ll get all the credit. We want to make you the #OfficeHero. You’ll get clean, attentive well-dressed staff free of clashing logos and company names.
              You can rely on a seamlessly planned event from food to activities- we’ll even entertain the kids! Imagine how pleased your boss would be to see the company logo in the backdrop of professionally snapped photos provided to you for FREE after the event! After all, it’s your event. You can market if you want to!
              Our entire company wants you to feel relaxed and make the whole process as easy as possible. We’ve hand-selected our entire team to ensure that you not only get the people that are the best at what they do, but who are also truly happy to be a part of your day. <br/>It has been our mission to always give our clients 5-star treatment and make them the center of the event.
              We coordinate the activities, entertainment, transportation, catering, program logistics and much more. We want you to think of us as your silent partner – from start to finish.
              Why have ordinary when you can have extraordinary? That’s what we bring. And that’s why we’ve been rated one of the best event planning companies in Los Angeles on Yelp. We are more than event planners. 
              It is our job to help employees feel appreciated for their hard work and promote a unified experience that keeps the focus on what matters – your company.
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <h2>Our Founders</h2>
          <hr />
          <div className="container flex align-items-center">
            <div className="text-container">
              <p style={{ fontSize: '1.2em', textAlign: 'left' }}>
                At EventHub, our journey is shaped by the collective vision and dedication of our esteemed founders. Together, they bring a wealth of diverse skills,
                unwavering commitment, and a shared passion for creating exceptional event experiences.
                Founder is a label with some amount of prestige. It carries connotations of creativity and innovation, determination, native intelligence, and a sense of fearlessness. 
                Founders create something from nothing. Many entrepreneurship and startup resources talk about founders, but most of them seem to assume that everyone knows what a founder is. In practice, it’s not so obvious.
                Strictly speaking, in business the founders are the people who establish the company—that is,
                they take on the risk and reward of creating something from nothing. Remember, an idea by itself is not a company, though most companies start as an idea. <br/>Some companies start out as one person’s idea and stay that way. More commonly one or two people might have an idea but then recruit a group to help execute the idea (because ideas are worthless without execution).
                The people who recruit that group and get execution going are founders.
                They split the original ownership in some way, 
                and then work to bring in the resources they need to build an enterprise. 
                Everyone who comes in after this initial ownership division is not. Most are employees, 
                though there are all kinds of additional people resources a startup will eventually utilize.
                Everyone who is not a founder either works for, partners with, sells to, buys from, or invests in the founder or founders.

              </p>

              
            </div>
            
          </div>
        </div>
        <br />
        <div className="container" style={{marginBottom:"30px"}}>
        <div className="row justify-content-center">
        <div className="col-md-3 mt-4">
            <Card
              style={{
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                borderRadius: '5px',
                transform: isArpitaHovered ? 'scale(1.02)' : 'scale(1)',
                boxShadow: isArpitaHovered ? '0 0 15px #00B5B8' : 'none',
              }}
              onMouseEnter={() => handleMouseEnter(setIsArpitaHovered)}
              onMouseLeave={() => handleMouseLeave(setIsArpitaHovered)}
            >
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/a/ACg8ocJj3L2PYYgOCoCb8-LTDm1XzRmPoexq7ZdCjDLav-5gRPg=s360-c-no" className="img-fluid" 
                
                />
                <Card.Body>
                    <Card.Title>Arpita Meshram</Card.Title>
                </Card.Body>
            </Card>
        </div>

        <div className="col-6">
            <p style={{ textAlign: 'left', valign: 'right' }}> <br /><br /> <br />
                <b><h3 className="mt-4" style={{ fontSize: '1em', textAlign: 'center' }}><b>Role: Co-Founder and CEO</b> </h3> </b>
                Arpita Meshram, our Co-Founder and CEO, is the driving force behind the company's strategic direction.
                With a background in a relevant field or education, Arpita combines leadership and innovation to steer the company towards excellence.
                we are supporting to everyone
            </p>
        </div>
        </div>

        <div className="row justify-content-center ">
      <div className="col-6">
             <p className="justify-content" style={{ textAlign: 'left', valign: 'left' }}> <br /><br /> <br />
                <b><h3 className="mt-4" style={{ fontSize: '1em', textAlign: 'center' }}><b>Role: Co-Founder and Director of Operations</b></h3> </b>
                Shubham Powar, our Director of Operations, ensures flawless execution in every event. A graduate of educational institution
          Shubham's attention to detail and commitment to operational excellence elevate the quality of our services.we are suporting to everyone
                </p>
             
            </div>

              <div className="col-md-3 mt-4">
               
              <Card
              style={{
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                borderRadius: '5px',
                transform: isShubhamHovered ? 'scale(1.02)' : 'scale(1)',
                boxShadow: isShubhamHovered ? '0 0 15px #00B5B8' : 'none',
              }}
              onMouseEnter={() => handleMouseEnter(setIsShubhamHovered)}
              onMouseLeave={() => handleMouseLeave(setIsShubhamHovered)}
              >
             <Card.Img variant="top" src="https://lh3.googleusercontent.com/a/ACg8ocJTQZn-yCet6EFnNDrLNMhPIG_ht38UwJqO_gkV9m5NxA=s432-c-no" /> 
            <Card.Body>
              <Card.Title>Shubham Pawar</Card.Title>
            </Card.Body>
          </Card>
              </div>
        </div>
        
        <div className="row justify-content-center ">
      <div className="col-md-3 mt-4">
      <Card 
      style={{
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        borderRadius: '5px',
        transform: isKuldeepHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isKuldeepHovered ? '0 0 15px #00B5B8' : 'none',
      }}
      onMouseEnter={() => handleMouseEnter(setIsKuldeepHovered)}
      onMouseLeave={() => handleMouseLeave(setIsKuldeepHovered)}
      >
            <Card.Img variant="top" src="https://lh3.googleusercontent.com/a/ACg8ocJSGXms3LRr81iRjgCtfEfMhiJmaQJbV-jz5t65X_bZQMmGsSXfptMG_2VV2INdk-bXtindwm3uhlyJmxCsPkkwhyM=s360-c-no" className="img-fluid" /> 
            <Card.Body>
              <Card.Title>Kuldeep Bhakumani</Card.Title>
            </Card.Body>
          </Card>
            </div>

              <div className="col-6">
                <p style={{ textAlign: 'left', valign: 'middle' }}> <br /><br /> <br />
                <b><h3 className="mt-4" style={{ fontSize: '1em', textAlign: 'center' }}><b>Role: Co-Founder and Creative Director</b></h3> </b>
                Kuldeep Bhakumani, our Creative Director, infuses artistic flair into every event. With a background in [creative field or education], Kuldeep's creativity knows no bounds. From conceptualization to design, 
          Kuldeep ensures that each event is a captivating experience.we are suporting to everyone
                </p>
              </div>
        </div>

        <div className="row justify-content-center ">
      <div className="col-6">
             <p className="justify-content" style={{ textAlign: 'left', valign: 'middle' }}> <br /><br /> <br />
                <b><h3 className="mt-4" style={{ fontSize: '1em', textAlign: 'center' }}><b>Role: Co-Founder and Marketing Strategist</b></h3> </b>
                Adnan Ahmed, our Marketing Strategist, is the driving force behind promoting our brand and events. Leveraging expertise in [marketing or relevant field], Adnan ensures that our events gain the recognition they deserve,
           contributing to our success in the market.we are suporting to everyone
                </p>
             
            </div>

              <div className="col-md-3 mt-4">
               
            <Card
            style={{
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              borderRadius: '5px',
              transform: isAdnanHovered ? 'scale(1.02)' : 'scale(1)',
              boxShadow: isAdnanHovered ? '0 0 15px #00B5B8' : 'none',
            }}
            onMouseEnter={() => handleMouseEnter(setIsAdnanHovered)}
            onMouseLeave={() => handleMouseLeave(setIsAdnanHovered)}
            >
              <Card.Img variant="top" src="https://lh3.googleusercontent.com/a/ACg8ocIUz0LiurX4FlntCI6h8mv7q8p9ElWsNoVbaCfpi9vQsPZQT8s69VEN84Dr9-e4hTNh4XZCxWBDZ9q2nti6nlqmIQ=s288-c-no" className="img-fluid" />
                <Card.Body>
                  <Card.Title>Adnan Ahamad</Card.Title>
                </Card.Body>
          </Card>
              </div>
        </div>   
        
        <div className="row justify-content-center ">
      <div className="col-md-3 mt-4">
      <Card
      style={{
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        borderRadius: '5px',
        transform: isChaitanyaHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isChaitanyaHovered ? '0 0 15px #00B5B8' : 'none',
      }}
      onMouseEnter={() => handleMouseEnter(setIsChaitanyaHovered)}
      onMouseLeave={() => handleMouseLeave(setIsChaitanyaHovered)}
      >
         <Card.Img variant="top" src="https://lh3.googleusercontent.com/a/ACg8ocJ-Yq_1ZbaAfpweVlvKK6CbvbWk1qBbm3xlItnz8cAVg_o=s288-c-no" className="img-fluid" />
            <Card.Body>
              <Card.Title>Chaitanya Mirage</Card.Title>
            </Card.Body>
          </Card>
            </div>

              <div className="col-6">
                <p style={{ textAlign: 'left', valign: 'middle' }}> <br /><br /> <br />
                <b><h3 className="mt-4" style={{ fontSize: '1em', textAlign: 'center' }}><b>Role: Co-Founder and Technology Advisor</b></h3> </b>
                Chaitanya Mirage, our Technology Advisor, brings innovation to the forefront of our events. Holding a degree in [technology-related field],
           Chaitanya ensures that our events seamlessly integrate technology, 
          providing a modern and engaging experience. we are suporting to everyone
                </p>
              </div>
        </div>
        </div>

        <br />
        <FooterComp />
      </div>
    </>
  );
}
