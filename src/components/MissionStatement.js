import { color } from 'chart.js/helpers';
import React, { useState, useEffect } from 'react';

const MissionStatement = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 mt-20">
      <div 
        className={`container mx-auto px-4 max-w-4xl text-center transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="mt-5 text-3xl sm:text-5xl font-light mb-4 leading-tight text-center">
          Let's fix Plan Management
        </h1>
        <p className="mt-10 text-xl font-normal text-gray-600">
          94% of US businesses offer retirement plans to their employees.
        </p>
        <p className="text-xl font-normal mb-8 text-gray-600">
          And yet, 401k plan management is broken.
        </p>
        <p className="text-xl font-normal mb-8" style={{ 
          background: 'linear-gradient(to right, #0A5A9C, #39A5F3)', 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          So, we're fixing it.
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;