import React, { useState, useEffect } from "react";
import DummyQR from "../../assests/dummy-QR.jpg";
import "./Homepage.css";
import logo from "../../assests/360-logo.png";
import axios from "axios";
import QRCode from "qrcode";

const Homepage = (props) => {
  const [imgUrl, setImgUrl] = useState();
  console.log("Home Email: ", props.sendData);

  QRCode.toDataURL(`Name: ${props.sendData.name} \n Email: ${props.sendData.email} \n Company: ${props.sendData.company} \n City: ${props.sendData.city}`)
    .then((res) => setImgUrl(res))
    .catch((err) => console.log(err));

  // try{
  //   const response = QRCode.toDataURL(props.sendData);

  // }catch(err){
  //   console.log(err);
  // }

  // const userdata = props.sendData.email;
  // console.log("home", userdata)

  // const user = () => {
  //   axios
  //     .get("http://localhost:9002/register")
  //     .then((res) => {
  //       setUsername(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // useEffect(()=>{
  //   user();
  // }, [])

  return (
    <div className="homepage">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="h-text"> Hello Jagdish</h1>
      <img src={imgUrl} alt="QR" className="app__homepage-qr" />
      <h2 className="">Registered Successfully</h2>
      <div className="button">Download QR</div>
    </div>
  );
};

export default Homepage;
