import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Database, Calendar, FileText, Settings, RefreshCcw, Users, DollarSign, Target, TrendingUp, Play } from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';
import MasterSpreadsheetMainImage from './MasterSpreadsheetMain.webp';
import ThreeSixyPlanViewVideo from './ThreeSixtyPlanViewVideo.mp4';
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

const HeroShowcase = ({ title, description, media, isVideo, index, reversed }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);

  return (
    <motion.div 
      ref={ref} 
      style={{ scale, opacity }}
      className="relative group mb-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-400/5 to-purple-500/5 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
      
      <div className="relative">
        {/* Content Section */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-light mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="relative max-w-6xl mx-auto px-4"
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-300/20 to-blue-500/20 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
            
            {/* Media Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
              {isVideo ? (
                <div className="relative">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-auto rounded-2xl"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={media} type="video/mp4" />
                  </video>
                  
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-black/10 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Play className="w-5 h-5 text-white" />
                      <span className="text-white text-sm font-medium">Interactive Demo</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <img 
                    src={media} 
                    alt={title} 
                    className="w-full h-auto rounded-2xl transform group-hover:scale-105 transition-transform duration-700" 
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
            </div>

            {/* Feature Badges */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-3">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                  <span className="text-sm font-medium text-gray-700">✨ AI Powered</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                  <span className="text-sm font-medium text-gray-700">🚀 Real-time</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                  <span className="text-sm font-medium text-gray-700">🔒 Secure</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ShowcaseGrid = ({ showcases }) => (
  <div className="relative">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }}></div>
    </div>

    {/* Showcases */}
    <div className="relative space-y-40">
      {showcases.map((showcase, index) => (
        <HeroShowcase 
          key={index} 
          {...showcase} 
          index={index}
        />
      ))}
    </div>

    {/* Transition Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center py-32 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-light mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Everything You Need
          </span>
          <br />
          <span className="text-gray-600">in One Platform</span>
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Discover the comprehensive suite of tools designed to streamline your 401(k) plan management from client onboarding to compliance tracking.
        </p>
      </div>
      
      {/* Decorative Elements */}
      <div className="flex justify-center mt-16 space-x-8">
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </motion.div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, details, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      variants={itemVariants}
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-blue-600/10 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl h-full overflow-hidden">
        {/* Header Section */}
        <div className="p-8 pb-6">
          <div className="flex items-start space-x-6 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl blur-lg opacity-30 transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-light bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3 leading-tight">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="px-8 pb-8">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Key Features</h4>
          <div className="space-y-3">
            {details.slice(0, 3).map((detail, idx) => (
              <motion.div 
                key={idx}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
              </motion.div>
            ))}
            {details.length > 3 && (
              <motion.div 
                className="flex items-center space-x-2 text-blue-600 text-sm font-medium pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0.7 }}
              >
                <span>+ {details.length - 3} more features</span>
              </motion.div>
            )}
          </div>
        </div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && details.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center"
            >
              <h4 className="text-xl font-light bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">{title}</h4>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {details.map((detail, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FeatureSection = ({ title, features, description }) => (
  <motion.div 
    variants={itemVariants}
    className="mb-20"
  >
    <div className="text-center mb-12">
      <h3 className="text-3xl font-light bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">{title}</h3>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} index={index} />
      ))}
    </div>
  </motion.div>
);

const ThreeSixtyDegreePlanView = () => {
  const coreFeatures = [
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
    }
  ];

  const advancedFeatures = [
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
    }
  ];

  const businessFeatures = [
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
      title: "Unified Data Consolidation",
      description: "Transform scattered information into a centralized command center. All your fiduciary plan management data, client details, and compliance requirements unified in one intelligent platform that adapts to your workflow.",
      media: ThreeSixyPlanViewVideo,
      isVideo: false
    },
    {
      title: "Intelligent Client Management",
      description: "Experience next-generation client relationship management designed specifically for 401(k) advisors. Smart organization, instant access, and comprehensive tracking that grows with your practice.",
      media: ThreeSixyPlanViewVideo,
      isVideo: false
    },
    {
      title: "AI-Powered Data Entry",
      description: "Say goodbye to manual data entry forever. Our advanced AI reads, understands, and processes your PDFs, plan documents, and reports automatically - saving you hours while eliminating human error.",
      media: AIPDFDataExtraction,
      isVideo: true
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Get instant insights into your entire portfolio of plans. Monitor performance, track compliance deadlines, and identify opportunities with our comprehensive analytics dashboard designed for strategic decision-making.",
      media: DashboardImage,
      isVideo: false
    },
    {
      title: "Instant Information Discovery",
      description: "Find any piece of information in seconds with our powerful global search. From plan details to compliance requirements, everything is searchable, organized, and instantly accessible when you need it most.",
      media: PlanDesignAndElectionsQuery,
      isVideo: true
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
        className="mb-16 sm:mb-32"
      >
        <ShowcaseGrid showcases={showcases} />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 md:px-8 mb-20"
      >
        <FeatureSection 
          title="Core Plan Management"
          description="Essential tools for comprehensive 401(k) plan administration and client relationship management."
          features={coreFeatures}
        />
        
        <FeatureSection 
          title="Advanced Analytics & Compliance"
          description="Sophisticated features for performance monitoring, compliance tracking, and service transparency."
          features={advancedFeatures}
        />
        
        <FeatureSection 
          title="Business Growth"
          description="Tools to help grow your advisory practice and manage client relationships."
          features={businessFeatures}
        />
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