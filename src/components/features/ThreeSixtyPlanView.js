import React, { useRef, useEffect } from 'react';
import MasterSpreadsheetMainImage from './MasterSpreadsheetMain.png';
import ThreeSixyPlanViewImage from './ThreeSixtyPlanView.png';
import PDFUploadVideo from './PDFUploadVideo.mov';

const TransactionReview = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

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
      <div className="flex flex-col p-4 sm:p-6 px-4 sm:px-6 md:px-10 mx-2 sm:mx-5 roboto-font">
        <h1 className="text-3xl sm:text-4xl font-light text-center mb-3 sm:mb-4 mt-20 sm:mt-40">360° Plan View</h1>
        <p className="text-lg sm:text-xl text-center text-gray-600 font-thin mb-8 sm:mb-12">
          Get a comprehensive overview of your 401(k) plans in one place
        </p>
        
        {/* First row */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-10 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto flex flex-col flex-grow justify-center border border-gray-300 font-['Roboto',sans-serif]">
            <h2 className="text-2xl sm:text-3xl font-light text-left mb-3 sm:mb-5">401k Pro Master Spreadsheet</h2>
            <p className="mt-2 text-left font-normal">
              Our Master Spreadsheet allows you to keep all of your fiduciary plan management information in one place. 
            </p>
            <p className="text-zinc-700 mt-2 text-left font-normal">
              Everything you need is now at your fingertips. 
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-blue-400 shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto mt-4 md:mt-0 flex-grow">
            <img
              aria-hidden="true"
              alt="Master Spreadsheet"
              src={MasterSpreadsheetMainImage}
              className="w-full h-auto bg-white p-4 sm:p-6 rounded-lg"
            />
          </div>
        </div>
        
        {/* Second row */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-10 mb-5">
          <div className="bg-gradient-to-r from-blue-400 to-blue-100 shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto mt-4 md:mt-0 flex-grow order-2 md:order-1">
            <img
              aria-hidden="true"
              alt="Master Spreadsheet"
              src={ThreeSixyPlanViewImage}
              className="w-full h-auto bg-white p-4 sm:p-6 rounded-lg"
            />
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto flex flex-col flex-grow justify-center border border-gray-300 font-['Roboto',sans-serif] order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-light text-left mb-3 sm:mb-5">Everything You Need, Nothing You Don't</h2>
            <p className="mt-2 text-left font-normal">
              Our Master Spreadsheet allows you to keep all of the most important information for your 401(k) plan management in one place, including:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Client Information</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Plan Touchpoints</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Fiduciary Requirements Checklist</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Plan Design and Elections</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Plan Performance</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Advisor Service Schedule</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Fee Schedule</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Client Prospecting</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Third Row row */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-10 mt-5">       
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto flex flex-col flex-grow justify-center border border-gray-300 font-['Roboto',sans-serif] order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl font-light text-left mb-3 sm:mb-5">AI Powered Data Entry</h2>
            <p className="mt-2 text-left font-normal">
              Hate entering data by hand? Trust us, we do too.
            </p>
            <p className="mt-2 text-left font-normal">
              That's why we've built an AI powered data entry system that can read and understand your PDFs, and automatically enter the data into your Master Spreadsheet for you. 
            </p>

          </div>
          <div className="bg-gradient-to-r from-blue-400 to-blue-100 shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto mt-4 md:mt-0 flex-grow order-2 md:order-1">
          <video 
            ref={videoRef}
            aria-hidden="true"
            src={PDFUploadVideo}
            className="w-full h-auto bg-white p-4 sm:p-6 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => console.error("Video load error:", e.nativeEvent)}
            onPlay={() => console.log("Video is playing")}
            > 
          </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionReview;