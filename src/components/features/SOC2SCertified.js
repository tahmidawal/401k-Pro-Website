import React, { useState } from 'react';
import { ShieldCheck, Check, ChevronDown, ChevronUp } from 'lucide-react';

const SecurityCategory = ({ title, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg p-2 border border-gray-200 mb-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-light text-gray-800">{title}</h3>
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {isExpanded && (
        <ul className="mt-4 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="flex-shrink-0 h-5 w-5 text-green-500 mr-3 mt-1 text-normal" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SOC2CertificationPage = () => {
  const securityCategories = [
    {
      title: "Network Security",
      features: [
        "Virtual Private Cloud to isolate the application",
        "Web Application Firewall in AWS",
        "Content Delivery in HTTPS",
        "AWS S3 encryption at rest",
        "AWS S3 backup encryption at transmission"
      ]
    },
    {
      title: "Data Protection",
      features: [
        "Encryption at rest for Database",
        "Encryption at rest for app",
        "User parametrized queries to prevent SQL Injections",
        "HTTPonly cookies",
        "Encrypt Cookies",
        "Include Limits on Cookies"
      ]
    },
    {
      title: "Access Control",
      features: [
        "Multi-Factor Authentication (MFA)",
        "JWT tokens",
        "Automated logout",
        "Role based access control"
      ]
    },
    {
      title: "Monitoring and Testing",
      features: [
        "AWS Cloudwatch",
        "Amazon inspector for automated vulnerability testing",
        "Regular security assessment and pen testing",
        "Rate limiting on all API endpoints"
      ]
    },
    {
      title: "Backup and Recovery",
      features: [
        "Regular backups",
        "Regular rollbacks",
        "Disaster Recovery Process",
        "Backup system ready to be deployed"
      ]
    },
    {
      title: "Application Security",
      features: [
        "Containerize application into docker",
        "Never let sensitive info be displayed on the error page",
        "AWS Secrets manager or parameter store for .env files",
        "AWS Secrets manager or parameter store for .env files backup",
        "Rotate credentials every 3 days"
      ]
    },
    {
      title: "Data Management",
      features: [
        "Have process for secure disposal of data"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-roboto">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-4xl font-extralight mb-4 text-gray-900 mt-20">
            SOC2 Certified
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rest easy knowing your data is protected by top security practices.
          </p>
          <ShieldCheck className="mx-auto h-20 w-20 mt-4 text-sky-500" style={{ color: 'url(#shieldGradient)' }} />
        </div>

        <div className="bg-white shadow-xl rounded-lg p-8 mb-12 border border-gray-200">
          <h2 className="text-2xl font-light mb-6 text-gray-800 border-b border-gray-200 pb-4">
            Comprehensive Security Measures
          </h2>
          <div className="space-y-4">
            {securityCategories.map((category, index) => (
              <SecurityCategory key={index} title={category.title} features={category.features} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-light mb-4 text-gray-800">About SOC2 Certifications</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            SOC2 (Service Organization Control 2) is an auditing procedure that ensures service providers securely manage data to protect the interests of our organization and the privacy of its clients. Type 1 certification verifies that our security controls are suitably designed and implemented.
          </p>
          <a 
            href="https://www.neumetric.com/soc-2-type-1-compliance/" 
            className="inline-block text-white font-light py-2 px-6 rounded-full hover:opacity-90 transition duration-300"
            style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default SOC2CertificationPage;