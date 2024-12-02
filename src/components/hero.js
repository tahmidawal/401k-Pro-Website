import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Users, ShieldCheck, FileText } from 'lucide-react';
import logo from '../img/401k Pro Logo-Photoroom.png';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};

// Animated background element
const AnimatedCircle = ({ delay = 0, className }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
      opacity: [0.5, 0.2, 0.5],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
    }}
  />
);

// Modern feature card with glass morphism
const FeatureCard = ({ icon: Icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
    <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg flex items-center gap-3">
      <div className="relative w-10 h-10 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-lg blur-lg"></div>
        <div className="relative flex items-center justify-center w-full h-full bg-white rounded-lg border border-white/50">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <p className="text-gray-700 font-light">{text}</p>
    </div>
  </motion.div>
);

const HeroSection = () => {
  const features = [
    { icon: BarChart2, text: "360° Plan View" },
    { icon: Users, text: "Client Management" },
    { icon: ShieldCheck, text: "Compliance Tools" },
    { icon: FileText, text: "Automated Reporting" },
  ];

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30 overflow-hidden py-16 px-4 sm:px-6 lg:px-8 flex items-center -mt-5" id="hero">
      {/* Animated background elements */}
      <AnimatedCircle delay={0} className="top-0 left-0 w-[800px] h-[800px] bg-blue-200/30" />
      <AnimatedCircle delay={2} className="bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/30" />
      <AnimatedCircle delay={4} className="top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-200/20" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Text Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extralight mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                Scale Your
              </span>
              <br />
              Advisory Practice
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              401(k) Pro is a comprehensive 401(k) plan management and reporting tool that helps you
              manage your plan more efficiently and effectively.
            </motion.p>
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBenefits}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-light py-3 px-6 rounded-full inline-flex items-center gap-2">
                <span>How We Can Help</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div 
            variants={itemVariants}
            className="w-full lg:w-1/2 hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-3xl blur-2xl"></div>
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative"
              >
                <img src={logo} alt="401k Pro Logo-Photoroom" className="w-full h-auto" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Features */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 lg:hidden space-y-4"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-light text-center mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Key Features
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;