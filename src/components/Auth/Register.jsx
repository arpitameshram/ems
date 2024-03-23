import axios from "axios";
import { useState } from "react";
import NavbarComp from "../NavbarComp/NavbarComp";
import FooterComp from "../FooterComp/FooterComp";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  // State to store user data entered in the form
  const [userData, setUserData] = useState({
    name: "",
    city: "",
    phoneNo: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });
  // State to store the response data from the server
  const [responseData, setResponseData] = useState({});
  // State to store validation errors for each form field
  const [validationErrors, setValidationErrors] = useState({
    name: null,
    city: null,
    phoneNo: null,
    email: null,
    password: null,
    dateOfBirth: null,
  });

  const [isRegisterHovered, setIsRegisterHovered] = useState(false);

  const handleMouseEnter = (setImageHover) => {
    setImageHover(true);
  };

  // Function to handle mouse leave for each image
  const handleMouseLeave = (setImageHover) => {
    setImageHover(false);
  };
  // ... (previous code)

  // Function to handle form submission
  async function register(event) {
    event.preventDefault();

    try {
      // Check for validation errors before making the API call
      const hasErrors = Object.values(validationErrors).some(
        (error) => error !== null
      );
      if (hasErrors) {
        alert("Please fix validation errors before submitting the form.");
        return;
      }

      // If no validation errors, make the Axios request to register the user
      let url = `http://localhost:9093/register`;
      const response = await axios.post(url, userData);
      console.log(response.data.id);
      sessionStorage.setItem("id", response.data.id);
      localStorage.setItem("id", response.data.id);

      // Update the response data state with the data received from the server
      setResponseData(response.data);

      // Display success or failure message based on the server response
      if (response.data.status) {
        alert("Done!");
        navigate(`/login`);
      } else {
        alert("Not done!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios errors (e.g., network errors, status codes other than 2xx)
        console.error("Axios Error:", error.response);
        alert(
          "An error occurred while processing your request. Please try again."
        );
      } else {
        // Handle other types of errors
        console.error("Unexpected Error:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  }

  // Function to handle input changes in the form fields
  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    // Validation logic
    let error = null;
    // switch (name) {
    //   case "name":
    //     error = value.trim() === "" ? "Name is required" : null;
    //     break;
    //   case "city":
    //     error = value.trim() === "" ? "City is required" : null;
    //     break;
    //   case "phoneNo":
    //     // Add your phone number validation logic here
    //     error = value.trim() === "" ? "Phone number is required" : null;
    //     break;
    //   case "email":
    //     // Add your email validation logic here
    //     error = value.trim() === "" ? "Email is required" : null;
    //     break;
    //   case "password":
    //     // Add your password validation logic here
    //     error = value.trim() === "" ? "Password is required" : null;
    //     break;
    //   case "dateOfBirth":
    //     // Add your date of birth validation logic here
    //     error = value.trim() === "" ? "Date of Birth is required" : null;
    //     break;
    //   default:
    //     break;
    // }
    switch (name) {
      case "name":
        error = value.trim() === "" ? "Name is required" : null;
        if (!/^[a-zA-Z ]+$/.test(value.trim())) {
          error = "Name must contain only alphabets and spaces";
        }
        break;
      case "city":
        error = value.trim() === "" ? "City is required" : null;
        if (!/^[a-zA-Z ]+$/.test(value.trim())) {
          error = "Name must contain only alphabets and spaces";
        }
        break;
      case "phoneNo":
        error = value.trim() === "" ? "Phone number is required" : null;
        if (!/^\d{10}$/.test(value.trim())) {
          error = "Phone number must be 10 digits";
        }
        break;
      case "email":
        error = value.trim() === "" ? "Email is required" : null;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = "Invalid email format";
        } else if (!/\.com$/.test(value.trim())) {
          error = "Email address must contain '.com'";
        }
        break;
      case "password":
        error = value.trim() === "" ? "Password is required" : null;
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value.trim()
          )
        ) {
          error =
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character";
        }
        break;
      case "dateOfBirth":
        error = value.trim() === "" ? "Date of Birth is required" : null;
        if (value.trim().split("-")[0] > 2000) {
          error = "Year of birth cannot be greater than 2000";
        }
        break;
      default:
        break;
    }

    // Update validationErrors state with the current error for the field
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    // Update userData state with the current value for the field
    setUserData((prevUserData) => {
      prevUserData[name] = value;
      return prevUserData;
    });
  }

  // Function to handle form submission
  function register(event) {
    event.preventDefault();
    console.log(userData);

    // Check for validation errors before making the API call
    const hasErrors = Object.values(validationErrors).some(
      (error) => error !== null
    );
    if (hasErrors) {
      // alert("Please fix validation errors before submitting the form.");
      return;
    }

    // If no validation errors, make the API call to register the user
    let url = `http://localhost:9093/register`;
    axios.post(url, userData).then((response) => {
      // Update the response data state with the data received from the server

      console.log(response.data.id);

      sessionStorage.setItem("id", response.data.id);
      localStorage.setItem("id", response.data.id);

      setResponseData(response.data);
      // Display success or failure message based on the server response
      if (response.data.status) {
        alert("Done!");
        navigate(`/login`);
      } else alert("Not done!");
    });
  }

  return (
    <>
      <NavbarComp />
      <div className="container">
        <h2>Register</h2>
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
              transform: isRegisterHovered ? "scale(1.02)" : "scale(1)",
              boxShadow: isRegisterHovered ? "0 0 15px #00B5B8" : "none",
            }}
            onMouseEnter={() => handleMouseEnter(setIsRegisterHovered)}
            onMouseLeave={() => handleMouseLeave(setIsRegisterHovered)}
          >
            {/* Display customer ID from the response data */}
            <h1>{responseData.customerId}</h1>
            {/* Registration form */}
            <form onSubmit={register}>
              {/* Name input field */}
              Name :{" "}
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleInput}
              />
              {/* Display validation error for the name field */}
              {validationErrors.name && (
                <span style={{ color: "red" }}>{validationErrors.name}</span>
              )}{" "}
              <br />
              {/* City input field */}
              City :{" "}
              <input
                type="text"
                placeholder="Enter city"
                name="city"
                onChange={handleInput}
              />
              {validationErrors.city && (
                <span style={{ color: "red" }}>{validationErrors.city}</span>
              )}{" "}
              <br />
              {/* Phone number input field */}
              PhoneNo :{" "}
              <input
                type="number"
                placeholder="Enter phone no"
                name="phoneNo"
                onChange={handleInput}
              />{" "}
              {validationErrors.phoneNo && (
                <span style={{ color: "red" }}>{validationErrors.phoneNo}</span>
              )}{" "}
              <br />
              {/* Email input field */}
              Email :{" "}
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleInput}
              />
              {validationErrors.email && (
                <span style={{ color: "red" }}>{validationErrors.email}</span>
              )}{" "}
              <br />
              {/* Password input field */}
              Password :{" "}
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={handleInput}
              />
              {validationErrors.password && (
                <span style={{ color: "red" }}>
                  {validationErrors.password}
                </span>
              )}{" "}
              <br />
              {/* Date of Birth input field */}
              Date of Birth :{" "}
              <input type="date" name="dateOfBirth" onChange={handleInput} />
              {validationErrors.dateOfBirth && (
                <span style={{ color: "red" }}>
                  {validationErrors.dateOfBirth}
                </span>
              )}{" "}
              <br />
              {/* Submit button */}
              <button type="submit">Register</button>
              <hr />
              <p id="u">
                Already a member? <a href="/login">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
}
