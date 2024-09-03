import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Check, ArrowRight } from 'lucide-react';
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';
import WhiteButtonWithArrow from './buttons/WhiteButtonWithArrow';

const jobListings = [
  {
    title: "Sales Associate",
    features: [
      "Learn about effective implementation of AI in business",
      "Deliver unparalleled customer experiences",
      "Collaborate with innovative team",
      "Opportunity for rapid growth",
    ],
    isPopular: true
  },
  {
    title: "Full Stack Developer",
    salary: "90,000 - 120,000",
    features: [
      "Create intuitive robot interfaces",
      "Shape human-robot interactions",
      "Work with latest technologies",
      "Flexible work environment",
      "Professional development opportunities"
    ],
    isPopular: true
  },
  {
    title: "Machine Learning Intern",
    salary: "Competitive",
    features: [
      "Train and optimize AI models",
      "Work on real-world projects",
      "Learn from industry experts",
      "Potential for full-time offer",
      "Networking opportunities"
    ],
    isPopular: true
  }
];

const JobCard = ({ title, salary, features, isPopular }) => {
  return (
    <div className={`
      relative
      bg-white p-6 rounded-2xl shadow-lg w-full font-sans flex flex-col h-full border border-gray-300
      ${isPopular ? 'gradient-border' : ''}
    `}>
      <div className="flex-grow overflow-hidden">
        <h2 className="text-2xl font-extralight mb-2 leading-tight mb-5">{title}</h2>
        <ul className="space-y-2 overflow-y-auto pr-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-base font-normal text-gray-700">
              <Check className="text-sky-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
        <div className="mt-4">
          <GradientButtonWithArrow
            buttonText="Apply Now"
            onClick={() => window.location.href = '/apply'
            }
          />
      </div>
    </div>
  );
};

const CareersPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans">
      <main className="container mx-auto px-4 py-40">
        <h2 className="text-2xl sm:text-4xl font-extralight mb-3 leading-tight text-center">
          Join Our Team
        </h2>
        <p className="text-gray-500 mb-10 text-base font-normal text-center max-w-xl mx-auto">
          Help us shape the future of 401k plan management
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mb-4">
          {jobListings.map((job, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="h-full">
              <JobCard {...job} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CareersPage;