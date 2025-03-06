import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Phone, ChevronRight, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../img/PlanSync-No-Bg.png';
import { IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 10,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const FooterSection = ({ title, items, handleHashLink, navigateAndScrollTop }) => (
  <motion.div variants={itemVariants} className="space-y-6">
    <h3 className="font-normal text-base text-gray-900">
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li 
          key={index}
          className="group flex items-center"
        >
          <ChevronRight className="w-3 h-3 bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent opacity-0 -ml-4 mr-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
          {item.link.startsWith('http') || item.link.startsWith('mailto:') || item.link.startsWith('tel:') ? (
            <a 
              href={item.link} 
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition-all duration-200"
              target={item.link.startsWith('http') ? "_blank" : undefined}
              rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
            >
              {item.text}
            </a>
          ) : item.link.startsWith('#') ? (
            <a 
              onClick={() => handleHashLink(item.link)}
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition-all duration-200 cursor-pointer"
            >
              {item.text}
            </a>
          ) : (
            <a 
              onClick={() => navigateAndScrollTop(item.link)}
              className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent transition-all duration-200 cursor-pointer"
            >
              {item.text}
            </a>
          )}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    className="relative group"
    aria-label={label}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full transition-transform duration-200 group-hover:scale-110" />
    <div className="relative flex items-center justify-center w-10 h-10">
      <Icon size={20} className="text-white transition-colors duration-200" />
    </div>
  </motion.a>
);

const SimpleContactInfo = ({ icon: Icon, text, href }) => (
  <a href={href} className="flex items-center text-gray-600 hover:text-blue-600 group">
    <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 mr-3">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
      <div className="relative flex items-center justify-center w-full h-full">
        <Icon className="w-5 h-5 text-white" />
      </div>
    </div>
    <span>{text}</span>
  </a>
);

// Mobile accordion component for footer sections
const MobileAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium text-gray-900">{title}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  const navigate = useNavigate();
  
  const handleHashLink = (hash) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  // Function to navigate and scroll to top
  const navigateAndScrollTop = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  return (
    <footer className="relative border-t border-gray-500">
      <div className="absolute inset-0 pointer-events-none" />
      
      {/* Mobile footer */}
      <div className="block md:hidden">
        <div className="mt-8">
          <div className="container mx-auto px-6 py-8">
            {/* Logo and Company Info */}
            <div className="flex flex-col items-center mb-8">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={Logo} 
                alt="PlanSync Logo" 
                className="h-8 mb-4 cursor-pointer"
                onClick={() => navigateAndScrollTop('/')}
              />
            </div>
            
            {/* Contact and Social Section - Redesigned for better layout */}
            <div className="mb-10">
              {/* Contact Info - All styled as cards with consistent spacing */}
              <div className="space-y-4">
                <a href="https://www.linkedin.com/company/106241644/admin/dashboard/" className="flex items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full">
                  <div className="relative w-10 h-10 flex-shrink-0 mr-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">LinkedIn</span>
                </a>
                
                <a href="tel:+19192009943" className="flex items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="relative w-10 h-10 flex-shrink-0 mr-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">+1 (919) 200-9943</span>
                </a>
                
                <a href="mailto:info@PlanSync.ai" className="flex items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="relative w-10 h-10 flex-shrink-0 mr-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">info@PlanSync.ai</span>
                </a>
                
                <a onClick={() => navigateAndScrollTop('/contact-plansync')} className="flex items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full cursor-pointer">
                  <div className="relative w-10 h-10 flex-shrink-0 mr-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium">Contact Us</span>
                </a>
              </div>
            </div>
            
            {/* Accordion Sections */}
            <div className="mb-8">
              <MobileAccordion title="Product">
                <ul className="space-y-3">
                  <li><a onClick={() => navigateAndScrollTop('/security')} className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent cursor-pointer">Security</a></li>
                  <li><a onClick={() => navigateAndScrollTop('/frequently-asked-questions')} className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent cursor-pointer">F.A.Q.</a></li>
                  <li><a onClick={() => handleHashLink('#demo-video')} className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent cursor-pointer">Demo Video</a></li>
                  <li><a onClick={() => handleHashLink('#pricing')} className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent cursor-pointer">Try for Free</a></li>
                </ul>
              </MobileAccordion>
              
              <MobileAccordion title="Careers">
                <ul className="space-y-3">
                  <li><a onClick={() => navigateAndScrollTop('/careers')} className="text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-400 hover:bg-clip-text hover:text-transparent cursor-pointer">We're hiring! See open roles</a></li>
                </ul>
              </MobileAccordion>
            </div>
            
            {/* Legal Links */}
            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-200">
              <a href="https://drive.google.com/file/d/1AACdaA-dwVBOkH6GQ4msDcML35fe7PSB/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">Terms</a>
              <a href="https://drive.google.com/file/d/1T1YtQA8wW7MCw-RT-7wdJhWtjPqr885R/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600">Privacy</a>
            </div>
            
            {/* Copyright */}
            <p className="text-sm text-gray-500 text-center mt-6">© 2024 AccessibleAI, LLC</p>
          </div>
        </div>
      </div>

      {/* Desktop footer - keep existing desktop layout */}
      <div className="hidden md:block pt-20 pb-12 font-['Inter',sans-serif]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={Logo} 
                alt="PlanSync Logo" 
                className="h-8 cursor-pointer"
                onClick={() => navigateAndScrollTop('/')}
              />
              <p className="text-sm text-gray-500">© 2024 AccessibleAI, LLC</p>
              <div className="flex space-x-6">
                <a href="https://drive.google.com/file/d/1AACdaA-dwVBOkH6GQ4msDcML35fe7PSB/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200">Terms</a>
                <a href="https://drive.google.com/file/d/1T1YtQA8wW7MCw-RT-7wdJhWtjPqr885R/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200">Privacy</a>
              </div>
            </motion.div>

             {/* Product */}
            <FooterSection
              title="Product"
              items={[
                { text: 'Security', link: '/security' },
                { text: 'F.A.Q.', link: '/frequently-asked-questions' },
                { text: 'Demo Video', link: '#demo-video' },
                { text: 'Try for Free', link: '#pricing' }
              ]}
              handleHashLink={handleHashLink}
              navigateAndScrollTop={navigateAndScrollTop}
            />

            {/* Careers */}
            <FooterSection
              title="Careers"
              items={[
                { text: "We're hiring! See open roles", link: "/careers" }
              ]}
              handleHashLink={handleHashLink}
              navigateAndScrollTop={navigateAndScrollTop}
            />

            {/* Connect */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="font-normal text-base text-gray-900">
                Connect
              </h3>
              <div className="space-y-3 text-left">
                <a href="https://www.linkedin.com/company/plansync-ai/about/?viewAsMember=true" className="flex items-center text-gray-600 hover:text-blue-600 group">
                  <div className="relative w-10 h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 mr-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
                    <div className="relative flex items-center justify-center w-full h-full">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span>LinkedIn</span>
                </a>
                <SimpleContactInfo 
                  icon={Phone} 
                  text="+1 (919) 200-9943" 
                  href="tel:+19192009943" 
                />
                <SimpleContactInfo 
                  icon={Mail} 
                  text="info@PlanSync.ai" 
                  href="mailto:info@PlanSync.ai" 
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;