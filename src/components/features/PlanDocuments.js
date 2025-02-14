import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FileText, Bot, Share} from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';
import { Helmet } from 'react-helmet-async';

// Constants
const FEATURES = [
  {
    title: "AI-Powered Document Assistant",
    description:
      "Ask questions about your documents in real-time and receive instant, contextual responses that reference relevant DOL and ERISA regulations. Our AI understands complex regulatory language and can help clarify specific clauses, requirements, and implications for your plan management.",
    icon: Bot
  },
  {
    title: "Centralized Document Management",
    description:
      "Access adoption agreements, SPDs, Form 5500s, and compliance checklists instantly in one secure location. Our advanced search and filtering tools make document retrieval effortless. Never waste time searching through email threads or shared drives again - everything is organized and accessible in seconds.",
    icon: FileText
  },
  {
    title: "Seamless Integration & Sharing",
    description:
      "Upload files in multiple formats and share them securely with stakeholders. Our built-in email features maintain data protection while enabling efficient collaboration. Set custom access permissions, track document versions, and maintain a complete audit trail of all document activities.",
    icon: Share
  }
];

const USE_CASES = [
  {
    title: "Compliance Reviews",
    description:
      "Upload critical documents and use AI to quickly confirm compliance requirements without reading full documents. Our system automatically flags potential issues and provides regulatory context to help you maintain compliance with confidence. Perfect for quarterly and annual reviews."
  },
  {
    title: "Audit Preparation",
    description:
      "Organize SPDs, plan amendments, and service agreements in one location for seamless audit workflows. Generate comprehensive audit trails and documentation packages in minutes instead of hours. Our system helps you maintain perfect documentation that will satisfy even the most thorough auditor."
  },
  {
    title: "Document Sharing",
    description:
      "Email plan amendments, benefit statements, or compliance updates directly to clients without leaving the app. Set up automated distribution schedules and track recipient engagement. Maintain security and confidentiality while ensuring all stakeholders have the information they need."
  },
  {
    title: "Participant Inquiries",
    description:
      "Quickly reference plan details and leverage AI to clarify specific clauses during participant meetings. Get instant, accurate answers to complex questions about benefits, eligibility, and procedures. Our AI assistant helps you provide confident, consistent responses that keep participants informed and satisfied."
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
      "Securely share documents and insights with your team and stakeholders. Set custom access permissions, track document versions, and maintain complete audit trails of all activities."
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

const FeatureSection = ({ title, description, icon: Icon, isReversed }) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 relative`}>
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-3xl blur-2xl"></div>
        <div className="">
          <div className="bg-white/80 p-8 border border-gray-300 rounded-3xl h-full relative overflow-hidden">
            <FloatingElement delay={0.5}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl"></div>
            </FloatingElement>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 blur-lg opacity-50"></div>
                <div className="relative w-full h-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-light">{title}</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const UseCaseCard = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30"></div>
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
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xl">
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
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">Documents</span>
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
      How It Works
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
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
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
    <motion.h2 variants={SLIDE_UP_VARIANT} className="text-2xl sm:text-3xl font-light text-center mb-8 sm:mb-12">
      Use Cases
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
        link="/book-a-demo"
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