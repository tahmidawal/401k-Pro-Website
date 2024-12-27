import React, { useEffect, useRef } from 'react';
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
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-full blur-lg"></div>
            <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-light text-xl">
              {number}
            </div>
          </div>
          <h3 className="text-2xl font-light text-white">{title}</h3>
        </div>
        
        <div className="space-y-4 flex-grow flex flex-col">
          <div className="relative flex-grow">
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
      number: 1,
      title: "Multiple Fragmented Parties",
      description: "Managing 401k plans requires constant communication between advisors, plan sponsors, recordkeepers, and TPAs. This makes capturing and organizing critical details for due diligence challenging and time-consuming.",
      solution: "401k Pro streamlines communication between advisors, plan sponsors, recordkeepers, and TPAs by providing an organized platform for capturing and storing important plan details. Whether the communication happens in person, over the phone, or via email, all relevant information is centralized for easy access, making due diligence effortless."
    },
    {
      number: 2,
      title: "Inability to Scale",
      description: "Scaling 401k plan management is difficult due to varying plan designs, different service providers, and time-consuming data retrieval processes on recordkeeper platforms. This complexity hinders the creation of consistent, efficient processes.",
      solution: "401k Pro automates key tasks like note-taking, report writing, and providing best practices for plan sponsors. This creates a scalable, repeatable process that demonstrates your expertise while lightening the workload for plan sponsors, ultimately saving time and improving efficiency across multiple plans."
    },
    {
      number: 3,
      title: "Endless Fiduciary Responsibilities",
      description: "Understanding and adhering to fiduciary responsibilities under DOL and ERISA regulations is complex. A lack of clear processes for plan management can lead to significant compliance risks.",
      solution: "401k Pro helps you easily adhere to fiduciary responsibilities by offering ready-made or customizable templates that simplify compliance with DOL and ERISA requirements. These templates can be quickly applied across your entire client base, ensuring consistent, compliant plan management."
    },
    {
      number: 4,
      title: "Manual and Inefficient Data Extraction",
      description: "Extracting and organizing plan details, such as eligibility requirements and vesting schedules, from adoption agreements is a tedious and time-consuming task, making it difficult to ensure all necessary information is properly captured.",
      solution: "401k Pro allows you to automatically scan in and organize your plan documents, extracting key data points like eligibility requirements and vesting schedules in seconds."
    },
    {
      number: 5,
      title: "Inconsistent Review Processes",
      description: "The absence of a standardized approach to periodic reviews of plan and fiduciary activities leads to inefficiencies and uncertainty. Advisors often struggle to consistently document and manage plan requirements across different clients.",
      solution: "401k Pro offers customizable templates for quarterly and annual plan reviews, providing a consistent framework for documenting plan management and fiduciary activities. You can use or edit these templates as needed, ensuring a streamlined, repeatable process for all your clients."
    },
    {
      number: 6,
      title: "Overburdened Plan Sponsors",
      description: "Plan sponsors are supposed to keep documentation of their plan management process under ERISA regulations, but they often lack the time and expertise to do so effectively. This can lead to compliance risks and increased liability for both the sponsor and the advisor.",
      solution: "401k Pro allows advisors to provide plan sponsors with the documentation they need to stay compliant, reducing the burden on sponsors and ensuring that all necessary information is properly captured and stored."
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 font-['Roboto',sans-serif] font-light">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A5A9C] to-[#39A5F3]">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 0,
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
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
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
      />

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-extralight text-center mb-16"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              How is 401k plan management broken?
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
            {issues.map((issue, index) => (
              <IssuePoint key={index} {...issue} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryIssueOverview;