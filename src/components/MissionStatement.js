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
    <section className="mt-12 sm:mt-16 md:mt-20" id='why-401k-pro'>
      <div 
        className={`container mx-auto px-4 max-w-4xl text-center transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="mt-3 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4 leading-tight text-center">
          Let's fix Plan Management
        </h1>
        <p className="mt-6 sm:mt-8 md:mt-10 text-base sm:text-lg md:text-xl font-normal text-gray-600">
          94% of US businesses offer retirement plans to their employees.
        </p>
        <p className="mt-3 text-base sm:text-lg md:text-xl font-normal text-gray-600">
          And yet, 401k plan management is broken.
        </p>
        <p className="mt-5 text-base sm:text-lg md:text-xl font-normal mb-6 sm:mb-8 gradient-text">
          So, we're fixing it.
        </p>
      </div>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(to right, #0A5A9C, #39A5F3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default MissionStatement;