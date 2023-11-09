/* eslint-disable no-unused-vars */

import React from "react";
import { useNavigate } from "react-router-dom";

function Workspace() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-4 ">
        <button onClick={() => navigate("/all")} className="tab tab-bordered">
          All Courses
        </button>
        <button
          onClick={() => navigate("/cyber-security")}
          className="tab tab-bordered tab-active "
        >
          Cyber Security
        </button>
        <button
          onClick={() => navigate("/data-science")}
          className="tab tab-bordered"
        >
          Data Science
        </button>
        <button
          onClick={() => navigate("/full-stack")}
          className="tab tab-bordered"
        >
          Full Stack Development
        </button>
      </div>
    </div>
  );
}

export default Workspace;
