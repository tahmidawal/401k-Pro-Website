import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X, RefreshCcwDot, FileText, MessageSquare, Shield } from 'lucide-react';
import logo from '../img/401k Pro Logo.png';
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';
import WhiteButtonWithArrow from './buttons/WhiteButtonWithArrow';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileFeatureDropdownOpen, setIsMobileFeatureDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileFeatureDropdown = () => setIsMobileFeatureDropdownOpen(!isMobileFeatureDropdownOpen);

  const handleNavigation = (path) => {
    if (path === '/') {
      // If we're already on the home page, just scroll to top
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // If we're on a different page, navigate to home and then scroll to top
        navigate('/');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      }
    } else if (path.startsWith('/#')) {
      const targetId = path.substring(2); // Remove '/#' from the path
      if (location.pathname === '/') {
        // If we're on the home page, use smooth scroll with offset
        const element = document.getElementById(targetId);
        if (element) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 80; // Increased offset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else {
        // If we're not on the home page, navigate to home with the hash
        navigate(path);
      }
    } else {
      // For other links, use normal navigation and scroll to top
      navigate(path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
    }
    setIsMobileMenuOpen(false);
    setIsMobileFeatureDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-roboto">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <button onClick={() => handleNavigation('/')} className="flex items-center">
          <img src={logo} alt="401k Pro Logo" className="h-8 w-auto" />
        </button>

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
            <Link to="/why-401k-pro" onClick={() => handleNavigation('/why-401k-pro')} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0A5A9C] hover:to-[#39A5F3] transition duration-200">
              Why 401k Pro
            </Link>
            <div>
              <button
                onClick={toggleMobileFeatureDropdown}
                className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0A5A9C] hover:to-[#39A5F3] transition duration-200 flex items-center justify-between w-full"
              >
                <span>Features</span>
                {isMobileFeatureDropdownOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isMobileFeatureDropdownOpen && <FeatureDropdown handleNavigation={handleNavigation} />}
            </div>
            <Link to="/#pricing" onClick={() => handleNavigation('/#pricing')} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0A5A9C] hover:to-[#39A5F3] transition duration-200">
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
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <button onClick={() => handleNavigation('/why-401k-pro')} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0A5A9C] hover:to-[#39A5F3] transition duration-200">
        Why 401k Pro
      </button>
      <div 
        className="relative"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        ref={dropdownRef}
      >
        <button 
          className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0A5A9C] hover:to-[#39A5F3] transition duration-200 flex items-center"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span>Features</span>
          {isDropdownOpen ? <ChevronUp size={20} className="ml-1" /> : <ChevronDown size={20} className="ml-1" />}
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-64 opacity-0 transform -translate-y-2 transition-all duration-200 ease-in-out"
               style={{ opacity: isDropdownOpen ? 1 : 0, transform: isDropdownOpen ? 'translateY(0)' : 'translateY(-10px)' }}>
            <FeatureDropdown handleNavigation={handleNavigation} />
          </div>
        )}
      </div>
      <button onClick={() => handleNavigation('/#pricing')} className="text-gray-600 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0A5A9C] hover:to-[#39A5F3] transition duration-200">
        Pricing
      </button>
    </>
  );
};

const FeatureDropdown = ({ handleNavigation }) => (
  <div className="py-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
    <DropdownItem 
      to="/360-degree-client-view" 
      text="360° Plan View" 
      icon={RefreshCcwDot}
      handleNavigation={handleNavigation} 
    />
    <DropdownItem 
      to="/automated-reporting" 
      text="Automated Reporting" 
      icon={FileText}
      handleNavigation={handleNavigation} 
    />
    <DropdownItem 
      to="/regulatory-chatbot" 
      text="Regulatory Chatbot" 
      icon={MessageSquare}
      handleNavigation={handleNavigation} 
    />
    <DropdownItem 
      to="/security" 
      text="Security" 
      icon={Shield}
      handleNavigation={handleNavigation} 
    />
  </div>
);

const DropdownItem = ({ to, text, icon: Icon, handleNavigation }) => (
  <button
    onClick={() => handleNavigation(to)}
    className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
  >
    <Icon size={18} className="mr-3 text-blue-500" />
    <span className="font-light hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0A5A9C] hover:to-[#39A5F3] transition duration-200">
      {text}
    </span>
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