import React, { useState } from 'react';

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

  return (
    <div className="flex flex-col items-center justify-center min-h-fit-content bg-white p-4 font-['Roboto',sans-serif] mt-20 mb-20">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
      `}</style>
      
      <h2 className="text-2xl font-light mb-6 text-center">What people say about us</h2>
      
      <div className="flex justify-center space-x-2 mb-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-8 h-2 rounded transition-colors duration-300 ${
              index === currentQuote ? 'bg-gray-600' : 'bg-gray-200'
            }`}
            onClick={() => setCurrentQuote(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <div className="max-w-2xl w-full p-6 border border-gray-200 rounded-lg shadow-lg">
        <blockquote className="text-3xl font-light italic text-center mb-6">
          "{testimonials[currentQuote].quote}"
        </blockquote>
        <footer className="text-center text-sm text-gray-500">
          <p className="font-medium">{testimonials[currentQuote].author}</p>
          <p>{testimonials[currentQuote].position}</p>
        </footer>
      </div>
    </div>
  );
};

export default Testimonials;
