import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Database, Calendar, FileText, Settings, RefreshCcw, Users, DollarSign, Target, ChevronDown, TrendingUp } from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';
import MasterSpreadsheetMainImage from './MasterSpreadsheetMain.webp';
import ThreeSixyPlanViewImage from './ThreeSixtyPlanView.webp';
import AIPDFDataExtraction from './AIPDFDataExtraction.mp4';
import DashboardImage from './Dashboard.webp';
import PlanDesignAndElectionsQuery from './PlanDesignAndElectionsQuery.mp4';

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
  <div className="relative group px-2 sm:px-4">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-xl sm:rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-all duration-500">
      {isVideo ? (
        <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-xl sm:rounded-2xl">
          <source src={media} type="video/mp4" />
        </video>
      ) : (
        <img src={media} alt={title} className="w-full h-full object-cover rounded-xl sm:rounded-2xl" />
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
    <motion.div ref={ref} style={{ scale, opacity }} className="relative group px-2 sm:px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-xl sm:rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-8 md:p-12 rounded-xl sm:rounded-3xl border border-white/20 shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center">
          {!isMediaRight ? (
            <>
              <motion.div className="space-y-4 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">{title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{description}</p>
              </motion.div>
              <MediaSection media={media} title={title} isVideo={isVideo} />
            </>
          ) : (
            <>
              <MediaSection media={media} title={title} isVideo={isVideo} />
              <motion.div className="space-y-4 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">{title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{description}</p>
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
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-xl sm:rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 shadow-lg h-full">
        <div className="p-4 sm:p-8">
          <div className="flex items-start space-x-4 sm:space-x-6">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-lg sm:rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-white rounded-lg sm:rounded-xl border border-white/50">
                <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
              </div>
            </div>
            <div className="flex-grow min-h-[80px] sm:min-h-[90px]">
              <h3 className="text-lg sm:text-xl font-light bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent mb-2 sm:mb-4">{title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100">
          <button onClick={() => setIsExpanded(!isExpanded)} className="w-full px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-500 transition-colors duration-300">{isExpanded ? 'Show less' : 'Learn more'}</span>
            <ChevronDown className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} size={16} />
          </button>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 sm:px-6 pb-4 sm:pb-6"
              >
                <ul className="list-disc list-inside space-y-2 sm:space-y-3">
                  {details.map((detail, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-gray-600">{detail}</li>
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
        title: "Client Information Hub",
        description: "Centralize all essential client details for streamlined access and management.",
        details: [
          "Manage all client accounts in one place",
          "Store contact information, plan details, and key stakeholders",
          "Easily reference record keeper and TPA information",
        ]
      },
      {
        icon: Calendar,
        title: "Plan Touchpoints Tracking",
        description: "Automatically document and categorize all interactions with clients and stakeholders.",
        details: [
          "Track all interactions across plan sponsors, participants, record keepers, and TPAs",
          "AI-powered rewriting for professionally formatted reports",
          "Auto-add touchpoints by forwarding emails to the PlanSync email address",
          "Visual dashboards to track client engagement levels",
          "Seamlessly integrates into Quarterly and Annual Plan Review Reports",
        ]
      },
      {
        icon: FileText,
        title: "Fiduciary Requirements Checklist",
        description: "Promote Compliance with a structured checklist of all fiduciary obligations.",
        details: [
          "Built-in compliance calendar to stay ahead of deadlines",
          "Assign requirements to the appropriate stakeholders",
          "Deadline tracking and proactive monitoring",
          "Customizable to include firm-specific requirements",
          "Seamlessly integrates into Quarterly and Annual Plan Review Reports",
        ]
      },
      {
        icon: Settings,
        title: "Plan Design & Elections",
        description: "Digitally manage and track plan design features for each client.",
        details: [
          "Store all plan design details in one accessible location",
          "Quick data querying and sorting for efficient insights",
          "AI-powered PDF extraction from adoption agreements and plan highlights",
          "Seamlessly integrates into Annual Plan Review Reports",
        ]
      },
      {
        icon: RefreshCcw,
        title: "Plan Performance Monitoring",
        description: "Analyze plan performance over time with AI-powered data extraction.",
        details: [
          "Track performance metrics and key plan indicators",
          "Centralized repository for plan health and performance data",
          "Automated PDF data extraction from record keeper reports",
          "Seamlessly integrates into Annual Plan Review Reports",
        ]
      },
      {
        icon: Users,
        title: "Advisor Service Schedule",
        description: "Clearly communicate your service commitments to clients.",
        details: [
          "Document and manage advisor service commitments",
          "Ensure transparency with structured service tracking",
          "Seamlessly integrates into Annual Plan Review Reports",
        ]
      },
      {
        icon: DollarSign,
        title: "Fee Schedule Transparency",
        description: "Maintain a clear and structured breakdown of plan fees.",
        details: [
          "Easily communicate advisor, record keeper, and TPA fees",
          "Improve fee transparency for plan sponsors",
          "Seamlessly integrates into Annual Plan Review Reports",
        ]
      },
      {
        icon: Target,
        title: "Participant Census & Risk Analysis",
        description: "Gain deeper insights into plan participants and their financial profiles.",
        details: [
          "Automated participant data entry via PlanSync's census feature",
          "Identify individual wealth advisory opportunities",
          "Analyze mismatches between perceived and actual risk tolerance",
          "Generate comprehensive risk tolerance reports",
        ]
      },
      {
        icon: TrendingUp,
        title: "Client Prospecting & Lead Management",
        description: "Track and manage potential clients with an integrated sales pipeline.",
        details: [
          "Organized lead tracking system",
          "Pipeline management to convert prospects into clients",
        ]
      }
    ];

  const showcases = [
    {
      title: "Data Consolidation",
      description: "Consolidates all of your fiduciary plan management information in one place. Everything you need is now at your fingertips.",
      media: MasterSpreadsheetMainImage,
      isVideo: false
    },
    {
      title: "Client Management",
      description: "Manage all of your client information in one place. Everything you need is now at your fingertips.",
      media: ThreeSixyPlanViewImage,
      isVideo: false,
      reversed: true
    },
    {
      title: "AI Powered Data Entry",
      description: "Hate entering data by hand? Trust us, we do too. That's why we've built an AI powered data entry system that can read and understand your PDFs, and automatically enter the data into your Master Spreadsheet for you.",
      media: AIPDFDataExtraction,
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
      description: "PlanSync allows you to easily organize all of your plan information in one place, and find it instantly using our global search.",
      media: PlanDesignAndElectionsQuery,
      isVideo: true,
      reversed: true
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden font-['Roboto',sans-serif] font-light max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-16 sm:mb-32 pt-10 sm:pt-20 px-4"
      >
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl font-extralight mb-4 sm:mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">360°</span> Plan View
        </motion.h1>
        <motion.p variants={itemVariants} className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Streamline your 401(k) plan management with a comprehensive solution that brings everything into focus.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12 sm:space-y-24 mb-16 sm:mb-32 px-2 md:px-8"
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
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 auto-rows-fr px-4 md:px-8"
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
        className="text-center mt-16 sm:mt-32 mb-10 sm:mb-20 px-4"
      >
        <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extralight mb-4 sm:mb-6">
          Ready to get a <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400'>360° view</span> of your plans?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Start managing your 401(k) plans more efficiently with PlanSync.
        </motion.p>
        <motion.div variants={itemVariants}>
          <GradientButtonWithArrow buttonText="Get Started" link="/contact-plansync" showArrow={true} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThreeSixtyDegreePlanView;