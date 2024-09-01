import React from 'react';
import { FaChartLine, FaClipboardCheck, FaUserFriends, FaFileAlt, FaLock } from 'react-icons/fa';

const PlanViewCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="text-4xl text-sky-500 mb-4" />
    <h3 className="text-xl font-light mb-2">{title}</h3>
    <p className="text-gray-600 font-light">{description}</p>
  </div>
);

const ThreeSixtyPlanView = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20 font-roboto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-light text-center mb-4 mt-10">360° Plan View</h1>
        <p className="text-xl text-center text-gray-600 font-thin mb-12">
          Get a comprehensive overview of your 401(k) plans in one place
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PlanViewCard 
            icon={FaChartLine}
            title="Performance Dashboard"
            description="Real-time analytics and performance metrics for each plan at your fingertips."
          />
          <PlanViewCard 
            icon={FaClipboardCheck}
            title="Compliance Tracker"
            description="Stay on top of regulatory requirements with our built-in compliance checklist."
          />
          <PlanViewCard 
            icon={FaUserFriends}
            title="Participant Insights"
            description="Understand participant behavior and engagement with detailed analytics."
          />
          <PlanViewCard 
            icon={FaFileAlt}
            title="Document Center"
            description="Centralized storage for all plan-related documents, easily accessible and organized."
          />
          <PlanViewCard 
            icon={FaLock}
            title="Security Overview"
            description="Monitor and manage security settings to ensure data protection at all times."
          />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-light text-center mb-8">Experience the Power of 360° View</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <img 
              src="/api/placeholder/800/400" 
              alt="360 Plan View Dashboard" 
              className="w-full rounded-lg mb-6"
            />
            <p className="text-gray-600 font-light mb-6">
              Our intuitive dashboard brings together all aspects of 401(k) plan management. 
              From performance metrics to compliance status, everything you need is just a glance away.
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-normal py-3 px-6 rounded-full transition duration-300">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSixtyPlanView;