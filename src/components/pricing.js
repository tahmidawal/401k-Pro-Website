import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

const PricingTier = ({ planRange, price, isPopular, delay, priceSubtext = "/month" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/book-a-demo');
    setTimeout(() => window.scrollTo(0, 0), 100);
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
      <div className={`relative h-full backdrop-blur-xl bg-white/80 p-8 rounded-2xl border ${
        isPopular ? 'border-blue-500/50' : 'border-white/20'
      } shadow-lg overflow-hidden flex flex-col`}>
        {isPopular && (
          <div className="absolute top-4 right-4">
            <div className="relative px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full">
              <span className="text-white text-sm font-light">Most Popular</span>
            </div>
          </div>
        )}

        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>

        <div className="mb-8">
          <h2 className="text-2xl font-light mb-4">{planRange}</h2>
          <div className="flex items-baseline">
            <span className="text-4xl font-light">${price}</span>
            <span className="text-gray-500 ml-2">{priceSubtext}</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <div className="p-3 bg-blue-50 rounded-xl">
            <p className="text-blue-600 text-sm font-medium text-center">
              All Features Included
            </p>
          </div>
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
    "AI-Powered Features",
    "Secure SOC2 Certified Platform",
    "24/7/365 Support"
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto mt-20 px-4"
      id="features-section"
    >
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extralight mb-4">
          Every Plan Includes
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need to streamline 401(k) plan management.
        </p>
      </motion.div>

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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/80 p-4 rounded-xl border border-white/20 shadow-lg overflow-hidden flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-full">
                  <Check className="text-blue-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
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
    <>
      <Helmet>
        <title>401k Pro - Pricing Plans</title>
        <meta
          name="description"
          content="Explore simple and transparent pricing for 401(k) Pro. All features included in every plan with scalable options to match your advisory needs."
        />
        <meta
          name="keywords"
          content="401k Pro pricing, simple pricing, transparent costs, scalable 401k plans, 401k management software"
        />
        <meta property="og:title" content="401k Pro - Pricing Plans" />
        <meta
          property="og:description"
          content="Explore simple and transparent pricing for 401(k) Pro. All features included in every plan with scalable options to match your advisory needs."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com/pricing" />
      </Helmet>
      <div id="pricing" className="relative min-h-screen overflow-hidden mb-20">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-20"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-6xl font-extralight mb-6"
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
              Transparent pricing based on the number of plans. All features included in every plan.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} delay={index * 0.2} />
            ))}
          </div>

          <FeaturesList />
        </div>
      </div>
    </>
  );
};

export default PricingComponent;