import React from 'react';
import MasterSpreadsheetMainImage from './MasterSpreadsheetMain.png';
import ChatbotVideo from './RegulatoryChatbot.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmarkFlag } from '@fortawesome/free-solid-svg-icons';

const InfoSection = ({ title, content, media, isVideo, imageLeft }) => {
  const TextContent = () => (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 flex flex-col justify-center border border-gray-300">
      <h2 className="text-3xl font-light mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );

  const MediaContent = () => (
    <div className="bg-gradient-to-r from-blue-100 to-blue-400 shadow-lg rounded-lg p-6 w-full md:w-1/2 flex items-center justify-center">
      {isVideo ? (
        <video
          src={media}
          className="w-full h-auto bg-white p-6 rounded-lg"
          loop
          muted
          playsInline
          autoPlay
        />
      ) : (
        typeof media === 'string' ? (
          <img
            src={media}
            alt={title}
            className="w-full h-auto bg-white p-6 rounded-lg"
          />
        ) : (
          <div className="bg-white border-2 border-sky-500 p-4 rounded-lg">
            <FontAwesomeIcon icon={media} className="text-6xl text-sky-500" />
          </div>
        )
      )}
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 mb-12">
      {imageLeft ? (
        <>
          <MediaContent />
          <TextContent />
        </>
      ) : (
        <>
          <TextContent />
          <MediaContent />
        </>
      )}
    </div>
  );
};

const Disclaimer = () => (
  <div className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto border border-gray-300 mt-12">
    <h2 className="text-3xl font-light mb-4">Disclaimer</h2>
    <p className="text-gray-700">
      401k Pro's regulatory chatbot can make mistakes. This chatbot is not a substitute for professional legal advice. Always consult with a qualified legal professional for specific guidance.
    </p>
  </div>
);

const RegulatoryChatbot = () => {
  const sections = [
    {
      title: "Answers in Seconds",
      content: "401k Pro's regulatory chatbot is designed to provide you with answers to your regulatory questions in seconds, saving you time and effort.",
      media: ChatbotVideo,
      isVideo: true,
      imageLeft: true
    },
    {
      title: "401k Specialized",
      content: "401k Pro's regulatory chatbot is trained to answer your regulatory questions based upon the actual ERISA, FINRA, and DOL codes so that your answers are actually relevant to your plan management process.",
      media: faLandmarkFlag, // Use the imported icon here
      isVideo: false,
      imageLeft: false
    },
    {
      title: "The Power of 'I don't know'",
      content: "If our chatbot cannot find the answer to your question within the ERISA, FINRA, and DOL codes, it will tell you that it cannot find the answer and will advise you to consult with a legal professional.",
      media: MasterSpreadsheetMainImage,
      isVideo: false,
      imageLeft: true
    },
    {
      title: "Double Check our Work",
      content: "Our chatbot provides you with the actual ERISA, FINRA, or DOL code that it used to answer your question so that you can double check if you are not sure about the answer.",
      media: MasterSpreadsheetMainImage,
      isVideo: false,
      imageLeft: false
    }
  ];

  return (
    <div className="font-['Roboto',sans-serif] p-6 md:p-10 mx-auto max-w-7xl mt-12">
      <h1 className="text-4xl font-light text-center mb-4">Regulatory Chatbot</h1>
      <p className="text-xl text-center text-gray-600 font-light mb-12">
        Got a regulatory question? We're here to help.
      </p>
      
      {sections.map((section, index) => (
        <InfoSection key={index} {...section} />
      ))}

      <Disclaimer />
    </div>
  );
};

export default RegulatoryChatbot;
