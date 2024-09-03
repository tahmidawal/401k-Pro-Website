import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getTransformStyle = () => {
    switch (direction) {
      case 'up':
        return 'translate-y-10';
      case 'down':
        return '-translate-y-10';
      case 'left':
        return 'translate-x-10';
      case 'right':
        return '-translate-x-10';
      default:
        return 'translate-y-10';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-in-out ${
        isVisible 
          ? 'opacity-100 transform-none' 
          : `opacity-0 transform ${getTransformStyle()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;