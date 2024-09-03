import React, { useEffect, useState, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PricingTier = ({ title, price, features, isPopular, delay, stripeLink }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const handleButtonClick = () => {
    if (stripeLink) {
      window.location.href = stripeLink;
    }
  };

  const buttonText = title === "Enterprise" ? "Let's Talk" : "Start Now";

  return (
    <div 
      ref={ref}
      className={`bg-white p-6 rounded-2xl shadow-lg w-full max-w-xs font-sans flex flex-col ${
        isPopular ? 'border-2 border-blue-500' : ''
      } transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex-grow">
        {/* {isPopular && (
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-normal mb-3 inline-block">
            Most Popular
          </span>
        )} */}
        <h2 className="text-2xl font-extralight mb-2 leading-tight">{title}</h2>
        <p className="text-4xl font-normal mb-4">${price}<span className="text-base text-gray-500">/month</span></p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-base font-normal text-gray-700">
              <Check className="text-sky-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button 
        className="w-full text-white py-2 px-4 rounded-full flex items-center justify-center text-base font-normal mt-6"
        style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}
        onClick={handleButtonClick}
      >
        <span>{buttonText}</span>
        
      </button>
    </div>
  );
};

const PricingComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const pricingTiers = [
    {
      title: "Starter",
      price: 199,
      features: ["30 day free trial", "Up to 25 plans", "Unlimited Contributors", "Master Spreadsheet", "Automated Reporting", "Plan Management Dashboard", "SOC2 Certified Security"],
      isPopular: false,
      stripeLink: "https://buy.stripe.com/fZebM80V65RVdb2144"
    },
    {
      title: "Professional",
      price: 349,
      features: ["Everything in Basic", "30 day free trial", "Up to 100 Plans", "AI Notewriting", "Regulatory Chatbot", "AI Data Entry for PDFs"],
      isPopular: true,
      stripeLink: "https://buy.stripe.com/4gw3fCeLW2FJ2wofYZ"
    },
    {
      title: "Enterprise",
      price: '999+',
      features: ["Everything in Pro", "Unlimited Plans", "Custom Integrations", "Dedicated Account Manager", "Custom Reporting", "Custom Compliance Alerts"],
      isPopular: false,
      stripeLink: "#contact-section"
    }
  ];

  return ( 
    <div 
      ref={sectionRef}
      className={`flex flex-col items-center bg-gray-100 p-6 sm:p-8 md:p-12 lg:p-20 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      id='pricing'
    >
      <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extralight mb-3 leading-tight text-center">
        Your all-in-one plan management platform
      </h1>
      <p className="text-gray-500 mb-8 text-base font-normal text-center max-w-xl">
        Priced for advisors of all sizes
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mb-4">
        {pricingTiers.map((tier, index) => (
          <PricingTier key={index} {...tier} delay={index * 200} />
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;