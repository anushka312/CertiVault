import React from "react";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import SignUpPage from "./Registration/SignUpPage";
import './App.css';  // Make sure the path to your CSS is correct


const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to CertiVault</h1>
      </div>
      <div className="app">
       
        <Link to="/signup">
          <button className="signup-button">SIGN UP</button>
        </Link>

        
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
