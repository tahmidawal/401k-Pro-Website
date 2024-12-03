import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Check, Sparkles, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const PricingTier = ({ planRange, price, isPopular, delay, priceSubtext = "/month" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    navigate('/book-a-demo');
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ translateY: -10 }}
      className="relative group h-full"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
      
      {/* Card content */}
      <div className={`relative h-full backdrop-blur-xl bg-white/80 p-8 rounded-2xl border ${
        isPopular ? 'border-blue-500/50' : 'border-white/20'
      } shadow-lg overflow-hidden flex flex-col`}>
        {/* Popular badge */}
        {isPopular && (
          <div className="absolute top-4 right-4">
            <div className="relative">
              <div className="relative px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full">
                <span className="text-white text-sm font-light">Most Popular</span>
              </div>
            </div>
          </div>
        )}

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>

        {/* Plan range and price */}
        <div className="mb-8">
          <h2 className="text-2xl font-light mb-4">{planRange}</h2>
          <div className="flex items-baseline">
            <span className="text-4xl font-light">${price}</span>
            <span className="text-gray-500 ml-2">{priceSubtext}</span>
          </div>
        </div>

        {/* Notices */}
        <div className="space-y-4 mb-8">
          <button 
            onClick={scrollToFeatures}
            className="w-full p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300 group"
          >
            <p className="text-blue-600 text-sm font-medium text-center group-hover:scale-105 transition-transform duration-300">
              All Features Included
            </p>
          </button>
          <div className="p-3 bg-blue-50 rounded-xl">
            <p className="text-blue-600 text-sm font-medium text-center">
              Unlimited Users
            </p>
          </div>
          <div className="p-3 bg-blue-50 rounded-xl">
            <p className="text-blue-600 text-sm font-medium text-center">
              30-Day Free Trial
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleButtonClick}
          className="relative group w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-light py-3 px-6 rounded-full flex items-center justify-center gap-2">
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </motion.div>
  );
};

const FeaturesList = () => {
  const features = [
    "Master Spreadsheet",
    "Plan Documents",
    "Automated Reporting",
    "Participant Census Automation",
    "Plan Management Dashboard",
    "AI Notewriting",
    "AI Email Integrations",
    "AI PDF Data Extraction",
    "AI Data Entry for PDFs",
    "SOC2 Certified Security",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto mt-20 px-4"
      id="features-section"
    >
      {/* Section Header */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extralight mb-4">
          Every Plan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            Includes
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need to streamline your 401(k) plan management
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-500"></div>
            
            {/* Card content */}
            <div className="relative backdrop-blur-xl bg-white/80 p-4 rounded-xl border border-white/20 shadow-lg overflow-hidden flex items-center gap-4">
              {/* Icon container */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-full">
                  <Check className="text-blue-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Feature text */}
              <span className="text-gray-700 text-base font-light group-hover:text-blue-600 transition-colors duration-300">
                {feature}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const PricingComponent = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const pricingTiers = [
    {
      planRange: "1-15 Plans",
      price: 200,
      isPopular: false
    },
    {
      planRange: "16-40 Plans",
      price: 400,
      isPopular: true
    },
    {
      planRange: "41+ Plans",
      price: '10',
      isPopular: false,
      priceSubtext: "per plan/month"
    }
  ];

  return (
    <div id="pricing" className="relative min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <FloatingElement delay={0}>
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </FloatingElement>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360, 360]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block mb-8"
          >
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-full blur-xl"></div>
              <div className="relative flex items-center justify-center h-full">
                <Sparkles size={48} className="text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text" />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-7xl font-extralight mb-6"
          >
            Simple{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Pricing
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Simple pricing based on your number of plans. All features included.
          </motion.p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} delay={index * 0.2} />
          ))}
        </div>

        {/* Features List */}
        <FeaturesList />
      </div>
    </div>
  );
};

export default PricingComponent;