import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Clock, ClipboardCheck, Users, Shield, UserPlus, Download, FileDigit } from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';

const GradientIcon = ({ icon: Icon }) => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0A5A9C" />
        <stop offset="100%" stopColor="#39A5F3" />
      </linearGradient>
    </defs>
    <Icon stroke="url(#icon-gradient)" />
  </svg>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
    whileHover={{ y: -5, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-12 h-12 mb-4">
      <GradientIcon icon={icon} />
    </div>
    <h3 className="text-xl font-light mb-2">{title}</h3>
    <p className="text-gray-600 text-sm font-light">{description}</p>
  </motion.div>
);

const DownloadButton = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center justify-center py-3 px-6 rounded-full overflow-hidden transition-all duration-300"
  >
    <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] rounded-full p-[2px] transition-opacity duration-300 group-hover:opacity-0">
      <div className="bg-white h-full w-full rounded-full"></div>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] transition-all duration-300 group-hover:text-white flex items-center">
      <span className="mr-2 transition-all duration-300">
        <Download size={20} className="text-[#0A5A95] text-light group-hover:text-white" />
      </span>
      {name}
    </span>
  </a>
);

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AutomatedReporting = () => {
  const features = [
    {
      title: "Quarterly + Annual Reports",
      description: "401k Pro generates both quarterly and annual reports for your clients, so you can keep them informed and compliant with ease.",
      icon: ClipboardCheck
    },
    {
      title: "One and Done",
      description: "With 401k Pro, simply click one button and all of your compliance reporting is generated and ready to go. Reporting takes under 30 seconds.",
      icon: Clock
    },
    {
      title: "5 Pages Max",
      description: "Our reports are designed to be concise and to the point, so you can quickly and easily communicate the most important information to your clients. After all, who has time to read 80 page reports from their advisors anyway? Let's just get to the point.",
      icon: FileText
    },
    {
      title: "Hyper-Personalized",
      description: "All of the information in your reports is simply documentation of emails and conversations you've already had with your clients, so it is always unique and personalized to them. Your practice will be scalable while never making your clients feel like they are just a number.",
      icon: Users
    },
    {
      title: "Due dilligence? No Problem",
      description: "Record-keeping is effortless with 401k Pro. Our reports are designed to demonstrate your diligence in meeting fiduciary responsibilities, making it easy to showcase your efforts.",
      icon: Shield
    },
    {
      title: "Support Your Plan Sponsors",
      description: "Under ERISA, plan sponsors are required to maintain documentation of their plan management process. However, realistically, they're often too busy running their businesses to keep up with this requirement. With 401k Pro, you can provide your plan sponsors with the necessary documentation to stay compliant.",
      icon: UserPlus
    }
  ];

  const exampleReports = [
    { name: "Quarterly Report Example", url: "https://drive.google.com/file/d/1-4d6iQnDrF3L-uG-AwhNSFm2rOdPtkOX/view?usp=sharing" },
    { name: "Annual Report Example", url: "https://drive.google.com/file/d/1VyzpZ-q7BrNKzbtbhdtKQ8WXR-Paxc5a/view?usp=sharing" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-['Roboto',sans-serif] font-light">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 leading-tight">
            <span className="text-gray-700">Automated</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3]">Reporting</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive, hyper-personalized compliance reporting in one click
          </p>
        </motion.div>

        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="bg-white p-8 rounded-3xl shadow-lg mb-16 mt-16">
            <h2 className="text-3xl font-light mb-8 text-center text-gray-800">How It Works</h2>
            <div className="space-y-4">
              {[
                "Track your plan touchpoints and requirements over the course of the year",
                "Select the type of report you'd like to generate",
                "Click one button and generate your report",
                "Download and make any necessary edits",
                "Send to your clients",
                "That's it!"
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-gray-50 rounded-2xl p-4"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex-shrink-0 mr-6">
                    <span className="bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-medium">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 flex-grow">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-light text-center mb-6 text-gray-800">Download Example Reports</h2>
            <p className="text-center text-gray-600 mb-8">
              See the quality and conciseness of our reports for yourself.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {exampleReports.map((report, index) => (
                <DownloadButton key={index} {...report} />
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center mt-16">
            <h2 className="text-3xl font-light mb-6 text-gray-800">Ready to streamline your reporting?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the growing number of companies benefiting from our automated reporting solution.
            </p>
            <GradientButtonWithArrow 
              buttonText="Get Started" 
              link="/book-a-demo"
              showArrow={false}
            />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default AutomatedReporting;