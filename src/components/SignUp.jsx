import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../styles/SignUp.css";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="signup-container">
      <div className="form-section">
        <h1>Sign Up</h1>
        <p>Join us and start your journey!</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group password-group">
            <input type={passwordVisible ? "text" : "password"} placeholder="Password" required />
            <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </button>
          </div>
          <div className="input-group password-group">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <button type="button" className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
              <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
            </button>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
      <div className="image-section"></div>
    </div>
  );
};

export default SignUp;