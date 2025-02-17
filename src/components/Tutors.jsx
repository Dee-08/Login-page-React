import React from "react";
import Sidebar from "./TutorsSidebar";
import Header from "./TutorsHeader"
import Dashboard from "./TutorsDashboard";
import "../styles/Tutors.css"

function Tutors() {
  return (
    <div className="tutors">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default Tutors;