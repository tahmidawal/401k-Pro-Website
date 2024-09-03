import React from 'react';
import { ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react';

const InverseGradientButton = ({ 
  buttonText, 
  onClick, 
  showArrow = true, 
  arrowDirection = 'right' 
}) => {
  const getArrowIcon = () => {
    switch (arrowDirection) {
      case 'left':
        return <ArrowLeft size={20} />;
      case 'up':
        return <ArrowUp size={20} />;
      case 'down':
        return <ArrowDown size={20} />;
      default:
        return <ArrowRight size={20} />;
    }
  };

  return (
    <button
      type="submit"
      className="group relative inline-flex items-center justify-center py-3 px-6 rounded-full overflow-hidden transition-all duration-300"
      onClick={onClick}
    >
      {/* White background with gradient border */}
      <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] rounded-full p-[2px] transition-opacity duration-300 group-hover:opacity-0">
        <div className="bg-white h-full w-full rounded-full"></div>
      </div>
      
      {/* Gradient background (hidden by default, shown on hover) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      
      {/* Button content */}
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] transition-all duration-300 group-hover:text-white">
        {buttonText}
      </span>
      {showArrow && (
        <span className={`relative z-10 transition-all duration-300 ${
          arrowDirection === 'left' ? 'mr-3 order-first' : 'ml-3'
        }`}>
          <span className="text-[#39A5F3] group-hover:text-white">
            {getArrowIcon()}
          </span>
        </span>
      )}
    </button>
  );
};

export default InverseGradientButton;