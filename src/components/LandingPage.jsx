import React from "react";
import { Link } from "react-router-dom";
import "./../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">Learnify</div>
        <div className="nav-links">
            <Link to="/Students">Student</Link>
            <Link to="/Tutors">Tutors</Link>
            <Link to="/login">Log in</Link>
            <Link to="/signup" className="get-started">
            Sign Up
          </Link>
        </div>
      </nav>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Unlock growth with every course</h1>
          <p>Register, apply for courses, be a learnr, and experience growth.</p>
          <div className="hero-buttons">
            <Link to="/signup" className="button-primary">
              Get started
            </Link>
            <button className="button-secondary">View Courses</button>
          </div>
        </div>
        {/* <div className="hero-image">
          <img src='/images/laptop.jpg' alt="Growth Illustration" />
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;