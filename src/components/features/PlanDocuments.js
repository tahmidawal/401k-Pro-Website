import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FileText, Bot, Share, X } from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';
import PlanDocumentsChatAIBot from './PlanDocumentsChatAIBot.mp4';
import CentralizedDocuments from './PlanDocumentsHub2.mp4';
import SendDocuments from './SendDocuments.mp4';
import { Helmet } from 'react-helmet-async';

// Constants
const FEATURES = [
  {
    "title": "AI-Powered Document Assistant",
    "description":
      "Upload any PDF, ask questions, and get instant answers with direct page references. Our AI scans your documents, finds relevant information, and takes you straight to the exact page where the answer is located—saving you time searching from plan information.",
    "icon": Bot,
    "video": PlanDocumentsChatAIBot
  },
  {
    "title": "Centralized Document Management",
    "description":
      "Securely store and instantly access any 401(k)-related document, including adoption agreements, SPDs, Form 5500s, compliance checklists, and more. Our advanced search and filtering tools make document retrieval effortless, so you never have to dig through email threads or shared drives again—everything is organized and accessible in seconds.",
    "icon": FileText,
    "video": CentralizedDocuments
  },
  {
    "title": "Seamless Integration & Sharing",
    "description":
      "Upload files in multiple formats and share them securely with stakeholders. Our built-in email features maintain data protection while enabling efficient collaboration. Set custom access permissions, track document versions, and maintain a complete audit trail of all document activities.",
    "icon": Share,
    "video": SendDocuments
  }
];

const USE_CASES = [
  {
    title: "Centralized Compliance & Document Access",
    description:
      "Stop wasting time searching through emails, file folders, and outdated systems. Store all critical plan documents—SPDs, amendments, service agreements, and compliance records—in one structured, easy-to-access location. Our AI instantly retrieves key details and flags compliance risks, making quarterly and annual reviews effortless."
  },
  {
    title: "Effortless Audit Readiness",
    description:
      "Eliminate last-minute scrambling before an audit. Maintain a complete, well-organized archive of plan documents that can be instantly retrieved and compiled into audit-ready reports. With full version tracking and automated compliance checks, you'll always be prepared for regulatory reviews without stress."
  },
  {
    title: "Seamless Document Sharing & Collaboration",
    description:
      "Securely share plan amendments, benefit statements, and compliance updates with clients, recordkeepers, and TPAs—all from a single platform. Set custom access permissions, automate recurring distributions, and track engagement, ensuring the right stakeholders always have the latest information without endless email chains."
  },
  {
    title: "Instant Answers to Participant & Client Inquiries",
    description:
      "Never dig through PDFs again during client or participant meetings. Simply search for plan details or ask our AI assistant complex questions about benefits, eligibility, and compliance requirements. Get instant, reliable answers so you can provide clear, confident guidance without delay."
  }
];

const STEPS = [
  {
    step: 1,
    title: "Upload & Organize",
    description:
      "Upload your documents and categorize them with custom metadata for easy access. Our AI automatically recognizes document types and suggests appropriate tags and categories."
  },
  {
    step: 2,
    title: "Ask Questions",
    description:
      "Use our AI chatbot to get instant insights from your documents. Ask complex questions about plan details, compliance requirements, or specific clauses - our AI understands context and provides accurate, relevant answers."
  },
  {
    step: 3,
    title: "Share & Collaborate",
    description:
      "Securely share documents and insights with your team and stakeholders. Set custom access permissions, track document versions, and maintain a detailed audit trail to promote transparency, compliance, and collaboration across all plan stakeholders."
  }
];

