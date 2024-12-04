import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';

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

const testimonials = [
  {
    quote: "401k Pro has completely transformed the way we manage 401k plans.",
    author: "Chad Trevithick",
    position: "CFP, Southeast Financial Group"
  },
  {
    quote: "I can't believe how much time we've saved since switching to 401k Pro.",
    author: "Andrew Wilson",
    position: "401k Associate, Narwhal Capital"
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
    <div className="relative min-h-screen overflow-hidden py-24">
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
                <MessageSquareQuote size={48} className="text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text" />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-7xl font-extralight mb-6"
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
  );
};

export default Testimonials;