import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import Hero from './components/features/Hero';
import About from './components/features/About';
import Manifesto from './components/features/Manifesto';
import Events from './components/features/Events';
import CoreTeam from './components/features/CoreTeam';
import Founders from './components/features/Founders';
import TeamPage from './pages/TeamPage';
import SplashScreen from './components/layout/SplashScreen';
import InteractiveBackground from './components/layout/InteractiveBackground';
import CursorShadow from './components/layout/CursorShadow';
import FloatingParticles from './components/layout/FloatingParticles';

// Page components
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Manifesto />
    <CoreTeam
      title="Faculty Coordinators"
      subtitle="Academic Mentors"
      tenureFilter="faculty"
      gridLayout={true}
      compact={true}
    />
    <CoreTeam
      title="MEET OUR CORE TEAM"
      subtitle="The 2025-2026 Leadership"
      tenureFilter="current"
      showViewAll={true}
    />
    <Events />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-transparent min-h-screen text-text font-sans selection:bg-accent selection:text-bg">
      <AnimatePresence>
        {loading && <SplashScreen finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <InteractiveBackground />
          <FloatingParticles />
          <CursorShadow />
          <main>
            <Routes>
              <Route path="/" element={<><Navbar /><HomePage /><Footer /></>} />
              <Route path="/team" element={<TeamPage />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
