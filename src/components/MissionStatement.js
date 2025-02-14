import React from 'react';
import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>Our Mission - PlanSync</title>
        <meta
          name="description"
          content="At PlanSync, we are on a mission to transform 401(k) plan management. Learn how our tools empower advisors and businesses to thrive in an AI-driven world."
        />
        <meta
          name="keywords"
          content="PlanSync mission, 401k plan management, AI tools for advisors, business transformation, retirement planning tools"
        />
        <meta property="og:title" content="Our Mission - PlanSync" />
        <meta
          property="og:description"
          content="Discover how PlanSync is revolutionizing 401(k) management with cutting-edge tools and a commitment to advisor success."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com/mission" />
      </Helmet>

      <div className="relative overflow-hidden font-['Roboto',sans-serif] font-light">
        {/* Background animations - adjust sizes for mobile */}
        <FloatingElement>
          <div className="absolute top-0 left-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-0 right-0 w-[200px] sm:w-[600px] h-[200px] sm:h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </FloatingElement>

        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-24 relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 sm:mb-32"
          >
            <h1 className="text-4xl sm:text-6xl font-extralight mb-6 sm:mb-8 px-2">
              Let's
              <span className="relative mx-2 sm:mx-4">
                <span className="relative z-10 text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text">
                  Fix
                </span>
                <div className="absolute inset-x-0 bottom-0 h-3 sm:h-4 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 -z-10 transform skew-x-12"></div>
              </span>
              Plan Management
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4 sm:space-y-6 max-w-3xl mx-auto px-4"
            >
              <div className="relative p-4 sm:p-8">
                <FloatingElement>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-xl sm:rounded-3xl"></div>
                </FloatingElement>

                <div className="space-y-4 sm:space-y-6 relative z-10">
                  <p className="text-base sm:text-xl text-gray-600">
                    94% of US businesses offer retirement plans to their employees.
                  </p>
                  <p className="text-base sm:text-xl text-gray-600">
                    And yet, 401(k) plan management is broken.
                  </p>
                  <p className="text-xl sm:text-2xl font-light">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                      So, we're fixing it.
                    </span>
                  </p>
                </div>
              </div>

              <motion.div
                className="flex justify-center mt-8 sm:mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <a
                  href="/book-a-demo"
                  className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base hover:shadow-lg transition-shadow duration-300"
                >
                  <span>See How</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MissionStatement;