import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const handleQuoteChange = (index) => {
    setCurrentQuote(index);
  };

  return (
    <div 
      ref={componentRef}
      className={`flex flex-col items-center justify-center min-h-fit-content bg-white p-4 font-['Roboto',sans-serif] mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-3xl blur-3xl opacity-30"></div>
      
      <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6 text-center z-10">What people say about us</h2>
      
      <div className="flex justify-center space-x-2 mb-6 sm:mb-8 z-10">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-6 sm:w-8 h-1 sm:h-2 rounded transition-colors duration-300 ${
              index === currentQuote ? 'bg-gray-600' : 'bg-gray-200'
            }`}
            onClick={() => handleQuoteChange(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="max-w-2xl w-full p-4 sm:p-6 border border-gray-200 rounded-lg shadow-lg relative z-10">
        <motion.blockquote
          className={`text-xl sm:text-2xl md:text-3xl font-light italic text-center mb-4 sm:mb-6`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          "{testimonials[currentQuote].quote}"
        </motion.blockquote>
        <footer className="text-center text-xs sm:text-sm text-gray-500">
          <p className="font-medium">{testimonials[currentQuote].author}</p>
          <p>{testimonials[currentQuote].position}</p>
        </footer>
      </div>
    </div>
  );
};

export default Testimonials;