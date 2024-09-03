import React from 'react';
import { Icon } from 'lucide-react';

const FeatureDescription = ({ title, description, icon: IconComponent }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full flex flex-col justify-start items-start border border-gray-300 font-['Roboto',sans-serif]">
      <div className="flex items-center mb-4">
        <IconComponent className="text-blue-500 mr-3" size={24} />
        <h2 className="text-2xl font-light">{title}</h2>
      </div>
      <p className="text-left font-normal">{description}</p>
    </div>
  );
};

const FeatureRow = ({ features }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-8">
      {features.map((feature, index) => (
        <FeatureDescription
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

const FeatureGrid = ({ features }) => {
  const rows = [];
  for (let i = 0; i < features.length; i += 2) {
    rows.push(features.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col">
      {rows.map((row, index) => (
        <FeatureRow key={index} features={row} />
      ))}
    </div>
  );
};

export default FeatureGrid;