import React, { useState } from "react";
import QrReader from "react-weblineindia-qrcode-scanner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Admin = () => {
  const [result, setResult] = useState(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [city, setCity] = useState('')
  const [isScanned, setIsScanned] = useState(false);

  const handleError = (err) => {
    console.log(err, "Error");
  };

  const handleScan = (data) => {
    if (!isScanned) {
      if (data) {
        const userData = JSON.parse(data);
        axios
          .post("http://localhost:9002/verify-user-entry", {
            email: userData.email,
          })
          .then((data) => {
            setIsScanned(true);
            if (data.data.data === "visited") {
              setResult(data.data.message);
              setName(JSON.stringify(userData.name))
              setEmail(JSON.stringify(userData.email));
              setCompany(JSON.stringify(userData.company));
              setCity(JSON.stringify(userData.city));
              toast(data.data.message);
            } else if (data.data.data === "Error") {
              toast(data.data.message);
            } else {
              setResult("User Verified")
              toast("User Verified");
            }
          });
      }
    }
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <QrReader
        delay={300}
        style={{ height: 500, widht: 0 }}
        onError={handleError}
        onScan={handleScan}
      />
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>Company: {company}</h1>
      <h1>City: {city}</h1>
      <h1>Status: {result}</h1>

      {console.log(result)}
    </div>
  );
};

export default Admin;
