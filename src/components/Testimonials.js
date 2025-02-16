import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

// Testimonials data
const testimonials = [
  {
    quote: "PlanSync has completely transformed the way we manage 401k plans.",
    author: "Chad Trevithick",
    position: "CFP, Southeast Financial Group"
  },
  {
    quote: "I can't believe how much time we've saved since switching to PlanSync.",
    author: "Andrew Wilson",
    position: "401k Associate, Narwhal Capital"
  },
  {
    quote: "Every day I coach retirement plan specialist advisors on improving their practice management. They are looking for a solution to help them scale and grow their plan business. Top advisors are managing their sales pipeline and client service activity with an excel spreadsheet – even if they have access to Salesforce or other tools! The business is complex and they are asking me how others are solving this industry-wide problem. PlanSync AI is what advisors are asking for.",
    author: "Robin Green",
    position: "President, WinMore Plans"
  },
  {
    quote: "PlanSync AI houses all my 401k plan data in one place, gives me a template to follow for plan compliance requirements and takes the due diligence report writing down to almost nothing. This tool is the best solution I have seen !",
    author: "David Wright",
    position: "Founder, Capital Insurance & Financial Services"
  },
  
  
];

const Testimonials = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % testimonials.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>What People Say About PlanSync</title>
        <meta
          name="description"
          content="Read testimonials from advisors who trust PlanSync for managing retirement plans. See how our platform transforms plan management and saves time."
        />
        <meta
          name="keywords"
          content="PlanSync testimonials, advisor reviews, retirement plan software feedback, plan management tools, automated compliance tools"
        />
        <meta property="og:title" content="What People Say About PlanSync" />
        <meta
          property="og:description"
          content="Discover what advisors say about PlanSync. Testimonials highlight time savings, efficiency, and the value of our AI-driven tools."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com/testimonials" />
      </Helmet>

      <div className="relative overflow-hidden py-24">
        {/* Animated background elements */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </motion.div>

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
                What People{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                  Say
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
                  <div className="flex items-center justify-between mb-6">
                    <button 
                      onClick={prevQuote}
                      className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          className={`w-6 h-1.5 rounded transition-colors duration-300 ${
                            index === currentQuote ? 'bg-gradient-to-r from-blue-600 to-cyan-400' : 'bg-gray-200'
                          }`}
                          onClick={() => setCurrentQuote(index)}
                          aria-label={`View testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                    <button 
                      onClick={nextQuote}
                      className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  <motion.div
                    key={currentQuote}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <blockquote className="text-xl font-light mb-6 text-gray-700">
                      "{testimonials[currentQuote].quote}"
                    </blockquote>
                    <footer className="text-gray-600">
                      <p className="text-lg font-medium mb-1">{testimonials[currentQuote].author}</p>
                      <p className="text-base">{testimonials[currentQuote].position}</p>
                    </footer>
                  </motion.div>
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
                What People{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                  Say
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
                  <div className="flex items-center justify-between mb-8">
                    <button 
                      onClick={prevQuote}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          className={`w-8 h-2 rounded transition-colors duration-300 ${
                            index === currentQuote ? 'bg-gradient-to-r from-blue-600 to-cyan-400' : 'bg-gray-200'
                          }`}
                          onClick={() => setCurrentQuote(index)}
                          aria-label={`View testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                    <button 
                      onClick={nextQuote}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>

                  <motion.div
                    key={currentQuote}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <blockquote className="text-3xl font-light mb-8 text-gray-700">
                      "{testimonials[currentQuote].quote}"
                    </blockquote>
                    <footer className="text-gray-600">
                      <p className="text-xl font-medium mb-2">{testimonials[currentQuote].author}</p>
                      <p className="text-lg">{testimonials[currentQuote].position}</p>
                    </footer>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;