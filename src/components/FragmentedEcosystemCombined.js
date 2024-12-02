import React from 'react';
import { motion } from 'framer-motion';

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

const textVariants = {
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

const Card = ({ badge, title, description, isAnimated = false, delay = 0, gradient = false }) => {
  const baseClasses = "relative p-8 rounded-3xl border overflow-hidden h-full flex flex-col shadow-lg transition-transform duration-300";
  const gradientClasses = gradient 
    ? "bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] border-white/10 text-white" 
    : "bg-white border border-gray-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`${baseClasses} ${gradientClasses} hover:scale-105 transform transition-all duration-300`}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className={`text-sm font-medium py-1 px-3 rounded-full inline-block mb-2 ${
        gradient ? 'bg-green-500' : 'bg-green-500'
      } text-white relative z-10`}>
        {badge}
      </div>
      <h3 className={`text-2xl font-light mt-6 mb-4 relative z-10 ${gradient ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
      <p className={`leading-relaxed font-light flex-grow ${gradient ? 'text-gray-200' : 'text-gray-600'}`}>{description}</p>
    </motion.div>
  );
};

const FragmentedEcosystemCombined = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 py-16 sm:py-24 relative"
      >
        <motion.div
          variants={textVariants}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3]">
              Complete Your Plan Management Ecosystem
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our solutions integrate to streamline your fiduciary responsibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr mt-12">
          {/* Step 1 - Animated Cards */}
          <div className="relative h-full">
            {/* <Card
              badge="Fiduciary Responsibilities"
              title="No Solutions"
              description="There is no dedicated system specifically designed for helping advisors manage their fiduciary responsibilities."
              isAnimated={true}
              delay={0}
            /> */}
            <Card
              badge="Fiduciary Responsibilities"
              title="401k Pro"
              description="With 401k Pro you can easily manage your fiduciary responsibilities. Your plan management ecosystem is now complete."
              isAnimated={true}
              delay={0.5}
              gradient={true}
            />
          </div>

          {/* Step 2 */}
          <div className="mt-60 sm:mt-0">
            <Card
              badge="Plan Hosting"
              title="Record Keepers"
              description="Record Keepers allow you to easily host your plans on their platform and provide you with the tools to manage them."
            />
          </div>

          {/* Step 3 */}
          <div>
            <Card
              badge="ERISA Compliance"
              title="TPAs and ERISA Attorneys"
              description="TPAs and ERISA Attorneys easily take care of the plan's accounting and ERISA compliance."
            />
          </div>

          {/* Step 4 */}
          <div>
            <Card
              badge="Investments"
              title="Investment Monitoring Tools"
              description="Investment monitoring tools such as fi360 and Morninstar provide you with the tools to monitor your plan's investments easily and efficiently."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FragmentedEcosystemCombined;
