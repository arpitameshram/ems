import React, { useState } from "react";
import axios from "axios";
import { Card, Button, CardTitle, Row, Col } from "react-bootstrap";
import UserSidebar from "./User/UserSidebar";

export function RazorPay() {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [amount, setAmount] = useState("0");

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      const amountValue = parseFloat(amount);
      if (isNaN(amountValue) || amountValue <= 0) {
        alert("Please enter a valid amount.");
        return;
      }

      // Creating a new order
      const result = await axios.post("http://localhost:9093/api/createOrder", {
        amount: amountValue,
      });

      if (!result || !result.data || !result.data.id) {
        alert("Failed to create order. Please try again later.");
        return;
      }

      const { id: order_id, currency } = result.data;

      const options = {
        key: "rzp_test_s70V1ljcHiVc2G", // Your Razorpay key
        amount: (amountValue * 100).toString(), // Converting to paisa
        currency: currency,
        name: "EventHUB",
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
          // Handle payment success
          alert(
            "Payment successful! Payment ID: " + response.razorpay_payment_id
          );
        },
        prefill: {
          name: "Arpita Meshram",
          email: "arpitameshram25@gmail.com",
          contact: "7389304143",
        },
        notes: {
          address: "EventHUB",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      alert("Error creating order. Please try again later.");
      console.error(error);
    }
  }
  
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div style={{ display: "flex", margin: 0, padding: 0 }}>
      {isSidebarVisible && <UserSidebar />}

        <div id="content" style={{ padding: "20px", flexGrow: 1 }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-info"
                style={{ width: "20%" }}
                onClick={handleToggleSidebar}
              >
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
              <div>
                <h3 className="text-info">BOOK YOUR EVENTS</h3>
              </div>
              <div>
                <p>
                  Welcome{" "}
                  {/* {session.getAttribute('User_gender').equals('male') ? 'Mr.' : 'Miss.'}{' '} */}
                  <span className="font-weight-bold text-info"></span>
                </p>
              </div>
            </div>
          </nav>
          <Col className="">
          <Card className="mt-2 border rounded-lg shadow-lg">
            <CardTitle className="mt-4">Payment</CardTitle>
            <Card.Body>
              <select
                className="form-control mb-3"
                value={selectedHotel}
                onChange={(e) => {
                  setSelectedHotel(e.target.value);
                  // Set amount based on selected hotel
                  switch (e.target.value) {
                    case "hotel1":
                      setAmount(20000);
                      break;
                    case "hotel2":
                      setAmount(15000);
                      break;
                    case "hotel3":
                      setAmount(28000);
                      break;
                    case "hotel4":
                      setAmount(19000);
                      break;
                    case "hotel5":
                      setAmount(10000);
                      break;
                    default:
                      setAmount(0);
                  }
                }}
              >
                <option value="" disabled>
                  Select a hotel
                </option>
                <option value="hotel1">Taj Sats</option>
                <option value="hotel2">JW Mariott</option>
                <option value="hotel3">Oriental</option>
                <option value="hotel4">The Oberoi</option>
                <option value="hotel5">Taj Palace</option>
              </select>
              <Button
                variant="success"
                className="w-100"
                onClick={displayRazorpay}
                disabled={!amount}
              >
                Pay
              </Button>
            </Card.Body>
          </Card>
          </Col>
        </div>
      </div>
    </>
  );
}
