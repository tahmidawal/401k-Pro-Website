import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import HeroSection from './components/hero';
import VideoDemoSection from './components/VideoDemoSection';
import Pricing from './components/pricing';
import FragmentedEcosystemGraphic from './components/FragmentedEcosystemGraphic';
import ContactCard from './components/ContactCard';
import Why401kProPage from './components/Why401kProPage';
import MissionStatement from './components/MissionStatement';
import ThreeSixtyDegreePlanView from './components/features/ThreeSixtyDegreePlanView';
import WhatDrivesUs from './components/WhatDrivesUs';
import CompanyFooter from './components/CompanyFooter';
import CareersPage from './components/CareersPage';
import AutomatedReporting from './components/features/AutomatedReporting';
import RegulatoryChatbot from './components/features/RegulatoryChatbot';
import Security from './components/features/Security';
import Testimonials from './components/Testimonials';
import Benefits from './components/benefits';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#pricing') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const HomePage = () => (
  <>
    <HeroSection />
    <VideoDemoSection />
    <Benefits />
    <Pricing />
    <MissionStatement />
    <FragmentedEcosystemGraphic />
    <WhatDrivesUs />
    <Testimonials />

  </>
);

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16"> {/* Add padding-top here */}
          <ScrollToSection />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/why-401k-pro" element={<Why401kProPage />} />
            <Route path="/360-degree-client-view" element={<ThreeSixtyDegreePlanView />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/automated-reporting" element={<AutomatedReporting />} />
            <Route path="/regulatory-chatbot" element={<RegulatoryChatbot />} />
            <Route path="/security" element={<Security />} />
            <Route path="/book-a-demo" element={<ContactCard 
              title="Book a Demo"
              subtitle="Get a personalized demo of 401k Pro"
              buttonText="Book a Demo"
              buttonLink="https://calendly.com/401k-pro/demo"
            />} />
          </Routes>
        </main>
        <CompanyFooter />
      </div>
    </Router>
  );
}

export default App;