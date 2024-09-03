import React from 'react';
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';

const DemoVideoSection = () => {
  return (
    <section id="demo-video" className="py-12 sm:py-20 bg-gray-100 min-h-fit flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4 sm:p-8">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-md">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/zIQcvItt1HE" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-gray-800 mb-4 sm:mb-6 leading-tight">Watch 401(k) Pro in Action</h2>
              <p className="text-base sm:text-lg font-normal text-gray-600 mb-6 sm:mb-8">
                See how 401(k) Pro streamlines plan management, automates reporting, and enhances compliance for advisors. 
                Learn how you can save time and grow your business with our comprehensive platform.
              </p>
              
              {/* Uncomment and adjust as needed
              <WhiteButtonWithArrow
                buttonText="Log In"
                onClick={() => window.location.href = ''}
                showArrow={false}
              /> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;