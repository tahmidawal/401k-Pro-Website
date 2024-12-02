import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp, Menu, X, RefreshCcwDot, FileText, MessageSquare, Shield, UsersRound, Bot, ArrowRight } from 'lucide-react';
import logo from '../img/401k Pro Logo-Photoroom.png';
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';
import WhiteButtonWithArrow from './buttons/WhiteButtonWithArrow';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '/#pricing') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

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
    } else if (path === '/#pricing') {
      // Smooth scroll to the pricing section
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For other links, use normal navigation and scroll to top
      navigate(path);
      // Scroll to the center of the element
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth', offset: 100 }), 100);
    }
    setIsMobileMenuOpen(false);
    setIsMobileFeatureDropdownOpen(false);
  };

  return (
    <>
      <ScrollToSection />
      <header className="fixed top-0 left-0 right-0 z-50 font-roboto">
        {/* Pure white background with subtle shadow */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"></div>
        
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')} 
            className="relative group flex items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-xl blur-lg group-hover:scale-110 transition-transform duration-300"></div>
            <img src={logo} alt="401k Pro Logo-Photoroom" className="relative h-6 sm:h-8 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <DesktopNavLinks handleNavigation={handleNavigation} />
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <ActionButtons isMobile={false} handleNavigation={handleNavigation} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative group p-2 rounded-xl"
            onClick={toggleMobileMenu}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-xl blur-lg group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative">
              {isMobileMenuOpen ? 
                <X size={20} className="text-blue-600" /> : 
                <Menu size={20} className="text-blue-600" />
              }
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[57px] sm:top-[65px] bg-white/95 backdrop-blur-xl z-50 overflow-y-auto">
            <div className="container mx-auto px-4 py-6 space-y-4">
              {/* Mobile Nav Links */}
              <button 
                onClick={() => handleNavigation('/why-401k-pro')} 
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-br hover:from-blue-600/5 hover:to-cyan-400/5 transition-all duration-300"
              >
                <span className="text-gray-700 font-light">Why 401k Pro</span>
              </button>
              
              {/* Features Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={toggleMobileFeatureDropdown}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gradient-to-br hover:from-blue-600/5 hover:to-cyan-400/5 transition-all duration-300"
                >
                  <span className="text-gray-700 font-light">Features</span>
                  {isMobileFeatureDropdownOpen ? 
                    <ChevronUp size={18} className="text-blue-600" /> : 
                    <ChevronDown size={18} className="text-blue-600" />
                  }
                </button>
                
                {isMobileFeatureDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    <FeatureDropdown handleNavigation={handleNavigation} isMobile={true} />
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavigation('/pricing')} 
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-gradient-to-br hover:from-blue-600/5 hover:to-cyan-400/5 transition-all duration-300"
              >
                <span className="text-gray-700 font-light">Pricing</span>
              </button>

              {/* Mobile Action Buttons */}
              <div className="pt-4 px-4">
                <ActionButtons isMobile={true} handleNavigation={handleNavigation} />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
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
      <button 
        onClick={() => handleNavigation('/why-401k-pro')} 
        className="relative group px-4 py-2 rounded-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-400/0 group-hover:from-blue-600/5 group-hover:to-cyan-400/5 rounded-xl transition-all duration-300"></div>
        <span className="relative font-light text-gray-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A5A9C] group-hover:to-[#39A5F3] transition duration-200">
          Why 401k Pro
        </span>
      </button>

      <div 
        className="relative"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        ref={dropdownRef}
      >
        <button 
          className="relative group px-4 py-2 rounded-xl flex items-center space-x-1"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-400/0 group-hover:from-blue-600/5 group-hover:to-cyan-400/5 rounded-xl transition-all duration-300"></div>
          <span className="relative font-light text-gray-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A5A9C] group-hover:to-[#39A5F3] transition duration-200">
            Features
          </span>
          <div className="relative transition-transform duration-200 transform group-hover:translate-y-0.5">
            {isDropdownOpen ? 
              <ChevronUp size={16} className="text-gray-400 group-hover:text-blue-500" /> : 
              <ChevronDown size={16} className="text-gray-400 group-hover:text-blue-500" />
            }
          </div>
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-[320px] opacity-0 transform -translate-y-2 transition-all duration-200 ease-in-out"
               style={{ opacity: isDropdownOpen ? 1 : 0, transform: isDropdownOpen ? 'translateY(0)' : 'translateY(-10px)' }}>
            <FeatureDropdown handleNavigation={handleNavigation} />
          </div>
        )}
      </div>

      <button 
        onClick={() => handleNavigation('/#pricing')} 
        className="relative group px-4 py-2 rounded-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-400/0 group-hover:from-blue-600/5 group-hover:to-cyan-400/5 rounded-xl transition-all duration-300"></div>
        <span className="relative font-light text-gray-600 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A5A9C] group-hover:to-[#39A5F3] transition duration-200">
          Pricing
        </span>
      </button>
    </>
  );
};

