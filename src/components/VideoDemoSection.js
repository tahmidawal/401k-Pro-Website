import React from 'react';
import { motion } from 'framer-motion';
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const DemoVideoSection = () => {
  return (
    <section id="demo-video" className="py-16 sm:py-24 bg-gray-50 min-h-screen flex items-center justify-center font-['Roboto',sans-serif] font-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInSection>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6 sm:p-10">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-md">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/zIQcvItt1HE" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight mb-6 leading-tight">
                  <span className="text-gray-800">Watch 401(k) Pro in</span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3]">Action</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-8">
                  See how 401(k) Pro streamlines plan management, automates reporting, and enhances compliance for advisors. 
                  Learn how you can save time and grow your business with our comprehensive platform.
                </p>
                <GradientButtonWithArrow
                  buttonText="Book a Demo"
                  link="/book-a-demo"
                  showArrow={false}
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default DemoVideoSection;