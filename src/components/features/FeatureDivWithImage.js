import React from 'react';

const FeatureDivWithImage = ({ title, description, image, imageAlt, imageOnRight = false, children }) => {
  const contentOrder = imageOnRight ? 'order-2 md:order-1' : 'order-2 md:order-2';
  const imageOrder = imageOnRight ? 'order-1 md:order-2' : 'order-1 md:order-1';

  const isVideo = typeof image === 'string' && (image.endsWith('.mov') || image.endsWith('.mp4'));

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 sm:gap-10 mb-8">
      <div className={`bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto flex flex-col flex-grow justify-center border border-gray-300 font-['Roboto',sans-serif] ${contentOrder}`}>
        <h2 className="text-2xl sm:text-3xl font-light text-left mb-3 sm:mb-5">{title}</h2>
        <p className="mt-2 text-left font-normal">{description}</p>
        {children}
      </div>

      <div className={`bg-gradient-to-r from-blue-400 to-blue-100 shadow-lg rounded-lg p-4 sm:p-6 w-full md:w-1/2 mx-auto mt-4 md:mt-0 flex-grow ${imageOrder}`}>
        {isVideo ? (
          <video
            src={image}
            className="w-full h-auto bg-white p-4 sm:p-6 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto bg-white p-4 sm:p-6 rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default FeatureDivWithImage;