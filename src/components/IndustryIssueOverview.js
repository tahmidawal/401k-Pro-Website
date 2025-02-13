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
      title: "Limited Access to Critical Plan Data",
      description: "Advisors and plan sponsors often struggle to access essential plan details, such as plan design, fee disclosures, compliance records, and historical plan documentation. This lack of centralized data slows down decision-making and increases the risk of oversight.",
      solution: "401k Pro centralizes all plan-related data, including plan design details, compliance documents, and advisor touchpoints, making critical information instantly accessible. This improves efficiency, reduces errors, and ensures advisors always have the right data at their fingertips."
    },
    {
      number: 2,
      title: "Manual and Repetitive Data Entry",
      description: "Data entry for plan documents, meeting notes, and compliance tracking is time-consuming and error-prone. Advisors waste valuable time inputting information instead of focusing on client service and business growth.",
      solution: "401k Pro automates data extraction and entry using AI-powered document scanning and email processing. This eliminates the need for manual input, saving advisors hours per plan while improving accuracy and efficiency."
    },
    {
      number: 3,
      title: "Inconsistent and Inefficient Compliance Tracking",
      description: "Ensuring compliance with ERISA and DOL regulations requires meticulous record-keeping and documentation. Without a structured system, advisors risk missing key requirements, leading to potential audits and legal issues.",
      solution: "401k Pro provides automated compliance tracking, ensuring all fiduciary responsibilities are documented and stored in one place. Advisors can generate reports instantly, making it easy to demonstrate compliance and reduce regulatory risks."
    },
    {
      number: 4,
      title: "Disorganized Due Diligence and Reporting",
      description: "Advisors must regularly document their interactions, decisions, and fiduciary actions, but traditional reporting methods are slow and fragmented. Many rely on spreadsheets and manual notes, leading to inefficiencies and gaps in reporting.",
      solution: "401k Pro automates due diligence reporting by capturing key actions from advisor-client interactions and generating structured reports. This ensures a clear audit trail and makes it easy to present plan oversight activities to sponsors and auditors."
    },
    {
      number: 5,
      title: "Missed Wealth Advisory Opportunities",
      description: "Advisors often overlook participants who could benefit from financial planning services, missing out on potential wealth advisory clients. Without structured data on participant behavior and needs, engaging these individuals effectively is difficult.",
      solution: "401k Pro analyzes participant data to help advisors identify potential wealth advisory clients. This enables proactive engagement, opening new revenue streams while enhancing participant financial wellness."
    },
    {
      number: 6,
      title: "Fragmented Communication Between Stakeholders",
      description: "Advisors, plan sponsors, TPAs, and recordkeepers frequently rely on disconnected email threads and spreadsheets to track plan management tasks. This fragmented approach leads to miscommunication, missed deadlines, and compliance risks.",
      solution: "401k Pro centralizes communication by automatically logging touchpoints from emails and meetings. This ensures all stakeholders have a clear record of actions taken, reducing confusion and improving plan oversight."
    },
    {
      number: 7,
      title: "Lack of Organization in Plan Documentation",
      description: "Plan-related documents—such as adoption agreements, investment policies, and service agreements—are often stored in multiple locations, making retrieval difficult when needed for compliance reviews or audits.",
      solution: "401k Pro provides a structured document management system where advisors can store, search, and retrieve all plan-related files in one place. This ensures quick access to critical information, reducing compliance risks and improving efficiency."
    },
    {
      number: 8,
      title: "Time-Consuming Plan Reviews",
      description: "Quarterly and annual plan reviews require advisors to manually compile reports from multiple sources, consuming valuable time and increasing the risk of missing key details.",
      solution: "401k Pro automates plan reviews by consolidating data into structured quarterly and annual reports. This streamlines the process, ensuring consistent and thorough evaluations while saving advisors hours of work per client."
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

      <div className="relative z-10 container mx-auto px-4 pb-24">
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