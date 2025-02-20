import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';
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

const DemoVideoSection = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Watch how PlanSync simplifies 401(k) plan management for advisors. Learn about AI-powered reporting, compliance automation, and participant tools."
        />
        <meta
          name="keywords"
          content="401k demo video, plan management tools, automated reporting, fiduciary compliance, AI for financial advisors"
        />
        <meta property="og:title" content="PlanSync - See Our Platform in Action" />
        <meta
          property="og:description"
          content="Watch how PlanSync simplifies 401(k) plan management for advisors. Learn about AI-powered reporting, compliance automation, and participant tools."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com/demo-video" />
      </Helmet>
      <section
        id="demo-video"
        className="relative flex items-center justify-center font-['Roboto',sans-serif] font-light py-12 md:py-24 overflow-hidden"
      >
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header Section - Moved outside the glass container */}
            <div className="text-center max-w-3xl mx-auto px-6 pb-12">
              <motion.h2
                variants={itemVariants}
                className="text-4xl sm:text-5xl font-light mb-6 leading-tight text-gray-900"
              >
                See PlanSync in <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">Action</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Powerful. Elegant. Simple.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 overflow-hidden max-w-5xl mx-auto"
            >
              {/* Video Section */}
              <div className="p-4 sm:p-8">
                <div className="relative group max-w-4xl mx-auto">
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
                        title="PlanSync Demo Video"
                      ></iframe>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center cursor-pointer shadow-lg"
                        >
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8 flex justify-center">
                  <GradientButtonWithArrow
                    buttonText="Book a Demo"
                    link="/contact-plansync"
                    showArrow={true}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DemoVideoSection;