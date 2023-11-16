/* eslint-disable no-unused-vars */
// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import DataScience from "./Pages/DataScience";
import Navigation from "./Pages/Navigation";
import AllCourses from "./Pages/AllCourses";
import CyberSecurity from "./Pages/CyberSecurity";
import FullStackDevelopment from "./Pages/FullStackDevelopment";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="data-science" element={<DataScience />} />
        <Route path="all" element={<AllCourses />} />
        <Route path="cyber-security" element={<CyberSecurity />} />
        <Route path="full-stack" element={<FullStackDevelopment />} />
      </Routes>
    </div>
  );
}

export default App;
