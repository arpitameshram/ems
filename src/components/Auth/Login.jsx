// // import axios from 'axios';
// // import {useState} from 'react';
// // import NavbarComp from '../NavbarComp/NavbarComp';
// // import FooterComp from '../FooterComp/FooterComp';
// // import './Login.css';
// // import { useNavigate } from "react-router-dom";
// // export default function Login() {
// //   const navigate = useNavigate();
// //     const [userData, setUserData] = useState({});
// //     const [responseData, setResponseData] = useState({});

// //     function handleInput(event) {
// //         let name = event.target.name;
// //         let value = event.target.value;
// //         setUserData(userData => {
// //             userData[name] = value;
// //             return userData;
// //         })
// //     }

// //     function login(event) {
// //       event.preventDefault();
// //       console.log(userData);
// //       let url = `http://localhost:9093/login`;
// //       axios.post(url,userData).then((response) => {
// //           //console.log(response.data);
// //           setResponseData(response.data);
// //           if(response.data.status)
// //               alert("not Done!");
// //           else
// //               alert(" done!");
// //               navigate(`/userhome`);
// //       })
// //   }

// //   return (
// //     <>
// //     <NavbarComp/>
// //     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', marginBottom:"30px"}}>
// //         <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', maxWidth: '400px', width: '90%', margin: '20px 0' }}>
// //         <h1>{responseData.customerId}</h1>
// //           <form onSubmit={login}>
// //             <label>Email:</label>
// //             <br />
// //             <input type="email" placeholder='Enter email' name="email" onChange={handleInput} /> <br />
// //             <label>Password:</label>
// //             <br />
// //             <input type="password" placeholder='Enter Password' name="password" onChange={handleInput} /> <br />

// //             <button type="submit" href="/userhome">Login</button>
// //             <hr />
// //             <p id='u'>New User? <a href="/register">Register</a></p>
// //           </form>
// //         </div>

// //       </div>
// //       <FooterComp/>
// //     </>
// //     );
// // }
// import axios from "axios";
// import { useState } from "react";
// import NavbarComp from "../NavbarComp/NavbarComp";
// import FooterComp from "../FooterComp/FooterComp";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const onChange = () =>{}
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({});
//   const [responseData, setResponseData] = useState({});
//   const [errors, setErrors] = useState({});
//   const [isLoginHovered, setIsLoginHovered] = useState(false);

//   const handleMouseEnter = (setImageHover) => {
//     setImageHover(true);
//   };

//   // Function to handle mouse leave for each image
//   const handleMouseLeave = (setImageHover) => {
//     setImageHover(false);
//   };

//   function handleInput(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setUserData((prevUserData) => ({
//       ...prevUserData,
//       [name]: value,
//     }));
//     // Clear previous errors when input changes
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "",
//     }));
//   }

//   function validateForm() {
//     let isValid = true;
//     const errors = {};

//     if (!userData.email || !userData.email.trim()) {
//       errors.email = "Email is required";
//       isValid = false;
//     }

//     if (!userData.password || !userData.password.trim()) {
//       errors.password = "Password is required";
//       isValid = false;
//     }

//     setErrors(errors);
//     return isValid;
//   }

//   function login(event) {
//     event.preventDefault();
//     if (!validateForm()) {
//       return;
//     }

//     axios
//       .post("http://localhost:9093/login", userData)
//       .then((response) => {
//         setResponseData(response.data);
//         if (response.data.status) {
//           alert("Login failed!");
//         } else {
//           alert("Login successful!");
//           navigate("/userhome");
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         // Handle error appropriately, like showing an error message to the user
//       });
//   }

//   return (
//     <>
//       <NavbarComp />
//       <div className="container">
//         <h2>Login</h2>
//         <hr />
//         <br />
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             minHeight: "80vh",
//             marginBottom: "30px",
//           }}
//         >
//           <div
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               padding: "20px",
//               maxWidth: "400px",
//               width: "90%",
//               margin: "20px 0",
//               transition:
//                 "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//               borderRadius: "5px",
//               transform: isLoginHovered ? "scale(1.02)" : "scale(1)",
//               boxShadow: isLoginHovered ? "0 0 15px #00B5B8" : "none",
//             }}
//             onMouseEnter={() => handleMouseEnter(setIsLoginHovered)}
//             onMouseLeave={() => handleMouseLeave(setIsLoginHovered)}
//           >
//             <h1>{responseData.customerId}</h1>
//             <form onSubmit={login}>
//               <label>Email:</label>
//               <br />
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 name="email"
//                 onChange={handleInput}
//               />
//               {errors.email && <span className="error">{errors.email}</span>}
//               <br />

