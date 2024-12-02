import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Check, ChevronDown, ChevronUp, Lock, Shield, Server, Bell, Database, Code, Trash } from 'lucide-react';

// Floating animation for background elements
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [-1, 1, -1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const GradientIcon = ({ Icon }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] blur-xl opacity-20 group-hover:opacity-75 transition-opacity"></div>
    <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative">
      <defs>
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0A5A9C" />
          <stop offset="100%" stopColor="#39A5F3" />
        </linearGradient>
      </defs>
      <Icon stroke="url(#icon-gradient)" strokeWidth={1.5} />
    </svg>
  </div>
);

const SecurityCategory = ({ title, features, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] rounded-xl blur-lg opacity-5 group-hover:opacity-10 transition-opacity"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 shadow-lg rounded-xl overflow-hidden border border-gray-100 backdrop-blur-xl relative"
      >
        <button 
          className="flex justify-between items-center w-full text-left p-6 group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] flex items-center justify-center">
              <Icon className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-light text-gray-800">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <ChevronUp size={24} className="text-gray-500" /> : <ChevronDown size={24} className="text-gray-500" />}
          </motion.div>
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
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 h-5 w-5 mt-1 mr-3">
                      <div className="relative">
                        <Check className="text-green-500 absolute transition-transform group-hover:scale-110" />
                      </div>
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const Security = () => {
  const securityCategories = [
    {
      title: "Network Security",
      icon: Server,
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
      icon: Shield,
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
      icon: Lock,
      features: [
        "Multi-Factor Authentication (MFA)",
        "JWT tokens",
        "Automated logout",
        "Role based access control"
      ]
    },
    {
      title: "Monitoring and Testing",
      icon: Bell,
      features: [
        "AWS Cloudwatch",
        "Amazon inspector for automated vulnerability testing",
        "Regular security assessment and pen testing",
        "Rate limiting on all API endpoints"
      ]
    },
    {
      title: "Backup and Recovery",
      icon: Database,
      features: [
        "Regular backups",
        "Regular rollbacks",
        "Disaster Recovery Process",
        "Backup system ready to be deployed"
      ]
    },
    {
      title: "Application Security",
      icon: Code,
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
      icon: Trash,
      features: [
        "Have process for secure disposal of data"
      ]
    }
  ];

  return (
    <div className="font-['Roboto',sans-serif] bg-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      <FloatingElement>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </FloatingElement>

      <div className="container mx-auto px-4 py-16 sm:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3]">Security</span>
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto mb-12">
            Your data's safety is our top priority
          </p>
          <div className="flex justify-center">
            <GradientIcon Icon={ShieldCheck} />
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {securityCategories.map((category, index) => (
              <SecurityCategory 
                key={index} 
                {...category}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center bg-white/80 shadow-lg rounded-2xl p-8 border border-gray-100 backdrop-blur-xl relative"
          >
            <FloatingElement>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] rounded-2xl blur-2xl opacity-5"></div>
            </FloatingElement>
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