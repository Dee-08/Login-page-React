import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faUser, faCog, faSignOutAlt, faComments, faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">⚪ Circle</h2>
      <ul>
        <Link to="/Tutors"><li><FontAwesomeIcon icon={faChartBar} /> Dashboard</li></Link>
        <li><FontAwesomeIcon icon={faUser} /> Profile</li>
        <li><FontAwesomeIcon icon={faBook} /> Courses</li>
        <li><FontAwesomeIcon icon={faComments} /> Messages</li>
        <Link to="/"><li><FontAwesomeIcon icon={faHome}/> Home</li></Link>
      </ul>
      {/* <button className="logout"><FontAwesomeIcon icon={faSignOutAlt} /> Log out</button> */}
    </div>
  );
};

export default Sidebar;
