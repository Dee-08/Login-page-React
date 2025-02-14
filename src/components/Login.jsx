import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "../styles/Login.css";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="form-section">
        <h1>Log in</h1>
        <p>Welcome back!</p>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group password-group">
            <input type={passwordVisible ? "text" : "password"} placeholder="Password" required />
            <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </button>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <Link to="#" className="forgot-password">Forgot your Password?</Link>
        <p>
          I don’t have an account <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
        <div className="social-login">
          <p>OR</p>
          <div className="social-buttons">
            <button className="social-button facebook"><FontAwesomeIcon icon={faFacebookF} size="2x"/></button>
            <button className="social-button google"><FontAwesomeIcon icon={faGoogle} size="2x"/></button>
          </div>
        </div>
      </div>
      <div className="image-section"></div>
    </div>
  );
};

export default Login;
