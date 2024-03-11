import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  return (
    <div className="homePage">
      <header className="header">
      </header>
      <main className="mainContent">
        <h1 style={{ lineHeight: "1.2" }}>Welcome to <br /> IT Club</h1>
        <p>A student-led nonprofit aimed at reducing e-waste and providing computers to students in need, enhancing educational access.</p>
        <button className="learnMoreBtn">Learn More</button>
      </main>
      <div className="homepageLogo"></div>
    </div>
  );
}

export default HomePage;