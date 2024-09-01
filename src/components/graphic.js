import React from 'react';
import greenGraphic from '../img/graphic-green.png';
import redGraphic from '../img/graphic-red.png';

const GraphicSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Complete the Circle</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        401(k) Pro completes the advisors 401k Plan Management circle by providing the first scalable method of taking care of your fiduciary responsibilities.
      </p>
      
      <style>{`
        @keyframes fade {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          60% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-fade {
          animation: fade 7.5s infinite;
        }
      `}</style>

      <div className="relative w-full max-w-3xl aspect-video flex justify-center items-center border-4 border-gray-300 p-4 shadow-2xl rounded-lg">
        <img 
          src={greenGraphic}
          alt="Green Graphic" 
          className="absolute top-0 left-0 w-full h-auto animate-fade"
          style={{ animationDelay: '0s' }}
        />
        <img 
          src={redGraphic}
          alt="Red Graphic"
          className="absolute top-0 left-0 w-full h-auto animate-fade"
          style={{ animationDelay: '3.75s' }}
        />
      </div>
    </div>
  );
};

export default GraphicSection;