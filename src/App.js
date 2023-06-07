import './App.css';
import Home from './components/Home'
import SingleDetail from './components/SingleDetail'
import Add_Details from './components/Add_Details'
import Hospital_Details from './components/Hospital_details'
import Navbar from './components/Navbar'
import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthState from './context/auth/AuthState';


function App() {
  return (
    <Router>
      <AuthState>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/*" element={
                <>
                  <Navbar />
                  <Routes>
                    <Route path="/single_detail" element={<SingleDetail />} />
                    <Route path="/add_details" element={<Add_Details />} />
                    <Route path="/Hospital_details" element={<Hospital_Details />} />
                  </Routes>
                </>
              }
            />
          </Routes>
        </div>
      </AuthState>
    </Router>
  );
}



export default App

