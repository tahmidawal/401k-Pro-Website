import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import HeroSection from './components/hero';
import VideoDemoSection from './components/VideoDemoSection';
import Benefits from './components/benefits';
import Pricing from './components/pricing';
// import GraphicSection from './components/graphic';
import FragmentedEcosystemGraphic from './components/FragmentedEcosystemGraphic';
import ContactPage from './components/contact';
import ContactCard from './components/ContactCard';
import Why401kProPage from './components/Why401kProPage';
import { Frame } from 'lucide-react';
import MissionStatement from './components/MissionStatement';
import ThreeSixtyPlanView from './components/features/ThreeSixtyPlanView';
import WhatDrivesUs from './components/WhatDrivesUs';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <VideoDemoSection />
              <Benefits />
              <Pricing />
              <MissionStatement />
              <FragmentedEcosystemGraphic />
              <WhatDrivesUs />
            </>
          } />
          <Route path="/why-401k-pro" element={<Why401kProPage />} />
          <Route path="/360-degree-client-view" element={<ThreeSixtyPlanView />} />
        </Routes>
        {/* <ContactCard
          title="Get Started"
          subtitle="Sign up for a free trial today"
          buttonText="Get Started"
          linkText="Already have an account? "
        /> */}
        
      </div>
    </Router>
  );
}

export default App;