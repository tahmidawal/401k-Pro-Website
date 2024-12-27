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
      title: "Multiple Fragmented Parties",
      description: "Managing 401(k) plans requires constant communication between advisors, plan sponsors, recordkeepers, and TPAs. This fragmented ecosystem creates confusion, inefficiencies, and a lack of accountability. It also increases the risk of missing critical details during due diligence, impacting the overall plan management process.",
      solution: "401k Pro streamlines communication by centralizing all interactions and data in a single platform. Whether the communication occurs via email, calls, or in person, 401k Pro ensures all relevant details are documented and easily accessible for seamless due diligence."
    },
    {
      number: 2,
      title: "Inability to Scale",
      description: "Scaling operations across multiple 401(k) plans is often a logistical nightmare due to varying plan designs, providers, and manual processes. Without automation, advisors face significant inefficiencies, making it difficult to maintain consistent quality and streamline their workflows.",
      solution: "401k Pro automates repetitive tasks like report generation, document management, and providing best practices. This allows advisors to create scalable, repeatable processes that improve efficiency, save time, and demonstrate expertise to plan sponsors."
    },
    {
      number: 3,
      title: "Endless Fiduciary Responsibilities",
      description: "Adhering to fiduciary responsibilities under ERISA and DOL regulations is a complex and ongoing challenge. Without standardized processes, advisors risk compliance violations, legal repercussions, and loss of trust with plan sponsors.",
      solution: "401k Pro provides ready-made or customizable templates to ensure adherence to fiduciary standards. These templates are designed to simplify compliance across all client accounts, reducing risks and ensuring consistent, compliant plan management."
    },
    {
      number: 4,
      title: "Manual and Inefficient Data Extraction",
      description: "Extracting critical details, such as eligibility requirements and vesting schedules, from lengthy plan documents like adoption agreements is time-consuming and prone to errors. This inefficiency not only delays operations but also increases the risk of oversight.",
      solution: "401k Pro leverages automation to scan, extract, and organize key data points in seconds. Advisors can efficiently capture important information from plan documents, improving accuracy and reducing manual workload."
    },
    {
      number: 5,
      title: "Inconsistent Review Processes",
      description: "Many advisors lack a structured approach to quarterly and annual plan reviews, leading to inefficiencies and compliance gaps. This inconsistency makes it challenging to provide reliable, high-quality service to all clients.",
      solution: "401k Pro offers customizable templates for periodic reviews. These templates enable advisors to document and manage fiduciary activities consistently, ensuring a repeatable and streamlined process across all client accounts."
    },
    {
      number: 6,
      title: "Overburdened Plan Sponsors",
      description: "Plan sponsors are tasked with maintaining extensive documentation under ERISA regulations, but they often lack the expertise and resources to do so effectively. This places additional burdens on advisors and increases compliance risks for everyone involved.",
      solution: "401k Pro provides sponsors with pre-built documentation tools, enabling them to meet ERISA requirements effortlessly. Advisors can assist sponsors in capturing and organizing critical information, reducing their workload and liability."
    },
    {
      number: 7,
      title: "Ineffective Document Management",
      description: "Advisors often struggle with disorganized document storage and retrieval processes. This inefficiency makes it challenging to locate important files like compliance documents, plan highlights, and participant communications quickly.",
      solution: "401k Pro provides a centralized, secure repository for all plan-related documents. With advanced search and categorization features, advisors can easily access, manage, and share files, saving time and improving operational efficiency."
    },
    {
      number: 8,
      title: "Missed Wealth Advisory Opportunities",
      description: "401(k) plans represent a significant pool of potential individual wealth advisory clients, but many advisors lack the tools to identify and engage these participants effectively. This results in lost opportunities to expand their advisory practices.",
      solution: "401k Pro includes tools to analyze participant data and identify individuals who may benefit from additional financial services. Advisors can proactively target these participants, opening new avenues for revenue generation and client growth."
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr relative z-20">
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