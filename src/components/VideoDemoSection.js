import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';

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
      repeat: Number.POSITIVE_INFINITY,
      delay,
    }}
  />
);

const DemoVideoSection = () => {
  return (
    <section id="demo-video" className="relative flex items-center justify-center font-['Roboto',sans-serif] font-light py-24 overflow-hidden">
      {/* Animated background elements */}
      {/* <AnimatedCircle delay={0} className="top-0 left-0 w-[800px] h-[800px] bg-blue-200/30" />
      <AnimatedCircle delay={2} className="bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/30" />
      <AnimatedCircle delay={4} className="top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-200/20" /> */}

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-8 sm:p-12">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
                  <div className="relative">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-900/10 backdrop-blur-sm"></div>
                      <iframe 
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/zIQcvItt1HE" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center cursor-pointer"
                        >
                          <Play className="w-6 h-6 text-white fill-current" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl font-extralight mb-6 leading-tight"
                >
                  <span className="text-gray-800">Watch 401(k) Pro in</span>{" "}
                  <span className="text-transparent bg-clip-text">
                    Action
                  </span>
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
                >
                  See how 401(k) Pro streamlines plan management, automates reporting, and enhances compliance for advisors. 
                  Learn how you can save time and grow your business with our comprehensive platform.
                </motion.p>
                <motion.div variants={itemVariants}>
                  <GradientButtonWithArrow
                    buttonText="Book a Demo"
                    link="/book-a-demo"
                    showArrow={true}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoVideoSection;