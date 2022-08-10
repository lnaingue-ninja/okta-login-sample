import './App.css';


import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        This is the header
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path="/user/login" element={<Login />} />
            <Route path="/profile" element={<Login profile={true} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/user/logout" element={<Logout />} />
          </Routes>
        </Router>
      </header>

    </div >
  );
}

export default App;