const DOCUMENT_TYPES = [
              'Adoption Agreement',
              'Annual Plan Review',
              'Benefit Statements',
              'Board Resolutions Related to the Plan',
              'Census Data Reports',
              'Compliance Testing Results',
              'Contribution Reports',
              'Corrective Action Documentation',
              'Custodial Agreement',
              'DOL/IRS Correspondence',
              'Distribution Forms',
              'Eligible Employee Notification',
              'ERISA Fidelity Bond Documentation',
              'Expense Reimbursement Records',
              'Fee Benchmarking Reports',
              'Fiduciary Audit Checklist',
              'Fiduciary Responsibility Documentation',
              'Form 1099-R (Distributions)',
              'Form 5500',
              'Hardship Withdrawal Requests',
              'Investment Change Notices',
              'Investment Monitoring Reports',
              'Investment Performance Reports',
              'Investment Policy Statement (IPS)',
              'IRS Determination Letter',
              'Loan Request Forms',
              'Participant Complaints & Resolutions',
              'Participant Education Materials',
              'Participant Fee Disclosure',
              'Participant Loan Records',
              'Participant Notices (e.g., Safe Harbor, QDIA)',
              'Participant Termination Notices',
              'Plan Amendments',
              'Plan Audit Reports',
              'Plan Compliance Checklists',
              'Plan Design Documentation',
              'Plan Document',
              'Plan Enrollment Kit',
              'Plan Health Report',
              'Plan Highlights',
              'Plan Restatement Documents',
              'Plan Sponsor Meeting Minutes',
              'Quarterly/Annual Performance Reports',
              'Recordkeeper & TPA Correspondence',
              'Regulatory Filing Confirmations',
              'Rollover Acknowledgment Forms',
              'Safe Harbor Notices',
              'Service Agreements',
              'Summary Annual Report (SAR)',
              'Summary of Material Modifications (SMM)',
              'Summary Plan Description (SPD)',
              'Testing & Coverage Results',
              'Trust Agreement',
              'Vendor Fee Disclosures'
];

// Animation Variants
const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  },
  item: {
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
  }
};

const STAGGER_ANIMATION_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const SLIDE_UP_VARIANT = {
  hidden: { 
    opacity: 0,
    y: 30
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};

// Modal component for expanded video
const VideoModal = ({ video, title, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div 
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300,
              duration: 0.3 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-2 right-2 z-10">
              <motion.button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6 text-gray-800" />
              </motion.button>
            </div>
            <div className="p-2">
              <video 
                autoPlay 
                loop 
                controls 
                className="w-full h-full object-contain rounded-lg"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <motion.div 
              className="p-4 bg-white"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-medium text-gray-800">{title}</h3>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [-1, 1, -1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
  >
    {children}
  </motion.div>
);

const MediaSection = ({ media, title, isVideo, onExpandVideo }) => {
  const videoRef = useRef(null);
  
  const handleClick = () => {
    if (videoRef.current) {
      // Create a ripple effect animation
      const ripple = document.createElement('div');
      ripple.className = 'absolute inset-0 bg-white/30 rounded-xl sm:rounded-2xl';
      ripple.style.animation = 'ripple 0.6s ease-out forwards';
      videoRef.current.parentNode.appendChild(ripple);
      
      // Remove the ripple element after animation completes
      setTimeout(() => {
        ripple.remove();
      }, 600);
      
      // Call the expand function
      onExpandVideo();
    }
  };
  
  return (
    <div className="relative group px-2 sm:px-4">
      <style jsx>{`
        @keyframes ripple {
          0% {
            opacity: 1;
            transform: scale(0.8);
          }
          100% {
            opacity: 0;
            transform: scale(1.05);
          }
        }
      `}</style>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-xl sm:rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-[1.02] transition-all duration-500">
        {isVideo ? (
          <>
            <div className="relative">
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl cursor-pointer" 
                onClick={handleClick}
              >
                <source src={media} type="video/mp4" />
              </video>
            </div>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              onClick={handleClick}
            >
              <motion.div 
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 flex items-center gap-2"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  damping: 15, 
                  stiffness: 300,
                  delay: 0.1 
                }}
              >
                <span>Click to expand</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.3 }}
                >
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </motion.svg>
              </motion.div>
            </motion.div>
          </>
        ) : (
          <img src={media} alt={title} className="w-full h-full object-cover rounded-xl sm:rounded-2xl" />
        )}
      </div>
    </div>
  );
};

