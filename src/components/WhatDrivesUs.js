import React from 'react';
import FadeInSection from './FadeInSection';
import { motion } from 'framer-motion';

const WhatDrivesUs = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-white relative z-10">
        <FadeInSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight mb-6 sm:mb-8 text-center">
            What Drives Us
          </h2>
        </FadeInSection>
        
        <FadeInSection delay={50}>
          <blockquote className="text-lg sm:text-xl md:text-2xl italic mb-8 sm:mb-12 text-center">
            "AI won't replace humans — but humans with AI will replace humans without AI"
            <footer className="mt-2 text-base sm:text-lg">
              - Harvard Business Review, November 2023
            </footer>
          </blockquote>
        </FadeInSection>
        
        <div className="space-y-6 sm:space-y-8 text-base sm:text-normal">
          <FadeInSection delay={100}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              In today's world, AI has the power to propel businesses forward or render them obsolete. The unfortunate reality is that due to limited access to AI and automation, an increasing number of advisory firms are falling behind.
            </motion.p>
          </FadeInSection>
          
          <FadeInSection delay={150}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Financial advisors play a crucial role in ensuring our world's financial security. Our mission is to prevent any advisor from being left behind in the AI revolution, as we cannot fathom a world where they cease to exist.
            </motion.p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We challenge you to ask yourself, <span className="italic font-medium">"Am I doing enough to ensure my practice is as efficient as possible, enabling us to survive and thrive in this new AI-driven world?"</span>
            </motion.p>
          </FadeInSection>
          
          <FadeInSection delay={250}>
            <motion.p
              className="text-lg sm:text-md md:text-2xl font-medium italic text-center mt-8 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Together, we strive to empower your firm to flourish in this new era of AI.
            </motion.p>
          </FadeInSection>
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default WhatDrivesUs;