import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faUser, faCog, faSignOutAlt, faComments, faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="profile">
        <FontAwesomeIcon icon={faUser} size="3x"/>
        <div className="profile-text">
          <h4>Clinton Okechukwu</h4>
          <p>clintonokechukwu@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
