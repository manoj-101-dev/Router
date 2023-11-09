/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Workspace from "./Pages/WorkSpace";
import DataScience from "./Pages/DataScience";
import Navigation from "./Pages/Navigation";
import AllCourses from "./Pages/AllCourses";
import CyberSecurity from "./Pages/CyberSecurity";
import FullStackDevelopment from "./Pages/FullStackDevelopment";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Workspace />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/all" element={<AllCourses />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/full-stack" element={<FullStackDevelopment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
