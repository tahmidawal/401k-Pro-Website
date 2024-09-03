import React, { useEffect, useState, useRef } from 'react';
import { FaClock, FaShieldAlt, FaInfinity, FaThumbsUp, FaUsers, FaChartLine } from 'react-icons/fa';

const BenefitCard = ({ Icon, title, description, delay }) => {
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

  return (
    <div 
      ref={ref}
      className={`flex flex-col bg-white shadow-lg rounded-3xl p-8 border border-blue-500 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 text-sky-600 rounded-full p-4 mr-4">
          <Icon className="text-2xl" />
        </div>
        <h3 className="text-2xl font-extralight text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 font-normal text-lg">{description}</p>
    </div>
  );
};

const Benefits = () => {
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

  const benefits = [
    {
      Icon: FaClock,
      title: "Save Time",
      description: "Manage 401(k) plans in half the time. Compliance reporting takes seconds, allowing you to grow your business faster."
    },
    {
      Icon: FaShieldAlt,
      title: "Promote Compliance",
      description: "Integrated calendar and tracking system simplifies compliance promotion in your clients' plans."
    },
    {
      Icon: FaInfinity,
      title: "All In One Place",
      description: "Centralize client information, reports, and compliance data. No more switching between resources."
    },
    {
      Icon: FaThumbsUp,
      title: "Easy to Use",
      description: "Built-in fiduciary best practices empower advisors of all experience levels in retirement plan management."
    },
    {
      Icon: FaUsers,
      title: "All Stakeholders",
      description: "Easily communicate with TPAs, recordkeepers, and plan sponsors. Share reports and data securely."
    },
    {
      Icon: FaChartLine,
      title: "Scalable",
      description: "Grow your business effortlessly. Add new clients, plans, and users with ease, regardless of team size."
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className={`bg-white py-20 px-8 transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`} 
      id='benefits'
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extralight text-gray-800 mb-4 text-center leading-tight">Benefits of 401(k) Pro</h2>
        <p className="text-gray-600 mb-16 text-center text-xl font-normal">Make 401(k) Plan Management Easy and Scalable</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} delay={index * 200} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;