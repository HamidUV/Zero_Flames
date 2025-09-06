import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HomePage1 from './pages/HomePage1';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import IntroAnimation from './components/IntroAnimation';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true,     // whether animation should happen only once
      offset: 100,    // offset (px) from the original trigger point
    });
  }, []);
  return (
    <Router>
      <Routes>
        {/* Splash Screen */}
        <Route path="/" element={<IntroAnimation />} />

        {/* Main site routes */}
        <Route
          path="/home"
          element={
            <>
              <Header />
              <HomePage1 />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <AboutPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Header />
              <ServicesPage />
              <Footer />
            </>
          }
        />
        {/* <Route
          path="/projects"
          element={
            <>
              <Header />
              <ProjectsPage />
              <Footer />
            </>
          }
        /> */}
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