const FeatureSection = ({ title, description, icon: Icon, video, isReversed }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const handleExpandVideo = () => {
    setIsVideoExpanded(true);
  };

  const handleCloseVideo = () => {
    setIsVideoExpanded(false);
  };

  return (
    <motion.div ref={ref} style={{ scale, opacity }} className="relative group px-2 sm:px-4 md:px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-xl sm:rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-8 md:p-12 rounded-xl sm:rounded-3xl border border-white/20 shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 items-center">
          {!isReversed ? (
            <>
              <motion.div className="space-y-4 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">{title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{description}</p>
              </motion.div>
              {video && <MediaSection media={video} title={title} isVideo={true} onExpandVideo={handleExpandVideo} />}
            </>
          ) : (
            <>
              {video && <MediaSection media={video} title={title} isVideo={true} onExpandVideo={handleExpandVideo} />}
              <motion.div className="space-y-4 sm:space-y-8">
                <h3 className="text-2xl sm:text-3xl font-light bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">{title}</h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">{description}</p>
              </motion.div>
            </>
          )}
        </div>
      </div>
      
      {/* Video Modal */}
      <VideoModal 
        video={video} 
        title={title} 
        isOpen={isVideoExpanded} 
        onClose={handleCloseVideo} 
      />
    </motion.div>
  );
};

const UseCaseCard = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30"></div>
    <div className="rounded-2xl relative bg-white/80 p-6">
      <FloatingElement>
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-xl"></div>
      </FloatingElement>
      <h4 className="text-xl font-light mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

const StepIndicator = ({ number }) => (
  <div className="relative">
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center text-white text-xl">
      {number}
    </div>
  </div>
);

// Page Sections
const Header = () => (
  <motion.div
    variants={STAGGER_ANIMATION_VARIANTS}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="text-center mb-12 sm:mb-20"
  >
    <motion.h1 variants={SLIDE_UP_VARIANT} className="text-4xl sm:text-6xl font-extralight mb-4 sm:mb-6">
      <span className="text-transparent bg-clip-text bg-gray-600">Plan</span>{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Documents</span>
    </motion.h1>
    <motion.p variants={SLIDE_UP_VARIANT} className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
      Transform your document management with AI-powered insights and seamless organization
    </motion.p>
  </motion.div>
);

const Features = () => (
  <div className="space-y-8 sm:space-y-16">
    {FEATURES.map((feature, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8,
          delay: index * 0.3,
          ease: [0.04, 0.62, 0.23, 0.98] 
        }}
      >
        <FeatureSection {...feature} isReversed={index % 2 === 1} />
      </motion.div>
    ))}
  </div>
);

