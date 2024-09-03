import React, { useRef, useEffect } from 'react';
import MasterSpreadsheetMainImage from './MasterSpreadsheetMain.png';
import ThreeSixyPlanViewImage from './ThreeSixtyPlanView.png';
import PDFUploadVideo from './PDFUploadVideo.mov';
import ChatbotVideo from './ChatbotVideo.mp4';

const RegulatoryChatbot = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  const InfoSection = ({ title, content, image, imageLeft }) => {
    const textContent = (
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto flex flex-col flex-grow justify-center border border-gray-300 font-['Roboto',sans-serif]">
        <h2 className="text-2xl sm:text-3xl font-light text-left mb-3 sm:mb-5">{title}</h2>
        <p className="mt-2 text-left font-normal">{content}</p>
      </div>
    );

    const imageContent = (
      <div className="bg-gradient-to-r from-blue-100 to-blue-400 shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto mt-4 md:mt-0 flex-grow">
        <img
          aria-hidden="true"
          alt={title}
          src={image}
          className="w-full h-auto bg-white p-4 sm:p-6 rounded-lg"
        />
      </div>
    );

    return (
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-10 mb-8">
        {imageLeft ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    );
  };

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
        <h1 className="text-3xl sm:text-4xl font-light text-center mb-3 sm:mb-4 mt-20 sm:mt-40">Regulatory Chatbot</h1>
        <p className="text-lg sm:text-xl text-center text-gray-600 font-thin mb-8 sm:mb-12">
          Got a regulatory question? We're here to help.
        </p>
        
        <InfoSection
          title="Answers in Seconds"
          content="401k Pro's regulatory chatbot is designed to provide you with answers to your regulatory questions in seconds, saving you time and effort."
          image={ChatbotVideo}
          imageLeft={true}
        />
        <InfoSection
          title="401k Specialized"
          content="401k Pro's regulatory chatbot is trained to answer your regulatory questions based upon the actual ERISA, FINRA, and DOL codes so that your answers are actually relevent to your plan management process."
          image={MasterSpreadsheetMainImage}
          imageLeft={false}
        />

        <InfoSection
          title="The Power of 'I don't know'"
          content="If our chatbot cannot find the answer to your question within the ERISA, FINRA, and DOL codes it will tell you that it cannot find the answer and will advise you to consult with a legal professional."
          image={MasterSpreadsheetMainImage}
          imageLeft={true}
        />

        <InfoSection
          title="Double Check our Work"
          content="Our chatbot provides you with the actual ERISA, FINRA, or ERISA code that it used to answer your question so that you can double check if you are not sure about the answer."
          image={MasterSpreadsheetMainImage}
          imageLeft={false}
        />

        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full mx-auto flex flex-col flex-grow justify-center border border-gray-300 font-['Roboto',sans-serif] mt-8">
          <h2 className="text-2xl sm:text-3xl font-light text-left mb-3 sm:mb-5">Disclaimer</h2>
          <p className="mt-2 text-left font-normal">
            401k Pro's regulatory change can make mistakes. This chatbot is not a substitute for professional legal advice. Always consult with a qualified legal professional for specific guidance.
          </p>
        </div>
      </div>
    </>
  );
};

export default RegulatoryChatbot;