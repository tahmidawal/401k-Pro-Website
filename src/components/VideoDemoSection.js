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
        <title>PlanSync - See Our Platform in Action</title>
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
              {/* Mobile Design */}
              <div className="block md:hidden">
                <div className="p-6">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-extralight mb-4 leading-tight text-gray-800"
                  >
                    See PlanSync in Action
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-base text-gray-600 mb-6 leading-relaxed"
                  >
                    Discover how PlanSync streamlines plan management, automates reporting, and enhances compliance. Save time, reduce complexity, and grow your advisory business.
                  </motion.p>
                </div>
                
                <div className="px-4 pb-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="relative">
                      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
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
                            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center cursor-pointer"
                          >
                            <Play className="w-5 h-5 text-white fill-current" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <GradientButtonWithArrow
                      buttonText="Book a Demo"
                      link="/book-a-demo"
                      showArrow={true}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Design */}
              <div className="hidden md:flex flex-col md:flex-row">
                {/* Video Section */}
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
                          title="PlanSync Demo Video"
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

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                  <motion.h2
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl font-extralight mb-6 leading-tight"
                  >
                    <span className="text-gray-800">See PlanSync in</span>{" "}
                    <span className="text-gray-800 bg-clip-text">
                      Action
                    </span>
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
                  >
                    Discover how PlanSync streamlines plan management, automates reporting, and enhances compliance. Save time, reduce complexity, and grow your advisory business.
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
    </>
  );
};

export default DemoVideoSection;