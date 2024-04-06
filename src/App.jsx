import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";


//Components
import ApplicantSummary from './Component/ApplicantSummary';
import Registration from './Component/Registration';
import Edit from './Component/Edit';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="main-container">
      <Router>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Registration/>} />
            <Route path="/applicant-summary" element={<ApplicantSummary/>} />
            <Route path="/edit" element={<Edit/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
