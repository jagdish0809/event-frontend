import './App.css';
import { useState } from 'react';
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [ruser, setRegisterUser] = useState({})
  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Register setRuser={setRegisterUser} />} />
          <Route exact path='/login' element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path='/homepage' element={<Homepage/>} />
          {/* {user && user._id ?
            <Route exact path='/homepage' element={<Homepage />} /> :
            <Route exact path='/' element={<Register setRuser={setRegisterUser} />} />} */}
          {/* <Route exact path='/homepage' element={<Homepage />} /> */}
          {/* {ruser && ruser._id ? 
          <Route exact path='/homepage' element={<Homepage />} /> : 
          <Route exact path='/login' element={<Login setLoginUser={setLoginUser} />} />} */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
