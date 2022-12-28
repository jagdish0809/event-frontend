import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import logo from "../../assests/360-logo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

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
  const register = async () => {
    const { name, email, company, city } = user;
    if (name && email && company && city) {
      axios.post("http://localhost:9002/register", user)
        .then(res => alert(res.data.message));
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <div className="register">
      <img src={logo} alt="logo" className="logo" />
      <h2>Register</h2>
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
      <div className="button" onClick={()=> navigate('./login')}>Login</div>
    </div>
  );
};

export default Register;