const FeatureDropdown = ({ handleNavigation, isMobile = false }) => (
  <div className={`${
    isMobile 
      ? 'bg-transparent space-y-1' 
      : 'py-2 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl overflow-hidden'
  }`}>
    {!isMobile && (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-2xl blur-lg"></div>
    )}
    <div className="relative">
      <DropdownItem 
        to="/360-degree-client-view" 
        text="360° Plan View" 
        description="Complete overview of your client's retirement plan"
        icon={RefreshCcwDot}
        handleNavigation={handleNavigation}
        isMobile={isMobile}
      />
      <DropdownItem 
        to="/plan-documents" 
        text="Plan Documents" 
        description="Centralized document management system"
        icon={FileText}
        handleNavigation={handleNavigation} 
        isMobile={isMobile}
      />
      <DropdownItem 
        to="/automated-reporting" 
        text="Automated Reporting" 
        description="Generate comprehensive reports instantly"
        icon={FileText}
        handleNavigation={handleNavigation} 
        isMobile={isMobile}
      />
      <DropdownItem 
        to="/participant-census" 
        text="Participant Census" 
        description="Streamlined participant data management"
        icon={UsersRound}
        handleNavigation={handleNavigation} 
        isMobile={isMobile}
      />
      <DropdownItem 
        to="/ai-integrations" 
        text="AI Integrations" 
        description="Advanced AI-powered insights and automation"
        icon={Bot}
        handleNavigation={handleNavigation} 
        isMobile={isMobile}
      />
      <DropdownItem 
        to="/security" 
        text="Security" 
        description="Enterprise-grade security protocols"
        icon={Shield}
        handleNavigation={handleNavigation} 
        isMobile={isMobile}
      />
    </div>
  </div>
);

const DropdownItem = ({ to, text, description, icon: Icon, handleNavigation, isMobile = false }) => (
  <button
    onClick={() => handleNavigation(to)}
    className={`group flex items-center w-full ${
      isMobile 
        ? 'px-4 py-2 hover:bg-gradient-to-br hover:from-blue-600/5 hover:to-cyan-400/5' 
        : 'px-4 py-3 hover:bg-gradient-to-br hover:from-blue-600/5 hover:to-cyan-400/5'
    } transition-all duration-300`}
  >
    <div className={`relative ${isMobile ? 'w-8 h-8' : 'w-10 h-10'} flex-shrink-0 flex items-center justify-center mr-3`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-xl blur-lg group-hover:scale-110 transition-transform duration-300"></div>
      <div className="absolute inset-0 bg-white/80 rounded-xl border border-white/20"></div>
      <Icon className={`relative z-10 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-blue-600 group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
    </div>
    <div className="text-left">
      <div className={`font-light ${isMobile ? 'text-sm' : 'text-base'} group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A5A9C] group-hover:to-[#39A5F3] transition duration-200`}>
        {text}
      </div>
      <div className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-500 group-hover:text-gray-600 transition duration-200`}>
        {description}
      </div>
    </div>
  </button>
);

const ActionButtons = ({ isMobile, handleNavigation }) => (
  <div className={`flex ${isMobile ? 'flex-col space-y-3' : 'flex-row space-x-3 sm:space-x-4'} w-full`}>
    <button
      onClick={() => handleNavigation('/book-a-demo')}
      className="relative group px-4 sm:px-6 py-2.5 rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
      <div className="relative flex items-center justify-center space-x-2">
        <span className="text-white font-light">Book Demo</span>
        <div className="transform group-hover:translate-x-1 transition-transform duration-200">
          <ArrowRight size={16} className="text-white" />
        </div>
      </div>
    </button>
    
    <button
      onClick={() => window.location.href = 'https://app.401k-pro.ai'}
      className="relative group px-4 sm:px-6 py-2.5 rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 group-hover:from-blue-600/10 group-hover:to-cyan-400/10 transition-all duration-300"></div>
      <div className="relative flex items-center justify-center space-x-2">
        <span className="text-gray-600 font-light group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A5A9C] group-hover:to-[#39A5F3] transition duration-200">
          Log In
        </span>
        <div className="transform group-hover:translate-x-1 transition-transform duration-200">
          <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-500" />
        </div>
      </div>
    </button>
  </div>
);

export default Header;