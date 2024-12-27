import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, ArrowRight } from 'lucide-react';

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

const MissionStatement = () => {
  return (
    <div className="relative overflow-hidden font-['Roboto',sans-serif] font-light">
      {/* Background animations */}
      <FloatingElement>
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </FloatingElement>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
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
                <Target size={48} className="text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text" />
              </div>
            </div>
          </motion.div>

          <h1 className="text-6xl font-extralight mb-8">
            Let's
            <span className="relative mx-4">
              <span className="relative z-10 text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text">
                Fix
              </span>
              <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 -z-10 transform skew-x-12"></div>
            </span>
            Plan Management
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            

            <div className="relative p-8">
              <FloatingElement>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-3xl"></div>
              </FloatingElement>
              
              <div className="space-y-6 relative z-10">
                <p className="text-xl text-gray-600">
                  94% of US businesses offer retirement plans to their employees.
                </p>
                <p className="text-xl text-gray-600">
                  And yet, 401k plan management is broken.
                </p>
                <p className="text-2xl font-light">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                    So, we're fixing it.
                  </span>
                </p>
              </div>
            </div>

            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a 
                href="/book-a-demo" 
                className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-4 rounded-full hover:shadow-lg transition-shadow duration-300"
              >
                <span>See How</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionStatement;