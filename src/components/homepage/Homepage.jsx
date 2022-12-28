import React from "react";
import DummyQR from "../../assests/dummy-QR.jpg";
import "./Homepage.css";
import logo from "../../assests/360-logo.png";

const Homepage = () => {
  return (
    <div className="homepage">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="h-text"> Hello Jagdish</h1>
      <img src={DummyQR} alt="QR" className="app__homepage-qr" />
      <h2 className="p-text">Registered Successfully</h2>
      <div className="button">Download QR</div>
    </div>
  );
};

export default Homepage;
