/* eslint-disable no-unused-vars */

// AllCourses.js
import React from "react";
import CyberSecurity from "./CyberSecurity";
import DataScience from "./DataScience";
import FullStackDevelopment from "./FullStackDevelopment";
import "../App.css";

const AllCourses = () => {
  return (
    <div className="card-container">
      <div className="card">
        <DataScience />
      </div>
      <div className="card">
        <FullStackDevelopment />
      </div>
      <div className="card">
        <CyberSecurity />
      </div>
    </div>
  );
};

export default AllCourses;
