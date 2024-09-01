import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/401k Pro Logo.png';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between p-4 bg-white shadow-2xl border-b border-solid">
        <div className="flex items-center pl-3 py-3 pt-3">
          <Link to="/" className="text-primary-foreground font-bold text-xl">
            <img src={logo} alt="401k Pro Logo" className="h-8 w-auto mr-2" />
          </Link>
        </div>
        <div className="flex items-center md:hidden pl-3 py-3 pt-3">
          <button
            onClick={toggleMobileMenu}
            className="text-muted-foreground hover:text-foreground hover:font-bold transition duration-200"
          >
            Menu
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <NavLinks />
          <ActionButtons />
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </header>
  );
};

const NavLinks = () => (
  <>
    <Link to="/why-401k-pro" className="py-2 px-2 text-gray-500 font-light hover:text-sky-500 transition duration-300">
      Why 401k Pro
    </Link>
    <div className="dropdown inline-block relative group">
      <button className="py-2 px-2 text-gray-500 font-light hover:text-sky-500 transition duration-300 inline-flex items-center">
        <span className="mr-1">Features</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-64 bg-white shadow-lg rounded-lg group-hover:block bg-whit">
        <DropdownItem to="360-degree-client-view" text="360° Plan View" />
        <DropdownItem to="/automated-reporting" text="Automated Reporting" />
        <DropdownItem to="/compliance-calendar" text="Compliance Calendar" />
        <DropdownItem to="/compliance-chatbots" text="Compliance Chatbots" />
        <DropdownItem to="/plan-comparisons" text="Plan Comparisons" />
        <DropdownItem to="/bank-grade-security" text="SOC2 Certified" />
        <DropdownItem to="/upcoming-ai-features" text="Upcoming AI Features" />
        <DropdownItem to="/summary" text="Summary" isLast />
      </ul>
    </div>
    <Link to="/mission" className="py-2 px-2 text-gray-500 font-light hover:text-sky-500 transition duration-300">
      Mission
    </Link>
    <Link to="/team" className="py-2 px-2 text-gray-500 font-light hover:text-sky-500 transition duration-300">
      Our Team
    </Link>
    <Link to="/careers" className="py-2 px-2 text-gray-500 font-light hover:text-sky-500 transition duration-300">
      Careers
    </Link>
    <Link to="#pricing" className="py-2 px-2 text-gray-500 font-light hover:text-sky-500 transition duration-300">
      Pricing
    </Link>
    <Link to="/contact" className="py-2 px-2 text-gray-500 font-light hover:text-sky-500 transition duration-300">
      Contact
    </Link>
  </>
);

const DropdownItem = ({ to, text, isLast }) => (
  <li>
    <Link
      to={to}
      className={`${isLast ? 'rounded-b' : ''} hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap`}
    >
      {text}
    </Link>
  </li>
);

const ActionButtons = () => (
  <>
    <Link 
      to="/get-started" 
      className="bg-white hover:bg-sky-500 hover:text-white text-sky-500 font-bold py-2 px-4 rounded-full border-2 border-sky-500 transition duration-300"
    >
      Get Started
    </Link>
    <a 
      href="https://app.401k-pro.ai" 
      className="bg-sky-500 hover:bg-white hover:text-sky-500 hover:border-sky-500 text-white font-bold py-2 px-4 rounded-full border-2 border-transparent transition duration-300"
    >
      Log In
    </a>
  </>
);

const MobileMenu = ({ isOpen }) => (
  <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
    <div className="flex flex-col space-y-2 p-4 bg-card">
      <Link to="/mission" className="text-muted-foreground hover:text-foreground hover:font-bold hover:bg-sky-500 transition duration-200">
        Mission
      </Link>
      <Link to="#" className="text-muted-foreground hover:text-foreground hover:font-bold hover:bg-sky-500 transition duration-200 dropdown relative">
        Features
      </Link>
      <Link to="/team" className="text-muted-foreground hover:text-foreground hover:font-bold hover:bg-sky-500 transition duration-200">
        Our Team
      </Link>
      <Link to="/careers" className="text-muted-foreground hover:text-foreground hover:font-bold hover:bg-sky-500 transition duration-200">
        Careers
      </Link>
      <Link to="/pricing" className="text-muted-foreground hover:text-foreground hover:font-bold hover:bg-sky-500 transition duration-200">
        Pricing
      </Link>
      <Link to="/contact" className="text-muted-foreground hover:text-foreground hover:font-bold hover:bg-sky-500 transition duration-200">
        Contact
      </Link>
    </div>
    <div className="flex flex-col space-y-2 p-4 bg-card border-t border-border">
      <Link to="/get-started" className="bg-sky-500 hover:bg-white hover:text-sky-500 text-white font-bold py-2 px-4 rounded-full text-center">
        Get Started
      </Link>
      <a href="https://app.401k-pro.ai" className="bg-sky-500 hover:bg-white hover:text-sky-500 text-white font-bold py-2 px-4 rounded-full text-center">
        Log In
      </a>
    </div>
  </div>
);

export default Header;