import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const iframeRef = useRef(null);
  
  // Video data
  const videos = [
    {
      id: 'explainer',
      title: 'PlanSync Explainer',
      src: 'https://www.youtube.com/embed/V9L08xXnFn8?enablejsapi=1',
      description: 'Learn how PlanSync streamlines plan management and enhances compliance for financial advisors.'
    },
    {
      id: 'feature-overview',
      title: 'Live Demo',
      src: 'https://www.youtube.com/embed/qJ9SYE9Yne0?enablejsapi=1',
      description: 'Explore the key features that make PlanSync the leading platform for 401(k) plan management.'
    }
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    setIsVideoPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    setIsVideoPlaying(false);
  };

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
    // Get the current iframe and post a message to play the video
    const iframe = document.querySelector(`iframe[title="${currentVideo.title}"]`);
    if (iframe) {
      // Add autoplay parameter to the src
      const currentSrc = iframe.src;
      if (!currentSrc.includes('autoplay=1')) {
        iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'autoplay=1';
      }
    }
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Watch how PlanSync simplifies 401(k) plan management for advisors. Learn about AI-powered reporting, compliance automation, and participant tools."
          id="demo-video" 
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
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden border border-gray-200"
            >
              {/* Mobile Design */}
              <div className="block md:hidden">
                <div className="p-6 text-center">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl font-extralight mb-4 leading-tight"
                  >
                    <span className="text-3xl md:text-6xl font-extralight mb-4 md:mb-6">See PlanSync in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Action</span></span>
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
                      <div 
                        className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl cursor-pointer"
                        onClick={handleVideoClick}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-900/10 backdrop-blur-sm"></div>
                        <iframe
                          ref={iframeRef}
                          className="absolute top-0 left-0 w-full h-full"
                          src={currentVideo.src}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={currentVideo.title}
                        ></iframe>
                      </div>
                      
                      {/* Carousel Controls - Mobile */}
                      <div className="mt-4 flex justify-between items-center">
                        <button 
                          onClick={prevVideo}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Previous video"
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-700" />
                        </button>
                        
                        <div className="flex space-x-2">
                          {videos.map((video, index) => (
                            <button
                              key={video.id}
                              onClick={() => {
                                setCurrentVideoIndex(index);
                                setIsVideoPlaying(false);
                              }}
                              className={`w-2 h-2 rounded-full ${
                                index === currentVideoIndex 
                                  ? 'bg-blue-500' 
                                  : 'bg-gray-300'
                              }`}
                              aria-label={`Go to video ${index + 1}`}
                            />
                          ))}
                        </div>
                        
                        <button 
                          onClick={nextVideo}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Next video"
                        >
                          <ChevronRight className="w-5 h-5 text-gray-700" />
                        </button>
                      </div>
                      
                      <div className="mt-3 text-center">
                        <h3 className="font-medium text-gray-800">{currentVideo.title}</h3>
                        <p className="text-sm text-gray-600">{currentVideo.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <GradientButtonWithArrow
                      buttonText="Book a Demo"
                      link="/contact-plansync"
                      showArrow={true}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Design */}
              <div className="hidden md:flex flex-col">
                {/* Text Section */}
                <div className="w-full p-6 sm:p-8 flex flex-col items-center text-center mb-4 mt-12">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl font-extralight mb-6 leading-tight"
                  >
                    <span className="text-3xl md:text-6xl font-extralight mb-4 md:mb-6">See PlanSync in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Action</span></span>{" "}
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl"
                  >
                    Discover how PlanSync streamlines plan management, automates reporting, and enhances compliance. Save time, reduce complexity, and grow your advisory business.
                  </motion.p>
                </div>

                {/* Video Section */}
                <div className="w-full p-6 sm:p-8">
                  <div className="relative group max-w-4xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="relative">
                      <div 
                        className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl cursor-pointer"
                        onClick={handleVideoClick}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 to-gray-900/10 backdrop-blur-sm"></div>
                        <iframe
                          ref={iframeRef}
                          className="absolute top-0 left-0 w-full h-full"
                          src={currentVideo.src}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={currentVideo.title}
                        ></iframe>
                      </div>
                      
                      {/* Carousel Controls - Desktop */}
                      <div className="mt-6 flex justify-between items-center">
                        <button 
                          onClick={prevVideo}
                          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Previous video"
                        >
                          <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        
                        <div className="flex items-center space-x-6">
                          {videos.map((video, index) => (
                            <button
                              key={video.id}
                              onClick={() => {
                                setCurrentVideoIndex(index);
                                setIsVideoPlaying(false);
                              }}
                              className={`flex flex-col items-center space-y-2 transition-opacity ${
                                index === currentVideoIndex 
                                  ? 'opacity-100' 
                                  : 'opacity-60 hover:opacity-80'
                              }`}
                              aria-label={`Go to ${video.title}`}
                            >
                              <div className={`h-1 w-16 rounded-full ${index === currentVideoIndex ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                              <span className={`text-sm font-medium ${index === currentVideoIndex ? 'text-blue-500' : 'text-gray-600'}`}>
                                {video.title}
                              </span>
                            </button>
                          ))}
                        </div>
                        
                        <button 
                          onClick={nextVideo}
                          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Next video"
                        >
                          <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                      </div>
                      
                      <div className="mt-4 text-center">
                        <p className="text-gray-600">{currentVideo.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <GradientButtonWithArrow
                      buttonText="Book a Demo"
                      link="/contact-plansync"
                      showArrow={true}
                    />
                  </div>
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