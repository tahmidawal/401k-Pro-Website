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

const FragmentedIndustry = () => {
  return (
    <div className="relative overflow-hidden py-16">
      {/* Background with modern gradient */}
      <div className="absolute inset-0">
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 "></div>
      </div>
      
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.2, 0.3],
        }}
        
        className="absolute top-0 left-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2,
        }}
        className="absolute bottom-0 right-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-black/30 backdrop-blur-sm p-12 rounded-3xl border border-white/20"
        >
          <motion.h2 
            variants={textVariants}
            className="text-5xl sm:text-6xl font-extralight text-center mb-6"
          >
            <span className="text-white">
              The circle is finally complete
            </span>
          </motion.h2>

          <motion.div
            variants={textVariants}
            className="space-y-4 text-center"
          >
            <h4 className="text-2xl font-light text-white">
              Every other aspect of 401k plan management is scalable
            </h4>
            
            <h4 className="text-2xl font-light italic text-white">
              now your fiduciary responsibilities are too.
            </h4>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FragmentedIndustry;