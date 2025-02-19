import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import HeroSection from './components/hero';
import VideoDemoSection from './components/VideoDemoSection';
import Pricing from './components/pricing';
import FragmentedEcosystemCombined from './components/FragmentedEcosystemCombined';
import Why401kProPage from './components/Why401kProPage';
import ThreeSixtyDegreePlanView from './components/features/ThreeSixtyDegreePlanView';
import WhatDrivesUs from './components/WhatDrivesUs';
import CompanyFooter from './components/CompanyFooter';
import CareersPage from './components/CareersPage';
import AutomatedReporting from './components/features/AutomatedReporting';
import Security from './components/features/Security';
import Testimonials from './components/Testimonials';
import Benefits from './components/benefits';
import PlanDocuments from './components/features/PlanDocuments';
import ParticipantCensus from './components/features/ParticipantCensus';
import AIIntegrations from './components/features/AIIntegrations';
import { HelmetProvider } from 'react-helmet-async';
import ContactCard from './components/ContactCard';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';

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
  <div className="relative overflow-hidden">
    {/* Content */}
    <div className="relative z-10">
      <HeroSection />
      <VideoDemoSection />
      <Benefits />
      <Pricing />
      {/* <MissionStatement /> */}
      <div className="hidden md:block">
        <FragmentedEcosystemCombined />
        <WhatDrivesUs />
      </div>
      <Testimonials />
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* <div className="bg-gradient-to-b from-gray-50 via-white to-blue-50/30"> */}
        <div className="">
          <Header />
          <main className="pt-16"> {/* Keeping only the padding-top */}
            <ScrollToSection />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/why-PlanSync" element={<Why401kProPage />} />
              <Route path="/360-degree-client-view" element={<ThreeSixtyDegreePlanView />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/automated-reporting" element={<AutomatedReporting />} />
              <Route path="/ai-integrations" element={<AIIntegrations />} />
              <Route path="/security" element={<Security />} />
              <Route path="/contact-plansync" element={<ContactCard 
              />} />
              <Route path="/plan-documents" element={<PlanDocuments />} />
              <Route path="/participant-census" element={<ParticipantCensus />} />
              <Route path="/frequently-asked-questions" element={<FrequentlyAskedQuestions />} />
            </Routes>
            <CompanyFooter />
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;