import axios from "axios";
import { useState, useEffect } from "react";
import NavbarComp from "../NavbarComp/NavbarComp";
import FooterComp from "../FooterComp/FooterComp";
import { useNavigate } from "react-router-dom";

export default function UserUpdate() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    city: "",
    phoneNo: "",
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: null,
    city: null,
    phoneNo: null,
    email: null,
    password: null,
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    try {
      const userId = sessionStorage.getItem("id");
      const response = await axios.get(`http://localhost:9093/user/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      // Handle error
    }
  }

  async function updateUser(event) {
    event.preventDefault();

    try {
      const hasErrors = Object.values(validationErrors).some(
        (error) => error !== null
      );
      if (hasErrors) {
        alert("Please fix validation errors before submitting the form.");
        return;
      }

      const userId = sessionStorage.getItem("id");
      const response = await axios.put(
        `http://localhost:9093/userupdate/${userId}`,
        userData
      );

      // Check if the response status is in the 2xx range for success
      if (response.status >= 200 && response.status < 300) {
        alert("User updated successfully!");
        navigate(`/login`);
      } else {
        alert("Failed to update user!");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error
    }
  }

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    let error = null;

    switch (name) {
      case "name":
        error = value.trim() === "" ? "Name is required" : null;
        if (error === null && !/^[a-zA-Z ]+$/.test(value.trim())) {
          error = "Name must contain only alphabets and spaces";
        }
        break;
      case "city":
        error = value.trim() === "" ? "City is required" : null;
        if (error === null && !/^[a-zA-Z ]+$/.test(value.trim())) {
          error = "City must contain only alphabets and spaces";
        }
        break;
      case "phoneNo":
        error = value.trim() === "" ? "Phone number is required" : null;
        if (error === null && !/^[7-9]\d{9}$/.test(value.trim())) {
          error = "Phone number must start with 7, 8, or 9 and be 10 digits";
        }
        break;
      case "email":
        error = value.trim() === "" ? "Email is required" : null;
        if (
          error === null &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
        ) {
          error = "Invalid email format";
        }
        break;
      case "password":
        error = value.trim() === "" ? "Password is required" : null;
        if (
          error === null &&
          !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            value.trim()
          )
        ) {
          error =
            "Password must be at least 8 characters long and contain at least one letter, one number, and one special character";
        }
        break;
      default:
        break;
    }

    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  }

  return (
    <>
      <NavbarComp />
      <div className="container">
        <h2>Update Profile</h2>
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
            }}
          >
            <form onSubmit={updateUser}>
              Name:{" "}
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                value={userData.name}
                onChange={handleInput}
              />
              {validationErrors.name && (
                <span style={{ color: "red" }}>{validationErrors.name}</span>
              )}
              <br />
              City:{" "}
              <input
                type="text"
                placeholder="Enter city"
                name="city"
                value={userData.city}
                onChange={handleInput}
              />
              {validationErrors.city && (
                <span style={{ color: "red" }}>{validationErrors.city}</span>
              )}
              <br />
              PhoneNo:{" "}
              <input
                type="number"
                placeholder="Enter phone no"
                name="phoneNo"
                value={userData.phoneNo}
                onChange={handleInput}
              />
              {validationErrors.phoneNo && (
                <span style={{ color: "red" }}>{validationErrors.phoneNo}</span>
              )}
              <br />
              Email:{" "}
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={userData.email}
                onChange={handleInput}
              />
              {validationErrors.email && (
                <span style={{ color: "red" }}>{validationErrors.email}</span>
              )}
              <br />
              Password:{" "}
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={userData.password}
                onChange={handleInput}
              />
              {validationErrors.password && (
                <span style={{ color: "red" }}>
                  {validationErrors.password}
                </span>
              )}
              <br />
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
      <FooterComp />
    </>
  );
}
