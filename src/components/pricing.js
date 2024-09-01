import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PricingTier = ({ title, price, features, isPopular }) => {
  return (
    <div className={`bg-white p-8 rounded-3xl shadow-lg w-full max-w-sm font-sans flex flex-col ${isPopular ? 'border-2 border-blue-500' : ''}`}>
      <div className="flex-grow overflow-hidden">
        {isPopular && (
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-normal mb-4 inline-block">
            Most Popular
          </span>
        )}
        <h2 className="text-3xl font-extralight mb-2 leading-tight">{title}</h2>
        <p className="text-5xl font-normal mb-6">${price}<span className="text-lg text-gray-500">/month</span></p>
        <ul className="space-y-3 overflow-y-auto max-h-[280px] pr-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-lg font-normal text-gray-700">
              <Check className="text-sky-500 mr-2 flex-shrink-0 mt-1" size={20} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full bg-black text-white py-3 px-6 rounded-full flex items-center justify-between text-lg font-normal mt-6">
        <span>Choose plan</span>
        <ArrowRight className="text-sky-400" size={24} />
      </button>
    </div>
  );
};

const PricingComponent = () => {
  const pricingTiers = [
    {
      title: "Starter",
      price: 199,
      features: ["30 day free trial", "Up to 25 plans", "Unlimited Contributors", "Master Spreadsheet", "Automated Reporting", "Plan Management Dashboard", "SOC2 Certified Security"],
      isPopular: false
    },
    {
      title: "Professional",
      price: 349,
      features: ["Everything in Basic", "30 day free trial", "Up to 100 Plans", "AI Notewriting", "Compliance Chatbot", "AI Data Entry for PDFs"],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: '999',
      features: ["Everything in Pro", "Unlimited Plans", "Custom Integrations", "Dedicated Account Manager", "Custom Reporting", "Custom Compliance Alerts"],
      isPopular: false
    }
  ];

  return ( 
    <div className="flex flex-col items-center bg-gray-100 p-8" id='pricing'>
      <h1 className="mt-5 text-3xl sm:text-5xl font-extralight mb-4 leading-tight text-center sm:text-center">
        Your all-in-one plan management platform
      </h1>

      <p className="text-gray-500 mb-12 text-lg font-normal text-center max-w-2xl">
        Priced for advisors of all sizes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-5">
        {pricingTiers.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;