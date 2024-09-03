import React from 'react';
import FadeInSection from './FadeInSection';

const GraphicSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeInSection direction="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Complete the Circle</h2>
        </FadeInSection>
        
        <FadeInSection delay={50} direction="up">
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
            401(k) Pro completes the advisor's 401k Plan Management circle by providing the first scalable method of taking care of your fiduciary responsibilities.
          </p>
        </FadeInSection>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <FadeInSection delay={100} direction="left">
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Attorneys</h3>
              <p className="text-sm sm:text-base text-gray-700 flex-grow">
                TPAs and ERISA Attorneys easily take care of the plan's accounting and ERISA compliance.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={150} direction="right">
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Fiduciary Responsibilities</h3>
              <p className="text-sm sm:text-base text-red-500 font-semibold mb-2">No Solutions</p>
              <p className="text-sm sm:text-base text-gray-700 flex-grow">
                There is no dedicated system specifically designed for helping advisors manage their fiduciary responsibilities.
              </p>
            </div>
          </FadeInSection>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <FadeInSection delay={200} direction="left">
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Investments</h3>
              <p className="text-sm sm:text-base text-gray-700 flex-grow">
                Investment monitoring tools such as fi360 and Morningstar provide you with the tools to monitor your plan's investments easily and efficiently.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={250} direction="right">
            <div className="bg-blue-500 text-white p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">401k Pro</h3>
              <p className="text-sm sm:text-base text-white flex-grow">
                With 401k Pro you can easily manage your fiduciary responsibilities. 
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default GraphicSection;