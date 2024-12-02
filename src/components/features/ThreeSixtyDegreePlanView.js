import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FeatureDivWithImage from './FeatureDivWithImage';
import MasterSpreadsheetMainImage from './MasterSpreadsheetMain.png';
import ThreeSixyPlanViewImage from './ThreeSixtyPlanView.png';
import PDFUploadVideo from './PDFUpload.mp4';
import DashboardImage from './Dashboard.png';
import WhiteButtonWithArrow from '../buttons/WhiteButtonWithArrow'
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';

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

const ThreeSixtyDegreePlanView = () => {
  const planViewDetails = [
    { title: "Client Information", description: "Keep all essential client details in one place for easy access and management." },
    { title: "Plan Touchpoints", description: "Track and manage all interactions and key events related to each plan." },
    { title: "Fiduciary Requirements Checklist", description: "Promote compliance with a comprehensive checklist of fiduciary responsibilities and assign responsibilities to their designated stakeholders." },
    { title: "Plan Design and Elections", description: "Document and track plan design features and elections for each client." },
    { title: "Plan Performance", description: "Monitor and analyze the performance of each plan over time." },
    { title: "Advisor Service Schedule", description: "Manage and track your service commitments for each plan." },
    { title: "Fee Schedule", description: "Maintain clear and transparent fee information for each plan." },
    { title: "Client Prospecting", description: "Keep track of potential clients and manage your sales pipeline." }
  ];

  return (
    <div className="bg-white min-h-screen font-['Roboto',sans-serif] font-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      <FloatingElement>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </FloatingElement>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3]">
              360° Plan View
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get a comprehensive overview of your 401(k) plans in one place
          </p>
        </motion.div>

        <div className="space-y-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] blur-3xl opacity-10 -z-10"></div>
            <FeatureDivWithImage
              title="401k Pro Master Spreadsheet"
              description="Our Master Spreadsheet allows you to keep all of your fiduciary plan management information in one place. Everything you need is now at your fingertips."
              image={MasterSpreadsheetMainImage}
              imageAlt="Master Spreadsheet"
              imageOnRight={false}
            />
          </div>
          
          <FeatureDivWithImage
            title="Everything You Need, Nothing You Don't"
            description="Our Master Spreadsheet allows you to keep all of the most important information for your 401(k) plan management in one place. Click below to learn more about each feature."
            image={ThreeSixyPlanViewImage}
            imageAlt="360° Plan View"
            imageOnRight={true}
          >
            <div className="mt-6">
              <WhiteButtonWithArrow 
                buttonText="See What's Included" 
                link="#plan-view-details"
                showArrow={true}
              />
            </div>
          </FeatureDivWithImage>
          
          <FeatureDivWithImage
            title="AI Powered Data Entry"
            description="Hate entering data by hand? Trust us, we do too. That's why we've built an AI powered data entry system that can read and understand your PDFs, and automatically enter the data into your Master Spreadsheet for you."
            image={PDFUploadVideo}
            imageAlt="PDF Upload Video"
            imageOnRight={false}
          />

          <FeatureDivWithImage
            title="Comprehensive Dashboard"
            description="Our dashboard provides a clear overview of all your plans, allowing you to quickly identify areas that need attention and track progress over time."
            image={DashboardImage}
            imageAlt="Dashboard"
            imageOnRight={true}
          />
        </div>

        <FadeInSection>
          <div id="plan-view-details" className="relative mt-24 mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] blur-lg opacity-10"></div>
            <div className="bg-white p-8 rounded-3xl shadow-lg backdrop-blur-xl border border-gray-100">
              <h2 className="text-3xl font-light mb-8 text-center text-gray-800">360° Plan View Details</h2>
              <div className="space-y-4">
                {planViewDetails.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 transition-opacity"></div>
                    <div className="bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] p-[1px] rounded-2xl">
                      <div className="bg-white p-6 rounded-2xl flex items-center gap-6">
                        <span className="bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-medium flex-shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-1">{detail.title}</h3>
                          <p className="text-gray-600">{detail.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center mt-24">
            <h2 className="text-3xl font-light mb-6">Ready to get a 360° view of your plans?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start managing your 401(k) plans more efficiently with our comprehensive solution.
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

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [-1, 1, -1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
  >
    {children}
  </motion.div>
);

export default ThreeSixtyDegreePlanView;
