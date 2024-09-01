import { Frame } from 'lucide-react';
import React from 'react';

const FragmentedEcosystemGraphic = () => {
  return (
    <div className="container mx-auto p-8 font-roboto mb-20">
      <style>{`
        @keyframes fadeInOut {
          0%, 20%, 80%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .animate-fade {
          animation: fadeInOut 10s infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Step 1 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md" style={{ minHeight: 'fit-content' }}>
          <div className="bg-green-500 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
            Investments
          </div>
          <h3 className="text-2xl font-light mb-2">Investment Monitoring Tools</h3>
          <p className="text-gray-600">
            Investment monitoring tools such as fi360 and Morninstar provide you with the tools to monitor your plan's investments easily and efficiently.
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md" style={{ minHeight: 'fit-content' }}>
          <div className="bg-green-500 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
            Plan Hosting
          </div>
          <h3 className="text-2xl font-light mb-2">Record Keepers</h3>
          <p className="text-gray-600">
            Record Keepers allow you to easily host your plans on their platform and provide you with the tools to manage them.
          </p>
        </div>
        
        {/* Step 3 */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md" style={{ minHeight: 'fit-content' }}>
          <div className="bg-green-500 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
            ERISA Compliance
          </div>
          <h3 className="text-2xl font-light mb-2">TPAs and ERISA Attorneys</h3>
          <p className="text-gray-600">
            TPAs and ERISA Attorneys easily take care of the plan's accounting and ERISA compliance.
          </p>
        </div>
        
        {/* Step 4 - Animated */}
        <div className="relative h-full" style={{ minHeight: 'fit-content' }}>
          <div className="absolute inset-0 bg-gray-100 p-6 rounded-lg shadow-md animate-fade" style={{ minHeight: 'fit-content' }}>
            <div className="bg-red-500 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
              Fiduciary Responsibilities
            </div>
            <h3 className="text-2xl font-light mb-2">No Solutions</h3>
            <p className="text-gray-600">
              There is no dedicated system specifically designed for helping advisors manage their fiduciary responsibilities.
            </p>
          </div>
          <div className="absolute inset-0 bg-gray-100 p-6 rounded-lg shadow-md animate-fade" style={{ animationDelay: '5s', background: 'linear-gradient(to right, #0A5A9C, #39A5F3)', minHeight: 'fit-content' }}>
            <div className="bg-green-500 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-2">
              Fiduciary Responsibilities
            </div>
            <h3 className="text-2xl font-light mb-2 text-white">401k Pro</h3>
            <p className="text-gray-600 text-white">
              With 401k Pro you can easily manage your fiduciary responsibilities. Your plan management ecosystem is now complete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FragmentedEcosystemGraphic;