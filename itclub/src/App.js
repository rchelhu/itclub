import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import AboutPage from './components/AboutPage';
import DonatePage from './components/DonatePage';
import VolunteerPage from './components/VolunteerPage';
import EventsPage from './components/EventsPage';
import RepairsPage from './components/RepairsPage';
import FaqPage from './components/FaqPage';
import GalleryPage from './components/GalleryPage';
import NavBar from './NavBar'; 

function App() {
  return (
    <Router>
      <NavBar /> {/* This line of code includes the NavBar on every page */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/repairs" element={<RepairsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;