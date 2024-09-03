import React from 'react';
import FeatureGrid from './FeatureGrid';
import { FileText, Clock, BarChart, Users, Shield, Briefcase, Download } from 'lucide-react';


const AutomatedReporting = () => {
  const features = [
    {
      title: "Quarterly + Annual Reports",
      description: "401k Pro generates both quarterly and annual reports for your clients, so you can keep them informed and compliant with ease.",
      icon: FileText
    },
    {
      title: "One and Done",
      description: "With 401k Pro, simply click one button and all of your compliance reporting is generated and ready to go. Reporting takes under 30 seconds.",
      icon: Clock
    },
    {
      title: "5 Pages Max",
      description: "Our reports are designed to be concise and to the point, so you can quickly and easily communicate the most important information to your clients. After all, who has time to read 80 page reports from their advisors anyway? Let's just get to the point.",
      icon: BarChart
    },
    {
      title: "Hyper-Personalized",
      description: "All of the information in your reports is simply documentation of emails and conversations you've already had with your clients, so it is always unique and personalized to them. Your practice will be scalable while never making your clients feel like they are just a number.",
      icon: Users
    },
    {
      title: "SEC Audits? No Problem",
      description: "When auditors come knocking and ask to see your plan management process, just hand over your 401k Pro reports and you're good to go. Our reports are designed to be SEC audit friendly, so you can rest easy knowing you're promoting a compliant practice.",
      icon: Shield
    },
    {
      title: "Support Your Plan Sponsors",
      description: "Under ERISA plan sponsors are supposed to be keeping documentation of their plan management process. But let's be real, they are way too busy running their business to keep up with that. With 401k Pro you can provide your plan sponsors with the documentation they need to stay compliant.",
      icon: Briefcase
    }
  ];

  const exampleReports = [
    { name: "Quarterly Report Example", url: "https://drive.google.com/file/d/1-4d6iQnDrF3L-uG-AwhNSFm2rOdPtkOX/view?usp=sharing" },
    { name: "Annual Report Example", url: "https://drive.google.com/file/d/1VyzpZ-q7BrNKzbtbhdtKQ8WXR-Paxc5a/view?usp=sharing" },
  ];

  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-10 mx-2 sm:mx-5 font-['Roboto',sans-serif]">
      <h1 className="text-3xl sm:text-4xl font-light text-center mb-3 sm:mb-4 mt-10">Automated Reporting</h1>
      <p className="text-lg sm:text-xl text-center text-gray-600 font-thin mb-8 sm:mb-12">
        Comprehensive, hyper-personalized compliance reporting in one click
      </p>
      <FeatureGrid features={features} />
      
      {/* Example Reports Download Section */}
      <div className="mt-16 bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl sm:text-3xl font-light text-center mb-6">Download Example Reports</h2>
        <p className="text-center text-gray-600 mb-8">
          See the quality and conciseness of our reports for yourself. Download these example reports to get a feel for what 401k Pro can do for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {exampleReports.map((report, index) => (
            <a
              key={index}
              href={report.url}
              download
              className="flex items-center bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              <Download size={20} className="mr-2" />
              {report.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomatedReporting;