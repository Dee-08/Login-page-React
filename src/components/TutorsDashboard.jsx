import React from "react";
import "../styles/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="tutors-dashboard">
      <h1>Dashboard</h1>
      <p>Welcome Back, Clinton</p>

      <div className="stats">
        <div className="card">
          <h3>Course 1</h3>
          <p>5 enrolled</p>
        </div>
        <div className="card">
          <h3>Course 2</h3>
          <p>5 enrolled</p>
        </div>
        <div className="card">
          <h3>Course 3</h3>
          <p>5 enrolled</p>
        </div>
      </div>

      <h2>Recent Messages</h2>
      <div className="messages">
        <div className="message">
          <FontAwesomeIcon icon={faUser} />
          <p><strong>Ralph Edwards:</strong> How can I understand better?</p>
          <span className="status answered">Answered</span>
        </div>
        <div className="message">
          <FontAwesomeIcon icon={faUser} />
          <p><strong>Leslie Alexander:</strong> There are some things that are not clear to me</p>
          <span className="status pending">Pending</span>
        </div>
        <div className="message">
          <FontAwesomeIcon icon={faUser} />
          <p><strong>Brooklyn Simmons:</strong>When is the next course upload?</p>
          <span className="status pending">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
