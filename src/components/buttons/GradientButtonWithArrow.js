import React from 'react';
import { ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from 'lucide-react';

const GradientButtonWithArrow = ({ 
  buttonText, 
  onClick, 
  showArrow = true, 
  arrowDirection = 'right',
  link = null
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

  const ButtonComponent = link ? 'a' : 'button';

  return (
    <ButtonComponent
      href={link}
      type={link ? undefined : "button"}
      className="group relative inline-flex items-center justify-center py-3 px-6 rounded-full overflow-hidden transition-all duration-300"
      onClick={link ? undefined : onClick}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] transition-opacity duration-300 group-hover:opacity-0"></div>
      
      {/* White background with gradient border (hidden by default, shown on hover) */}
      <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full p-[2px]">
        <div className="bg-white h-full w-full rounded-full"></div>
      </div>
      
      {/* Button content */}
      <span className="relative z-10 text-white transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A5A9C] group-hover:to-[#39A5F3]">
        {buttonText}
      </span>
      {showArrow && (
        <span className={`relative z-10 text-white transition-all duration-300 group-hover:text-[#39A5F3] ${
          arrowDirection === 'left' ? 'mr-3 order-first' : 'ml-3'
        }`}>
          {getArrowIcon()}
        </span>
      )}
    </ButtonComponent>
  );
};

export default GradientButtonWithArrow;