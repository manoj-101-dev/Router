/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-20">
      <Link to="/all" className="tab tab-bordered">
        All Courses
      </Link>
      <Link to="/cyber-security" className="tab tab-bordered">
        Cyber Security
      </Link>
      <Link to="/data-science" className="tab tab-bordered">
        Data Science
      </Link>
      <Link to="/full-stack" className="tab tab-bordered">
        Full Stack Development
      </Link>
    </div>
  );
}

export default Navigation;
