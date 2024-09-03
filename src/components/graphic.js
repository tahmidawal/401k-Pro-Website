import React from 'react';

const GraphicSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Complete the Circle</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          401(k) Pro completes the advisor's 401k Plan Management circle by providing the first scalable method of taking care of your fiduciary responsibilities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Attorneys</h3>
            <p className="text-gray-700 flex-grow">
              TPAs and ERISA Attorneys easily take care of the plan's accounting and ERISA compliance.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Fiduciary Responsibilities</h3>
            <p className="text-red-500 font-semibold mb-2">No Solutions</p>
            <p className="text-gray-700 flex-grow">
              There is no dedicated system specifically designed for helping advisors manage their fiduciary responsibilities.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full flex flex-col">
            <h3 className="text-xl font-semibold mb-3">Investments</h3>
            <p className="text-gray-700 flex-grow">
              Investment monitoring tools such as fi360 and Morningstar provide you with the tools to monitor your plan's investments easily and efficiently.
            </p>
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md w-full flex flex-col">
            <h3 className="text-xl font-semibold mb-3">401k Pro</h3>
            <p className="text-white flex-grow">
              With 401k Pro you can easily manage your fiduciary responsibilities. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicSection;
