import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

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

const WhatDrivesUs = () => {
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
                <Quote size={48} className="text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text" />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-7xl font-extralight mb-6"
          >
            What{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Drives Us
            </span>
          </motion.h1>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-lg overflow-hidden">
              <motion.blockquote 
                variants={itemVariants}
                className="text-2xl italic mb-12 text-center text-gray-700"
              >
                "AI won't replace humans — but humans with AI will replace humans without AI"
                <footer className="mt-4 text-lg text-gray-600">
                  - Harvard Business Review, November 2023
                </footer>
              </motion.blockquote>

              <div className="space-y-6">
                {[
                  "AI has the power to propel businesses forward or render them obsolete. The unfortunate reality is that due to limited access to AI and automation, an increasing number of advisory firms are falling behind.",
                  "Financial advisors play a crucial role in ensuring our world's financial security. Our mission is to prevent any advisor from being left behind in the AI revolution, as we cannot fathom a world where they cease to exist.",
                  "We challenge you to ask yourself, \"Am I doing enough to ensure my practice is as efficient as possible, enabling us to survive and thrive in this new AI-driven world?\"",
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    variants={itemVariants}
                    className="text-gray-600 leading-relaxed text-lg"
                  >
                    {text}
                  </motion.p>
                ))}

                <motion.p
                  variants={itemVariants}
                  className="text-2xl font-light text-center mt-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"
                >
                  Together, we strive to empower your firm to flourish in this new era of AI.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatDrivesUs;