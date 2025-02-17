import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import './../styles/Students.css';

const Dashboard = () => {
  const [activePage, setActivePage] = useState('profile'); // Manage which section is displayed

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return (
          <div className="content">
            <div className="profile-details">
            <h1>Hello, John Doe</h1>
            </div>
          <div className="profile-details">
             <h2>Courses Registered</h2>
                 <p><strong>5</strong> </p>
          </div>
          <div className="profile-details">
              <h2><strong>Course Progress</strong></h2>
              <ul>
                <li>React Basics: 80%</li>
                <li>JavaScript Advanced: 50%</li>
                <li>UI/UX Design: 100%</li>
                <li>Data Structures: 70%</li>
                <li>Python for Beginners: 90%</li>
              </ul>
          </div>
          <div className="profile-details">
            <FontAwesomeIcon icon={faPlay} size="5x" color='#fff' />
          </div>
          </div>
        );
      case 'courses':
        return (
          <div className="content">
            <h2>Courses</h2>
            <p>This section will be updated soon!</p>
          </div>
        );
      default:
        return <div className="content">Welcome to the student dashboard!</div>;
    }
  };

  return (
    <div className="dashboard">
      <nav className="sidebar">
        <h1>Learnify Dashboard</h1>
        <ul>
          <li className={activePage === 'profile' ? 'active' : ''} onClick={() => setActivePage('profile')}>
            Profile
          </li>
          <li className={activePage === 'courses' ? 'active' : ''} onClick={() => setActivePage('courses')}>
            Courses
          </li>
        </ul>
      </nav>
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
};

export default Dashboard;