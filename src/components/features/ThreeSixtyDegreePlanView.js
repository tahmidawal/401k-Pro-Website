import React from 'react';
import FeatureDivWithImage from './FeatureDivWithImage';  // Ensure this path is correct
import MasterSpreadsheetMainImage from './MasterSpreadsheetMain.png';
import ThreeSixyPlanViewImage from './ThreeSixtyPlanView.png';
import PDFUploadVideo from './PDFUpload.mp4';
import DashboardImage from './Dashboard.png';

const ThreeSixtyDegreePlanView = () => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
          .roboto-font {
            font-family: 'Roboto', sans-serif;
          }
        `}
      </style>
      <div className="flex flex-col p-4 sm:p-6 sm:pt-4 px-4 sm:px-6 md:px-10 mx-2 sm:mx-5 roboto-font mt-14">
        <h1 className="text-3xl sm:text-4xl font-light text-center mb-3 sm:mb-4">360° Plan View</h1>
        <p className="text-lg sm:text-xl text-center text-gray-600 font-thin mb-8 sm:mb-12">
          Get a comprehensive overview of your 401(k) plans in one place
        </p>
        
        <FeatureDivWithImage
          title="401k Pro Master Spreadsheet"
          description="Our Master Spreadsheet allows you to keep all of your fiduciary plan management information in one place. Everything you need is now at your fingertips."
          image={MasterSpreadsheetMainImage}
          imageAlt="Master Spreadsheet"
          imageOnRight={false}
        />
        
        <FeatureDivWithImage
          title="Everything You Need, Nothing You Don't"
          description="Our Master Spreadsheet allows you to keep all of the most important information for your 401(k) plan management in one place, including:"
          image={ThreeSixyPlanViewImage}
          imageAlt="360° Plan View"
          imageOnRight={true}
        >
          <ul className="mt-4 space-y-2">
            {['Client Information', 'Plan Touchpoints', 'Fiduciary Requirements Checklist', 'Plan Design and Elections', 'Plan Performance', 'Advisor Service Schedule', 'Fee Schedule', 'Client Prospecting'].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
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
    </>
  );
};

export default ThreeSixtyDegreePlanView;
