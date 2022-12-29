import './App.css';
import { useState } from 'react';
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Admin from './components/admin/Admin';
import Admision from './components/admin/Admision';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [data, setData] = useState('')

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Register getData={setData}/>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/homepage' element={<Homepage sendData={data}/>} />
          {/* <Route exact path='/admin' element={<Admin />} /> */}
          <Route exact path='/admision' element={<Admision />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
