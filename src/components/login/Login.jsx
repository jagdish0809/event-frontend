import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import logo from "../../assests/360-logo.png";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email } = user;
    if (email) {
      axios.post("http://localhost:9002/login", user).then((res) => {
        alert(res.data.message);
        props.setLoginUser(res.data.user);
      });
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="logo" className="logo" />
      <h2 className="h-text">Login</h2>
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Enter Your Email"
        onChange={handleChange}
      />
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/")}>
        Register
      </div>
    </div>
  );
};

export default Login;
