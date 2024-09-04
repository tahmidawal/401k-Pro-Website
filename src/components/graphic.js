import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInSection = ({ children, delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const variants = {
    hidden: { 
      opacity: 0,
      y: direction === 'up' ? 50 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: delay * 0.001 
      } 
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const GraphicSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 px-4 md:px-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">Complete the Circle</h2>
        
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
          401(k) Pro completes the advisor's 401k Plan Management circle by providing the first scalable method of taking care of your fiduciary responsibilities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Attorneys</h3>
            <p className="text-sm sm:text-base text-gray-700 flex-grow">
              TPAs and ERISA Attorneys easily take care of the plan's accounting and ERISA compliance.
            </p>
          </div>
          
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Fiduciary Responsibilities</h3>
            <p className="text-sm sm:text-base text-red-500 font-semibold mb-2">No Solutions</p>
            <p className="text-sm sm:text-base text-gray-700 flex-grow">
              There is no dedicated system specifically designed for helping advisors manage their fiduciary responsibilities.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Investments</h3>
            <p className="text-sm sm:text-base text-gray-700 flex-grow">
              Investment monitoring tools such as fi360 and Morningstar provide you with the tools to monitor your plan's investments easily and efficiently.
            </p>
          </div>
          
          <div className="bg-blue-500 text-white p-4 sm:p-6 rounded-lg shadow-md w-full flex flex-col">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">401k Pro</h3>
            <p className="text-sm sm:text-base text-white flex-grow">
              With 401k Pro you can easily manage your fiduciary responsibilities. 
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GraphicSection;