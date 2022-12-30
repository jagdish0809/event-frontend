import React, { useState, useEffect } from "react";
import "./Homepage.css";
import logo from "../../assests/360-logo.png";
import axios from "axios";
import QRCode from "qrcode";

const Homepage = (props) => {
  const [imgUrl, setImgUrl] = useState("");
  const [isMailSent, setIsMailSent] = useState(false);
  console.log("Home Email: ", props.sendData);

  useEffect(() => {
    //sending url to backend
    const data = {
      name: props.sendData.name,
      email: props.sendData.email,
      company: props.sendData.company,
      city: props.sendData.city,
    };
    const qrData = JSON.stringify(data);
    QRCode.toDataURL(qrData)
      .then((res) => setImgUrl(res))
      .catch((err) => console.log(err));
    if (!isMailSent && imgUrl !== "") {
      setIsMailSent(true);
      axios
        .post("http://localhost:9002/homepage", [imgUrl, props.sendData.email])
        .then();
    }
  });

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
      <h1 className="h-text"> Hello {props.sendData.name}</h1>
      <img src={imgUrl} alt="QR" className="app__homepage-qr" />
      <h2 className="">Registered Successfully</h2>
      <a href={imgUrl} download className="button">
        <div>Download QR</div>
      </a>
    </div>
  );
};

export default Homepage;
