import axios from 'axios';
import {useState} from 'react';
import NavbarComp from '../NavbarComp/NavbarComp';
import FooterComp from '../FooterComp/FooterComp';
import './Login.css';
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
    
    const [userData, setUserData] = useState({});
    const [responseData, setResponseData] = useState({});
    const [isAdminLoginHovered, setIsAdminLoginHovered] = useState(false);

    const handleMouseEnter = (setImageHover) => {
      setImageHover(true);
    };
  
    // Function to handle mouse leave for each image
    const handleMouseLeave = (setImageHover) => {
      setImageHover(false);
    };

    function handleInput(event) {
        let name = event.target.name;
        let value = event.target.value;
        setUserData(userData => {
            userData[name] = value;
            return userData;
        })        
    }

    function login(event) {
      event.preventDefault();
      console.log(userData);
      let url = `http://localhost:9093/adminlogin`;
      axios.post(url,userData).then((response) => {
          //console.log(response.data);
          setResponseData(response.data);
          if(response.data.status){
              alert("not Done!");
            
          }
          else
              alert(" done!");
              navigate(`/adminhome`)
            
      })
  }

  return (
    <>
    <NavbarComp/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', marginBottom:"30px"}}>
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', maxWidth: '400px', width: '90%', margin: '20px 0',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        borderRadius: '5px',
        transform: isAdminLoginHovered ? 'scale(1.02)' : 'scale(1)',
        boxShadow: isAdminLoginHovered ? '0 0 15px #00B5B8' : 'none',
      }}
      onMouseEnter={() => handleMouseEnter(setIsAdminLoginHovered)}
      onMouseLeave={() => handleMouseLeave(setIsAdminLoginHovered)}
        >
        <h1>{responseData.customerId}</h1>
          <form onSubmit={login}>
            <label>Email:</label>
            <br />
            <input type="email" placeholder='Enter email' name="email" onChange={handleInput} /> <br />
            <label>Password:</label>
            <br />
            <input type="password" placeholder='Enter Password' name="password" onChange={handleInput} /> <br />
             
            <button type="submit" href="/userhome">Login</button>
            <hr />
            <p id='u'>New User? <a href="/register">Register</a></p>
          </form>
        </div>
          
      </div>
      <FooterComp/>
    </>
    );
}