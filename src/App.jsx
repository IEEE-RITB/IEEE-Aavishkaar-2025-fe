import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import Events from './pages/Events';
import Schedule from './pages/Schedule';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NebulaBackground from './components/NebulaBackground';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-void text-white">
        <ParticleBackground />
        <NebulaBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
