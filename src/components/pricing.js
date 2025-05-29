import React, { useRef, useState } from 'react';
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

// Move features array outside of components
const features = [
  "Centralized Plan Data",
  "Plan Documents",
  "Automated Reporting",
  // "Participant Census Automation",
  "Plan Management Dashboard",
  "AI-Powered Features",
  "Top-Tier Security",
  "Free Onboard and Training",
  "24/7/365 Support"
];

const BillingToggle = ({ isAnnual, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex items-center justify-center mb-12 md:mb-16"
    >
      <div className="relative bg-white/80 backdrop-blur-xl border border-gray-300 rounded-full p-1 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => onToggle(false)}
            className={`relative px-6 py-2 rounded-full text-sm font-light transition-all duration-300 ${
              !isAnnual 
                ? 'text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {!isAnnual && (
              <motion.div
                layoutId="billing-toggle"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative">Monthly</span>
          </button>
          <button
            onClick={() => onToggle(true)}
            className={`relative px-6 py-2 rounded-full text-sm font-light transition-all duration-300 ${
              isAnnual 
                ? 'text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {isAnnual && (
              <motion.div
                layoutId="billing-toggle"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative">Annual</span>
            <span className="relative ml-1 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
              Save 17%
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PricingTier = ({ planRange, price, isPopular, delay, priceSubtext = "/month", originalPrice, annualPrice, annualOriginalPrice, isAnnual, isCustomPricing }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact-plansync');
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const displayPrice = isAnnual ? annualPrice : price;
  const displayOriginalPrice = isAnnual ? annualOriginalPrice : originalPrice;
  
  // Handle priceSubtext for annual billing
  let displayPriceSubtext;
  if (isCustomPricing) {
    displayPriceSubtext = "";
  } else if (isAnnual) {
    displayPriceSubtext = priceSubtext.includes("/plan/") ? "/plan/year" : "/year";
  } else {
    displayPriceSubtext = priceSubtext;
  }

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
        isPopular ? 'border-blue-500/50' : 'border-gray-300'
      } shadow-lg overflow-hidden flex flex-col`}>
        {isPopular && (
          <div className="absolute top-4 right-4">
            <div className="relative px-3 py-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full">
              <span className="text-white text-sm font-light">Most Popular</span>
            </div>
          </div>
        )}

        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>

        <div className="mb-8">
          <h2 className="text-2xl font-light mb-4">{planRange}</h2>
          <div className="flex items-baseline justify-start" style={{ gap: '0.25rem' }}>
            {displayOriginalPrice && (
              <span className="text-2xl font-light text-gray-400 line-through mr-2">
                {isCustomPricing ? displayOriginalPrice : `$${displayOriginalPrice}`}
              </span>
            )}
            <span className={`font-light ${isCustomPricing ? 'text-3xl' : 'text-4xl'}`}>
              {isCustomPricing ? displayPrice : `$${displayPrice}`}
            </span>
            {displayPriceSubtext && (
              <span className="text-gray-500">{displayPriceSubtext}</span>
            )}
          </div>
          <p className="text-sm text-green-600 mt-3">Early Access Offer</p>
          {isAnnual && (
            <p className="text-sm text-blue-600 mt-2">Save 17% vs monthly billing</p>
          )}
        </div>

        <div className="space-y-4 mb-8 flex-grow">
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
              30-Day Money Back Guarantee
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <button 
            onClick={handleButtonClick}
            className="relative group w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-sky-400 text-white font-light py-3 px-6 rounded-full flex items-center justify-center gap-2">
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const MobilePricingTier = ({ planRange, price, isPopular, priceSubtext = "/month", originalPrice, annualPrice, annualOriginalPrice, isAnnual, isCustomPricing }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact-plansync');
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  const displayPrice = isAnnual ? annualPrice : price;
  const displayOriginalPrice = isAnnual ? annualOriginalPrice : originalPrice;
  
  // Handle priceSubtext for annual billing
  let displayPriceSubtext;
  if (isCustomPricing) {
    displayPriceSubtext = "";
  } else if (isAnnual) {
    displayPriceSubtext = priceSubtext.includes("/plan/") ? "/plan/year" : "/year";
  } else {
    displayPriceSubtext = priceSubtext;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full"
    >
      <div className={`relative backdrop-blur-xl bg-white/80 p-6 rounded-xl border ${
        isPopular ? 'border-blue-500/50' : 'border-gray-300'
      } shadow-lg flex flex-col min-h-[400px]`}>
        {isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="px-4 py-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full">
              <span className="text-white text-sm font-light">Most Popular</span>
            </div>
          </div>
        )}

        <div className="text-center mb-6">
          <h2 className="text-xl font-light mb-3">{planRange}</h2>
          <div className="flex items-baseline justify-center min-h-[60px]">
            {displayOriginalPrice && (
              <span className="text-xl font-light text-gray-400 line-through mr-2">
                {isCustomPricing ? displayOriginalPrice : `$${displayOriginalPrice}`}
              </span>
            )}
            <span className={`font-light ${isCustomPricing ? 'text-2xl' : 'text-3xl'}`}>
              {isCustomPricing ? displayPrice : `$${displayPrice}`}
            </span>
            {displayPriceSubtext && (
              <span className="text-gray-500">{displayPriceSubtext}</span>
            )}
          </div>
          <p className="text-xs text-green-600 mt-1">Early Access Offer</p>
          {isAnnual && (
            <p className="text-xs text-blue-600 mt-1">Save 17% vs monthly billing</p>
          )}
        </div>

        <div className="space-y-3 mb-6 flex-grow">
          <div className="p-2 bg-blue-50 rounded-lg">
            <p className="text-blue-600 text-sm font-medium text-center">
              All Features Included
            </p>
          </div>
          <div className="p-2 bg-blue-50 rounded-lg">
            <p className="text-blue-600 text-sm font-medium text-center">
              Unlimited Users
            </p>
          </div>
          <div className="p-2 bg-blue-50 rounded-lg">
            <p className="text-blue-600 text-sm font-medium text-center">
              30-Day Money Back
            </p>
          </div>
        </div>

        <div className="mt-auto">
          <button 
            onClick={handleButtonClick}
            className="relative w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full blur-sm opacity-75"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-sky-400 text-white font-light py-2.5 px-4 rounded-full flex items-center justify-center gap-2">
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesList = () => {
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
          Every Subscription Includes
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
            <div className="relative backdrop-blur-xl bg-white/80 p-4 rounded-xl border border-gray-300 shadow-lg overflow-hidden flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full p-[2px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full" />
                  <div className="absolute inset-[2px] bg-white rounded-full" />
                  <Check className="relative w-5 h-5 [&>path]:fill-transparent [&>path]:stroke-[url(#check-gradient)]" />
                  <svg className="absolute" width="0" height="0">
                    <defs>
                      <linearGradient id="check-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
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
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingTiers = [
    {
      planRange: "1-15 Plans Managed",
      price: 300,
      originalPrice: 400,
      annualPrice: 3000,
      annualOriginalPrice: 4800,
      isPopular: false
    },
    {
      planRange: "16-50 Plans Managed",
      price: 475,
      originalPrice: 600,
      annualPrice: 4750,
      annualOriginalPrice: 7200,
      isPopular: false
    },
    {
      planRange: "51+ Plans Managed",
      price: "Let's Talk",
      originalPrice: "",
      annualPrice: "Let's Talk",
      annualOriginalPrice: "",
      isPopular: false,
      isCustomPricing: true
    }
  ];

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Explore simple and transparent pricing for PlanSync. All features included in every plan with scalable options to match your advisory needs."
        />
        <meta
          name="keywords"
          content="PlanSync pricing, simple pricing, transparent costs, scalable 401k plans, 401k management software"
        />
        <meta property="og:title" content="PlanSync - Pricing Plans" />
        <meta
          property="og:description"
          content="Explore simple and transparent pricing for PlanSync. All features included in every plan with scalable options to match your advisory needs."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com/pricing" />
      </Helmet>
      <div id="pricing" className="relative min-h-screen overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 relative py-12 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12 md:mb-20"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extralight mb-4 md:mb-6"
            >
              Simple{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
                Pricing
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto px-4"
            >
              Transparent pricing based on how many retirement plans you manage. All features are always included.
            </motion.p>
          </motion.div>

          {/* Billing Toggle */}
          <BillingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />

          {/* Mobile Pricing Display */}
          <div className="block md:hidden space-y-6 mb-16">
            {pricingTiers.map((tier, index) => (
              <MobilePricingTier key={index} {...tier} isAnnual={isAnnual} />
            ))}
          </div>

          {/* Desktop Pricing Display */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} delay={index * 0.2} isAnnual={isAnnual} isCustomPricing={tier.isCustomPricing} />
            ))}
          </div>

          {/* Mobile Features List */}
          <div className="block md:hidden">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-extralight mb-3">
                Every Subscription Includes
              </h2>
              <p className="text-gray-600 text-base px-4">
                Everything you need to streamline 401(k) plan management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 px-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="relative backdrop-blur-xl bg-white/80 p-3 rounded-lg border border-gray-300 shadow-sm flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm font-light">
                      {feature}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop Features List */}
          <div className="hidden md:block">
            <FeaturesList />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingComponent;