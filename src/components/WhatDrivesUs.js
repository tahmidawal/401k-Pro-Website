import React from 'react';
import { motion } from 'framer-motion';
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


const WhatDrivesUs = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover the mission and values that drive PlanSync. Learn how we empower financial advisors with AI-driven tools to thrive in the modern landscape."
        />
        <meta
          name="keywords"
          content="PlanSync mission, financial advisor tools, AI-driven advisory software, empowering advisors, AI tools for finance"
        />
        <meta property="og:title" content="What Drives Us - PlanSync" />
        <meta
          property="og:description"
          content="Learn about PlanSync's mission to empower financial advisors with AI-driven tools, ensuring efficiency and success in the AI revolution."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com/what-drives-us" />
      </Helmet>

      <div className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Mobile Design */}
          <div className="block md:hidden">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-extralight mb-4"
              >
                What{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
                  Drives Us
                </span>
              </motion.h1>
            </motion.div>

            <div className="mx-auto">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg overflow-hidden">
                  <motion.blockquote
                    variants={itemVariants}
                    className="text-xl italic mb-8 text-center text-gray-700"
                  >
                    "AI won't replace humans —<br></br>But humans with AI will replace humans without AI"
                    <footer className="mt-3 text-base text-gray-600">
                      - Harvard Business Review, November 2023
                    </footer>
                  </motion.blockquote>

                  <div className="space-y-4">
                    {[
                      "AI has the power to propel businesses forward or render them obsolete. The unfortunate reality is that due to limited access to AI and automation, an increasing number of advisory firms are falling behind.",
                      "Financial advisors play a crucial role in ensuring our world's financial security. Our mission is to prevent any advisor from being left behind in the AI revolution, as we cannot fathom a world where they cease to exist.",
                      "We challenge you to ask yourself, \"Am I doing enough to ensure my practice is as efficient as possible, enabling us to survive and thrive in this new AI-driven world?\"",
                    ].map((text, index) => (
                      <motion.p
                        key={index}
                        variants={itemVariants}
                        className="text-gray-600 leading-relaxed text-base"
                      >
                        {text}
                      </motion.p>
                    ))}

                    <motion.p
                      variants={itemVariants}
                      className="text-xl font-light text-center mt-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400"
                    >
                      Together, we strive to empower your firm to flourish in this new era of AI.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Desktop Design */}
          <div className="hidden md:block">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.h1
                variants={itemVariants}
                className="text-6xl font-extralight mb-6"
              >
                What{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
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
                    "AI won't replace humans —<br></br>But humans with AI will replace humans without AI"
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
                      className="text-2xl font-light text-center mt-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400"
                    >
                      Together, we strive to empower your firm to flourish in this new era of AI.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatDrivesUs;