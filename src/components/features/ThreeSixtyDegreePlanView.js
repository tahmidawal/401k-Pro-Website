import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Database, Calendar, FileText, Settings, RefreshCcw, Users, DollarSign, Target, ChevronDown } from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';
import MasterSpreadsheetMainImage from './MasterSpreadsheetMain.webp';
import ThreeSixyPlanViewImage from './ThreeSixtyPlanView.webp';
import PDFUploadVideo from './PDFUpload.mp4';
import DashboardImage from './Dashboard.webp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
};

const MediaSection = ({ media, title, isVideo }) => (
  <div className="relative group px-2">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
    <div className="relative rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-all duration-500">
      {isVideo ? (
        <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-2xl">
          <source src={media} type="video/mp4" />
        </video>
      ) : (
        <img src={media} alt={title} className="w-full h-full object-cover rounded-2xl" />
      )}
    </div>
  </div>
);

const FeatureShowcase = ({ media, title, description, isVideo, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  const isMediaRight = index % 2 === 1;

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="relative group px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20 shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {!isMediaRight ? (
            <>
              <motion.div className="space-y-8">
                <h3 className="text-3xl font-light bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
              </motion.div>
              <MediaSection media={media} title={title} isVideo={isVideo} />
            </>
          ) : (
            <>
              <MediaSection media={media} title={title} isVideo={isVideo} />
              <motion.div className="space-y-8">
                <h3 className="text-3xl font-light bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PlanViewDetail = ({ icon: Icon, title, description, details, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg h-full">
        <div className="p-8">
          <div className="flex items-start space-x-6">
            <div className="relative w-14 h-14 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-white rounded-xl border border-white/50">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex-grow min-h-[90px]">
              <h3 className="text-xl font-light bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mb-4">{title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <button onClick={() => setIsExpanded(!isExpanded)} className="w-full px-6 py-3 flex items-center justify-between">
            <span className="text-sm text-gray-500 transition-colors duration-300">{isExpanded ? 'Show less' : 'Learn more'}</span>
            <ChevronDown className="text-gray-400 transition-colors duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : '' }} />
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <ul className="list-disc list-inside space-y-3">
                  {details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{detail}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

const ThreeSixtyDegreePlanView = () => {
  const features = [
    {
      icon: Database,
      title: "Client Information",
      description: "Keep all essential client details in one place for easy access and management.",
      details: [
        "All of your clients in one place",
        "Contact information",
        "Record Keeper",
        "TPA",
      ]
    },
    {
      icon: Calendar,
      title: "Plan Touchpoints",
      description: "Track and manage all interactions and key events related to each plan.",
      details: [
        "Easily track and categorize client interactions",
        "Track actions across all plan stakeholders including plan sponsors, participants, record keepers, and TPAs",
        "In built AI automatically rewrites all interactions so that they can be professionally presented in your quarterly and annual reports.",
        "Automatically add in plan touchpoints by simply forwarding emails to the 401k Pro email address",
        "Visualizations to track the nunber of touchpoints you have with each client.",
        "Automatically flows into Quarterly Reports",
        "Automatically flows in Annual Plan Review Reports" 
      ]
    },
    {
      icon: FileText,
      title: "Fiduciary Requirements Checklist",
      description: "Promote compliance with a comprehensive checklist of fiduciary responsibilities.",
      details: [
        "In built requirements calendar to easily promote plan compliance",
        "Easily assign requirements to their corresponding parties",
        "Deadline monitoring",
        "Add custom requirements",
        "Automatically flows into Quarterly Reports",
        "Automatically flows in Annual Plan Review Reports"

      ]
    },
    {
      icon: Settings,
      title: "Plan Design and Elections",
      description: "Document and track plan design features and elections for each client.",
      details: [
        "All plan design details in one place",
        "Instant data querying and sorting",
        "AI powered data entry with PDF data extraction from plan highlights or adoptions agreements.",
        "Automatically flows in Annual Plan Review Reports"

      ]
    },
    {
      icon: RefreshCcw,
      title: "Plan Performance",
      description: "Monitor and analyze the performance of each plan over time.",
      details: [
        "Performance metrics tracking",
        "All plan performance details in one place", 
        "AI powered data entry with PDF data extraction from Record Keeper plan health reports",
        "Automatically flows in Annual Plan Review Reports"

      ]
    },
    {
      icon: Users,
      title: "Advisor Service Schedule",
      description: "Manage and track your service commitments for each plan.",
      details: [
        "Easily communicate your service commitments to your clients",
        "Automatically flows in Annual Plan Review Reports"
        
      ]
    },
    {
      icon: DollarSign,
      title: "Fee Schedule",
      description: "Maintain clear and transparent fee information for each plan.",
      details: [
        "Easily communicate your fees with clients",
        "Include advisor fees, recordkeeper fees, and TPA fees",
        "Automatically flows in Annual Plan Review Reports for transparency."

      ]
    },
    {
      icon: Target,
      title: "Plan Participants",
      description: "Keep track of all plan participants",
      details: [
        "Automatically entered using the 401k Pro participant census",
        "Easily identify leads for your individual wealth advisor practice",
        "Identify mismatches between a participants perceived risk tolerance and their actual risk tolerance",
        "Comprehensive risk tolerance reports"
      ]
    },
    {
      icon: Target,
      title: "Client Prospecting",
      description: "Keep track of potential clients and manage your sales pipeline.",
      details: [
        "Lead tracking",
        "Pipeline management",
      ]
    }
  ];

  const showcases = [
    {
      title: "401k Pro Master Spreadsheet",
      description: "Our Master Spreadsheet allows you to keep all of your fiduciary plan management information in one place. Everything you need is now at your fingertips.",
      media: MasterSpreadsheetMainImage,
      isVideo: false
    },
    {
      title: "Everything You Need, Nothing You Don't",
      description: "Our Master Spreadsheet allows you to keep all of the most important information for your 401(k) plan management in one place.",
      media: ThreeSixyPlanViewImage,
      isVideo: false,
      reversed: true
    },
    {
      title: "AI Powered Data Entry",
      description: "Hate entering data by hand? Trust us, we do too. That's why we've built an AI powered data entry system that can read and understand your PDFs, and automatically enter the data into your Master Spreadsheet for you.",
      media: PDFUploadVideo,
      isVideo: true
    },
    {
      title: "Comprehensive Dashboard",
      description: "Our dashboard provides a clear overview of all your plans, allowing you to quickly identify areas that need attention and track progress over time.",
      media: DashboardImage,
      isVideo: false,
      reversed: true
    },
    {
      title: "Stay Organized and Find Your Information Instantly",
      description: "401k Pro allows you to easily organize all of your plan information in one place, and find it instantly using our global search.",
      media: DashboardImage,
      isVideo: false,
      reversed: true
    }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-['Roboto',sans-serif] font-light">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-32 pt-20 px-4"
      >
        <motion.h1 variants={itemVariants} className="text-6xl font-extralight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">360°</span> Plan View
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
          Streamline your 401(k) plan management with a comprehensive solution that brings everything into focus.
        </motion.p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-24 mb-32 px-4 md:px-8"
      >
        {showcases.map((showcase, index) => (
          <FeatureShowcase key={index} {...showcase} index={index} />
        ))}
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr px-4 md:px-8"
      >
        {features.map((feature, index) => (
          <PlanViewDetail key={index} {...feature} index={index} />
        ))}
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mt-32 mb-20 px-4"
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-extralight mb-6">
          Ready to get a 360° view of your plans?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Start managing your 401(k) plans more efficiently with 401k Pro.
        </motion.p>
        <motion.div variants={itemVariants}>
          <GradientButtonWithArrow buttonText="Get Started" link="/book-a-demo" showArrow={true} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThreeSixtyDegreePlanView;