import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Check, ChevronDown, ChevronUp } from 'lucide-react';

const GradientIcon = ({ Icon }) => (
  <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0A5A9C" />
        <stop offset="100%" stopColor="#39A5F3" />
      </linearGradient>
    </defs>
    <Icon stroke="url(#icon-gradient)" strokeWidth={1.5} />
  </svg>
);

const SecurityCategory = ({ title, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100"
    >
      <button 
        className="flex justify-between items-center w-full text-left p-6"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-xl font-medium text-gray-800">{title}</h3>
        {isExpanded ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="px-6 pb-6 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="flex-shrink-0 h-5 w-5 text-green-500 mr-3 mt-1" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Security = () => {
  const securityCategories = [
    {
      title: "Network Security",
      features: [
        "Virtual Private Cloud to isolate the application",
        "Web Application Firewall in AWS",
        "Content Delivery in HTTPS",
        "AWS S3 encryption at rest",
        "AWS S3 backup encryption at transmission"
      ]
    },
    {
      title: "Data Protection",
      features: [
        "Encryption at rest for Database",
        "Encryption at rest for app",
        "User parametrized queries to prevent SQL Injections",
        "HTTPonly cookies",
        "Encrypt Cookies",
        "Include Limits on Cookies"
      ]
    },
    {
      title: "Access Control",
      features: [
        "Multi-Factor Authentication (MFA)",
        "JWT tokens",
        "Automated logout",
        "Role based access control"
      ]
    },
    {
      title: "Monitoring and Testing",
      features: [
        "AWS Cloudwatch",
        "Amazon inspector for automated vulnerability testing",
        "Regular security assessment and pen testing",
        "Rate limiting on all API endpoints"
      ]
    },
    {
      title: "Backup and Recovery",
      features: [
        "Regular backups",
        "Regular rollbacks",
        "Disaster Recovery Process",
        "Backup system ready to be deployed"
      ]
    },
    {
      title: "Application Security",
      features: [
        "Containerize application into docker",
        "Never let sensitive info be displayed on the error page",
        "AWS Secrets manager or parameter store for .env files",
        "AWS Secrets manager or parameter store for .env files backup",
        "Rotate credentials every 3 days"
      ]
    },
    {
      title: "Data Management",
      features: [
        "Have process for secure disposal of data"
      ]
    }
  ];

  return (
    <div className="font-['Roboto',sans-serif] bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3]">Security</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto mb-8">
            Your data's safety is our top priority
          </p>
          <div className="flex justify-center">
            <GradientIcon Icon={ShieldCheck} />
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white shadow-2xl rounded-2xl p-8 mb-12 border border-gray-100"
          >
            <h2 className="text-3xl font-light mb-8 text-gray-800 border-b border-gray-200 pb-4">
              Comprehensive Security Measures
            </h2>
            <div className="space-y-6">
              {securityCategories.map((category, index) => (
                <SecurityCategory 
                  key={index} 
                  title={category.title} 
                  features={category.features} 
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center bg-white shadow-lg rounded-2xl p-8 border border-gray-100"
          >
            <h2 className="text-2xl font-light mb-4 text-gray-800">Our Commitment to Security</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              We are committed to maintaining the highest standards of security to protect our organization and the privacy of its clients. Our security controls are designed and implemented to ensure the confidentiality, integrity, and availability of your data.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Security;