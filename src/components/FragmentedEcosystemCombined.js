import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

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

const EcosystemCard = ({ badge, title, description, isAnimated = false, delay = 0, gradient = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ translateY: -10 }}
      className="relative group h-full"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
      
      <div className={`relative h-full backdrop-blur-xl ${
        gradient ? 'bg-white/80' : 'bg-white/80'
      } p-8 rounded-2xl border border-white/20 shadow-lg overflow-hidden flex flex-col`}>
        {gradient && (
          <div className="absolute top-4 right-4">
            {/* <div className="relative">
              <div className="relative px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full">
                <span className="text-white text-sm font-light">Core Solution</span>
              </div>
            </div> */}
          </div>
        )}

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>

        <div className="mb-8">
          <div className={`text-sm font-medium py-1 px-3 rounded-full inline-block mb-4 ${
            gradient ? 'bg-blue-50 text-blue-600' : 'bg-blue-50 text-blue-600'
          } relative z-10 w-fit`}>
            {badge}
          </div>
          <h3 className={`text-2xl font-light mb-4 relative z-10 text-gray-800`}>
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed font-light">
            {description}
          </p>
        </div>

        {gradient && (
          <div className="space-y-4">
            {/* <div className="p-3 bg-blue-50 rounded-xl">
              <p className="text-blue-600 text-sm font-medium text-center">
                Streamline Your Workflow
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-xl">
              <p className="text-blue-600 text-sm font-medium text-center">
                Enhance Compliance
              </p>
            </div> */}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const FragmentedEcosystemCombined = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30 overflow-hidden py-24">
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
          whileInView="visible"
          viewport={{ once: true }}
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
            Your Complete
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Plan Management Ecosystem
            </span>
            
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover how our solutions integrate to streamline your fiduciary responsibilities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <EcosystemCard
            badge="Fiduciary Responsibilities"
            title="401k Pro"
            description="With 401k Pro you can easily manage your fiduciary responsibilities. Your plan management ecosystem is now complete."
            isAnimated={true}
            delay={0}
            gradient={true}
          />

          <EcosystemCard
            badge="Plan Hosting"
            title="Record Keepers"
            description="Record Keepers allow you to easily host your plans on their platform and provide you with the tools to manage them."
            delay={0.2}
          />

          <EcosystemCard
            badge="ERISA Compliance"
            title="TPAs and ERISA Attorneys"
            description="TPAs and ERISA Attorneys easily take care of the plan's accounting and ERISA compliance."
            delay={0.4}
          />

          <EcosystemCard
            badge="Investments"
            title="Investment Monitoring Tools"
            description="Investment monitoring tools such as fi360 and Morningstar provide you with the tools to monitor your plan's investments easily and efficiently."
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
};

export default FragmentedEcosystemCombined;
