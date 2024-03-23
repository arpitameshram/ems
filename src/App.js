import "./App.css";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminBookingDetails from "./components/Admin/AdminBookingDetails";
import Dashboard from "./components/User/Dashboard";
import NewBooking from "./components/User/NewBooking";
import Services from "./components/User/Services";
import AdminUserDetails from "./components/Admin/AdminUserDetails";
import AboutUs from "./components/AboutUS/AboutUs";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Routes, Route } from "react-router-dom";
import UserBookingDetails from "./components/User/UserBookingDetails";
import Caterings from "./components/User/Caterings";
import AdminLogin from "./components/Admin/AdminLogin";
import CustomerStories from "./components/CustomerComp/CustomerStories";
import { RazorPay } from "./components/RazorPay";
import UserUpdate from "./components/Auth/UserUpdate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/adminhome" element={<AdminDashboard />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
        <Route path="/adminuserdetails" element={<AdminUserDetails />}></Route>

        <Route
          path="/adminbookingdetails"
          element={<AdminBookingDetails />}
        ></Route>
        <Route path="/userhome" element={<Dashboard />}></Route>
        <Route path="/usernewbooking" element={<NewBooking />}></Route>
        <Route path="/userhotels&events" element={<Services />}></Route>
        <Route path="/Caterings" element={<Caterings />}></Route>
        <Route path="/customerstories" element={<CustomerStories />}></Route>
        <Route
          path="/userbookingdetails"
          element={<UserBookingDetails />}
        ></Route>

        <Route path="/RazorPay" element={<RazorPay />}></Route>
        <Route path="/UserUpdate" element={<UserUpdate />}></Route>
      </Routes>
    </>
  );
}

export default App;
