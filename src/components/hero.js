import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, BarChart2, Users, ShieldCheck, FileText } from 'lucide-react';
import logo from '../img/401k Pro Logo.png'; // Adjust this path if necessary
import FadeInSection from './FadeInSection';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: BarChart2, text: "360° Plan View" },
    { icon: Users, text: "Client Management" },
    { icon: ShieldCheck, text: "Compliance Tools" },
    { icon: FileText, text: "Automated Reporting" },
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center -mt-5" id="hero">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between" data-aos="fade-in">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-800 mb-6 leading-tight">
            Scale Your Advisory Practice
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-normal text-gray-600 mb-8">
            401(k) Pro is a comprehensive 401(k) plan management and reporting tool that helps you
            manage your plan more efficiently and effectively.
          </p>
          <button 
            className="hover:bg-gray-800 text-white font-normal py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-flex items-center transition duration-300 text-sm sm:text-base"
            onClick={scrollToBenefits}
            style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}
          >
            <span>How We Can Help</span>
            <ArrowRight className="ml-2 text-white" size={18} />
          </button>
        </div>

        {/* Image - Hidden on small screens */}
        <div className="w-full lg:w-1/2 justify-center hidden lg:flex">
          <div className="w-full max-w-md animate-float">
            <img src={logo} alt="401k Pro Logo" className="w-full h-auto mx-auto" />
          </div>
        </div>
      </div>

      {/* Mobile Feature Showcase */}
      <div className="mt-2 lg:hidden">
        <h2 className="text-xl sm:text-2xl font-extralight text-gray-800 mb-6 text-center" data-aos="fade-up">Key Features</h2>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-3 sm:p-4 rounded-lg text-center shadow-md transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <feature.icon className="mx-auto mb-2 text-blue-600" size={20} />
              <p className="text-xs sm:text-sm font-normal text-gray-700">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;