//               <label>Password:</label>
//               <br />
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 name="password"
//                 onChange={handleInput}
//               />
//               {errors.password && (
//                 <span className="error">{errors.password}</span>
//               )}
//               <br />
//               <ReCAPTCHA sitekey="6Lc6pnspAAAAADFWd-PDf1q44BJTHG1pWRRwtFih" onChange={onChange} />
//               <button type="submit">Login</button>
//               <hr />
//               <p id="u">
//                 New User? <a href="/register">Register</a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>

//       <FooterComp />
//     </>
//   );
// }
// import axios from 'axios';
// import {useState} from 'react';
// import NavbarComp from '../NavbarComp/NavbarComp';
// import FooterComp from '../FooterComp/FooterComp';
// import './Login.css';
// import { useNavigate } from "react-router-dom";
// export default function Login() {
//   const navigate = useNavigate();
//     const [userData, setUserData] = useState({});
//     const [responseData, setResponseData] = useState({});

//     function handleInput(event) {
//         let name = event.target.name;
//         let value = event.target.value;
//         setUserData(userData => {
//             userData[name] = value;
//             return userData;
//         })
//     }

//     function login(event) {
//       event.preventDefault();
//       console.log(userData);
//       let url = http://localhost:9093/login;
//       axios.post(url,userData).then((response) => {
//           //console.log(response.data);
//           setResponseData(response.data);
//           if(response.data.status)
//               alert("not Done!");
//           else
//               alert(" done!");
//               navigate(/userhome);
//       })
//   }

//   return (
//     <>
//     <NavbarComp/>
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', marginBottom:"30px"}}>
//         <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', maxWidth: '400px', width: '90%', margin: '20px 0' }}>
//         <h1>{responseData.customerId}</h1>
//           <form onSubmit={login}>
//             <label>Email:</label>
//             <br />
//             <input type="email" placeholder='Enter email' name="email" onChange={handleInput} /> <br />
//             <label>Password:</label>
//             <br />
//             <input type="password" placeholder='Enter Password' name="password" onChange={handleInput} /> <br />

//             <button type="submit" href="/userhome">Login</button>
//             <hr />
//             <p id='u'>New User? <a href="/register">Register</a></p>
//           </form>
//         </div>

//       </div>
//       <FooterComp/>
//     </>
//     );
// }
import axios from "axios";
import { useState } from "react";
import NavbarComp from "../NavbarComp/NavbarComp";
import FooterComp from "../FooterComp/FooterComp";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [responseData, setResponseData] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const onChange = () => {};

  const handleMouseEnter = (setImageHover) => {
    setImageHover(true);
  };

  // Function to handle mouse leave for each image
  const handleMouseLeave = (setImageHover) => {
    setImageHover(false);
  };

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    // Clear previous errors when input changes
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  function validateForm() {
    let isValid = true;
    const errors = {};

    if (!userData.email || !userData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!userData.password || !userData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  }

  function login(event) {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    axios
      .post("http://localhost:9093/login", userData)
      .then((response) => {
        sessionStorage.setItem("id", response.data.id);
        localStorage.setItem("id", response.data.id);

        const id = sessionStorage.getItem("id");

        setResponseData(response.data);
        if (!response.data.status) {
          alert("Login failed!");
        } else {
          alert("Login successful!");
          navigate("/userhome");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error appropriately, like showing an error message to the user
      });
  }

  return (
    <>
      <NavbarComp />
      <div className="container">
        <h2>Login</h2>
        <hr />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              maxWidth: "400px",
              width: "90%",
              margin: "20px 0",
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
              borderRadius: "5px",
              transform: isLoginHovered ? "scale(1.02)" : "scale(1)",
              boxShadow: isLoginHovered ? "0 0 15px #00B5B8" : "none",
            }}
            onMouseEnter={() => handleMouseEnter(setIsLoginHovered)}
            onMouseLeave={() => handleMouseLeave(setIsLoginHovered)}
          >
            <h1>{responseData.customerId}</h1>
            <form onSubmit={login}>
              <label>Email:</label>
              <br />
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleInput}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <br />

              <label>Password:</label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
              <br />
              <ReCAPTCHA
                sitekey="6LeNo3spAAAAANIsu1xrmETdRk9MwC2o_kB0wPlG"
                onChange={onChange}
              />

              <button type="submit">Login</button>
              <hr />
              <p id="u">
                New User? <a href="/register">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <FooterComp />
    </>
  );
}
