import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import logo from '../img/401k Pro Logo.png';
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';
import WhiteButtonWithArrow from './buttons/WhiteButtonWithArrow';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFeatureDropdownOpen, setIsMobileFeatureDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileFeatureDropdown = () => setIsMobileFeatureDropdownOpen(!isMobileFeatureDropdownOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsMobileFeatureDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-roboto">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="401k Pro Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <DesktopNavLinks handleNavigation={handleNavigation} />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ActionButtons isMobile={false} handleNavigation={handleNavigation} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-500 hover:text-sky-500 transition duration-200"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/why-401k-pro" onClick={() => handleNavigation('/why-401k-pro')} className="text-gray-600 hover:text-sky-500 transition duration-200">
              Why 401k Pro
            </Link>
            <div>
              <button
                onClick={toggleMobileFeatureDropdown}
                className="text-gray-600 hover:text-sky-500 transition duration-200 flex items-center justify-between w-full"
              >
                <span>Features</span>
                {isMobileFeatureDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isMobileFeatureDropdownOpen && <FeatureDropdown handleNavigation={handleNavigation} />}
            </div>
            <Link to="/#pricing" onClick={() => handleNavigation('/#pricing')} className="text-gray-600 hover:text-sky-500 transition duration-200">
              Pricing
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <ActionButtons isMobile={true} handleNavigation={handleNavigation} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const DesktopNavLinks = ({ handleNavigation }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId = null;

  const openDropdown = () => {
    clearTimeout(timeoutId);
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutId = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // 300ms delay before closing
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <button onClick={() => handleNavigation('/why-401k-pro')} className="text-gray-600 hover:text-sky-500 transition duration-200">
        Why 401k Pro
      </button>
      <div 
        className="relative"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        ref={dropdownRef}
      >
        <button 
          className="text-gray-600 hover:text-sky-500 transition duration-200 flex items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>Features</span>
          {isDropdownOpen ? <ChevronUp size={20} className="ml-1" /> : <ChevronDown size={20} className="ml-1" />}
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg">
            <FeatureDropdown handleNavigation={handleNavigation} />
          </div>
        )}
      </div>
      <button onClick={() => handleNavigation('/#pricing')} className="text-gray-600 hover:text-sky-500 transition duration-200">
        Pricing
      </button>
    </>
  );
};

const FeatureDropdown = ({ handleNavigation }) => (
  <div className="py-2">
    <DropdownItem to="/360-degree-client-view" text="360° Plan View" handleNavigation={handleNavigation} />
    <DropdownItem to="/automated-reporting" text="Automated Reporting" handleNavigation={handleNavigation} />
    <DropdownItem to="/regulatory-chatbot" text="Regulatory Chatbot" handleNavigation={handleNavigation} />
    <DropdownItem to="/soc2-certified" text="SOC2 Certified Security" handleNavigation={handleNavigation} />
  </div>
);

const DropdownItem = ({ to, text, handleNavigation }) => (
  <button
    onClick={() => handleNavigation(to)}
    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-sky-500 transition duration-200"
  >
    {text}
  </button>
);

const ActionButtons = ({ isMobile, handleNavigation }) => (
  <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'flex-row space-x-4'} w-full`}>
    <GradientButtonWithArrow
      buttonText="Book Demo"
      onClick={() => handleNavigation('/book-a-demo')}
      showArrow={false}
      fullWidth={isMobile}
    />
    <WhiteButtonWithArrow
      buttonText="Log In"
      onClick={() => window.location.href = 'https://app.401k-pro.ai'}
      showArrow={false}
      fullWidth={isMobile}
    />
  </div>
);

export default Header;