const HowItWorks = () => (
  <motion.div
    variants={STAGGER_ANIMATION_VARIANTS}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="mt-16 sm:mt-24"
  >
    <motion.h2 variants={SLIDE_UP_VARIANT} className="text-2xl sm:text-3xl font-light text-center mb-8 sm:mb-16">
      How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Works</span>
    </motion.h2>
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
      {STEPS.map(({ step, title, description }) => (
        <motion.div
          key={step}
          variants={SLIDE_UP_VARIANT}
          className="text-center p-4 sm:p-6"
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <StepIndicator number={step} />
          </div>
          <h3 className="text-lg sm:text-xl font-light mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600">{description}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const DocumentTypes = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialDisplayCount = 12; // Show first 12 items by default

  return (
    <motion.div
      variants={STAGGER_ANIMATION_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mt-16 sm:mt-24"
    >
      <motion.h2 variants={SLIDE_UP_VARIANT} className="text-2xl sm:text-3xl font-light text-center mb-4 sm:mb-8">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
          Comprehensive
        </span>{' '}
        Document Support
      </motion.h2>
      <motion.p variants={SLIDE_UP_VARIANT} className="text-base sm:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
        Our platform supports all critical 401(k) plan documents, making it easy to organize and manage your entire document ecosystem
      </motion.p>
      <motion.div variants={SLIDE_UP_VARIANT} className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-xl sm:rounded-3xl blur-2xl transform rotate-3"></div>
        <div className="relative bg-white/80 backdrop-blur-xl p-4 sm:p-8 rounded-xl sm:rounded-3xl border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            {DOCUMENT_TYPES.slice(0, isExpanded ? undefined : initialDisplayCount).map((type, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-sm sm:text-base text-gray-600"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400"></div>
                <span>{type}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
              <motion.svg
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const UseCases = () => (
  <motion.div
    variants={STAGGER_ANIMATION_VARIANTS}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="mt-16 sm:mt-24"
  >
    <motion.h2 variants={SLIDE_UP_VARIANT} className="text-3xl sm:text-3xl font-light text-center mb-8 sm:mb-12">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">Use</span> Cases
    </motion.h2>
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {USE_CASES.map((useCase, index) => (
        <motion.div key={index} variants={SLIDE_UP_VARIANT}>
          <UseCaseCard {...useCase} />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

const CTASection = () => (
  <motion.div
    variants={STAGGER_ANIMATION_VARIANTS}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="text-center mt-16 sm:mt-24"
  >
    <motion.h2 variants={SLIDE_UP_VARIANT} className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6">
      Ready to Transform Your Document Management?
    </motion.h2>
    <motion.p variants={SLIDE_UP_VARIANT} className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
      Join forward-thinking advisors who are leveraging AI to streamline their document workflows
    </motion.p>
    <motion.div variants={SLIDE_UP_VARIANT}>
      <GradientButtonWithArrow 
        buttonText="Get Started" 
        link="/contact-plansync"
        showArrow={true}
      />
    </motion.div>
  </motion.div>
);

// Structured Data Example
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PlanSync Plan Documents Management',
  description:
    'Streamline your 401(k) plan document management with AI-powered tools, centralized storage, and secure sharing. Perfect for financial advisors and plan sponsors.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web-based',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  featureList: [
    'AI-powered document assistant',
    'Centralized document storage',
    'Automated compliance checks',
    'Secure sharing & collaboration',
    'Audit preparation tools'
  ]
};

// Main Component
const PlanDocuments = () => {
  return (
    <>
      <Helmet>
        {/* Primary Title Tag */}
        <title>Manage Plan Documents | PlanSync</title>

        {/* Meta Description & Keywords (same original meaning, optimized) */}
        <meta
          name="description"
          content="Streamline your 401(k) plan document management with AI-powered tools, centralized storage, and secure sharing options. Perfect for plan sponsors and financial advisors seeking compliance and efficiency."
        />
        <meta
          name="keywords"
          content="401k documents, AI-powered document management, compliance, audit preparation, secure sharing, plan sponsor, financial advisor, ERISA, fiduciary"
        />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Manage Plan Documents | PlanSync" />
        <meta 
          property="og:description" 
          content="Simplify 401(k) document management with centralized tools, AI-powered insights, and robust compliance features." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/plan-documents" />
        <meta property="og:image" content="https://your-domain.com/images/plan-documents-og.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manage Plan Documents | PlanSync" />
        <meta
          name="twitter:description"
          content="Easily store, search, and share 401(k) plan documents. Automate compliance checks and streamline audits with AI assistance."
        />
        <meta name="twitter:image" content="https://your-domain.com/images/plan-documents-og.jpg" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta 
          name="author" 
          content="PlanSync - AI-Powered 401(k) Plan Management Software"
        />
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1.0"
        />
        <link
          rel="canonical"
          href="https://your-domain.com/plan-documents"
        />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="relative min-h-screen overflow-hidden font-['Roboto',sans-serif] font-light">
        {/* Background animations */}
        <FloatingElement>
          <div className="absolute top-0 left-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-0 right-0 w-[200px] sm:w-[600px] h-[200px] sm:h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </FloatingElement>

        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-24">
          <Header />
          <Features />
          <HowItWorks />
          <UseCases />
          <DocumentTypes />
          <CTASection />
        </div>
      </div>
    </>
  );
};

export default PlanDocuments;