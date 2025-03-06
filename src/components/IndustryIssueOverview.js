import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};

const IssuePoint = ({ number, title, description, solution }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-3xl blur-lg transform group-hover:scale-105 transition-all duration-500"></div>
      <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 overflow-hidden h-full flex flex-col">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="flex items-center space-x-4 mb-8 pb-4 border-b border-white/10">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-lg"></div>
            <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-light text-xl">
              {number}
            </div>
          </div>
          <h3 className="text-2xl font-light text-white">{title}</h3>
        </div>
        
        <div className="space-y-6 flex-grow flex flex-col">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg blur-sm"></div>
            <p className="relative text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="relative pt-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-lg blur-sm"></div>
            <p className="relative text-white/90 leading-relaxed">
              {solution}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const IndustryIssueOverview = () => {
  const issues = [
    {
      "number": 1,
      "title": "Disorganized Plan Data and Documentation",
      "description": "Advisors and plan sponsors struggle to access critical plan details like design, fee disclosures, and compliance records. Disorganized storage and fragmented communication slow decision-making and increase oversight risks.",
      "solution": "PlanSync centralizes all plan data and logs stakeholder interactions automatically. This ensures quick access to essential information, reduces errors, and keeps advisors organized while improving compliance."
    },
    {
      "number": 2,
      "title": "Manual Work Slows Advisors Down",
      "description": "Advisors spend too much time on repetitive tasks like data entry, compliance tracking, and report generation. These processes are prone to errors and reduce efficiency, ultimately leading to lower profitability.",
      "solution": "PlanSync automates document scanning, email processing, and reporting. This eliminates manual work, saves hours per plan, and ensures data accuracy so advisors can focus on growing their business."
    },
    {
      "number": 3,
      "title": "Compliance & Due Diligence Risks",
      "description": "Staying compliant with ERISA and DOL regulations requires precise record-keeping, but spreadsheets and manual tracking lead to missing documentation, inefficiencies, and potential audit risks for advisory practices.",
      "solution": "PlanSync automates compliance tracking and generates instant reports, ensuring all fiduciary responsibilities are documented. This helps advisors stay prepared and maintain a clear audit trail."
    },
    {
      "number": 4,
      "title": "Missed Wealth Advisory Opportunities",
      "description": "Many advisors overlook participants who could benefit from financial planning services. Without structured data and efficient plan reviews, engaging these potential clients and identifying growth opportunities becomes challenging.",
      "solution": "PlanSync analyzes participant data to highlight potential wealth advisory clients and automates quarterly reviews. This helps advisors proactively engage clients and unlock new revenue streams."
    }
  ];
  
  


  return (
    <section className="relative overflow-visible py-24 font-['Roboto',sans-serif] font-light">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A5A9C] to-[#39A5F3]">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.2, 0.3],
        }}
        className="absolute top-0 left-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2,
        }}
        className="absolute bottom-0 right-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-extralight text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Challenges in 401(k) Plan Management
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-20">
            {issues.map((issue, index) => (
              <div key={index} className="grid auto-rows-fr">
                <IssuePoint {...issue} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryIssueOverview;