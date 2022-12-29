import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import logo from "../../assests/360-logo.png";
import { useNavigate } from "react-router-dom";
// import QRCode from "qrcode";

const Register = (props) => {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState('');

  const [user, setUser] = useState({
    name: "",
    email: "",
    company: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //post to backend
  const register = () => {
    const { name, email, company, city } = user;
    if (name && email && company && city) {
      axios.post("https://event-backend.cyclic.app/register", user).then((res) => {
        if (res.data.message === "User already registered") {
          alert(res.data.message);
          navigate("/login");
        } else {
          props.getData(user)
          navigate("/homepage");
        }
      });
    } else {
      alert("Invalid Input");
    }

    //qr generate
    // try{
    //     const response = await QRCode.toDataURL('test qrcode generation');
    //     console.log(response)
    // }catch(error){
    //   console.log(error);
    // }
  };

  return (
    <div className="register">
      <img src={logo} alt="logo" className="logo" />
      <h2>Registeration</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="company"
        value={user.company}
        placeholder="Your Company Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        value={user.city}
        placeholder="Your City"
        onChange={handleChange}
      />
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <p className="p-text" onClick={() => navigate("/login")}>
        Already Registered?
      </p>
      {/* <img src={imgUrl} alt="QR code" /> */}
    </div>
  );
};

export default Register;
