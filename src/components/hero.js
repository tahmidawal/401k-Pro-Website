import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight } from 'lucide-react';
import logo from '../img/401k Pro Logo.png'; // Adjust this path if necessary

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center" id="hero">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between" data-aos="fade-in">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-5xl font-extralight text-gray-800 mb-6 leading-tight">
            Scale Your Advisory Practice
          </h1>
          <p className="text-xl font-normal text-gray-600 mb-8">
            401(k) Pro is a comprehensive 401(k) plan management and reporting tool that helps you
            manage your plan more efficiently and effectively.
          </p>
          <button className="bg-black hover:bg-gray-800 text-white font-normal py-3 px-6 rounded-full inline-flex items-center transition duration-300">
            <span>How We Can Help</span>
            <ArrowRight className="ml-2 text-sky-500" size={20} />
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md animate-float">
            <img src={logo} alt="401k Pro Logo" className="w-full h-auto mx-auto" />
          </div>
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