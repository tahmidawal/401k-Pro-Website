import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll } from 'framer-motion';
import {
  FileText,
  Clock,
  ClipboardCheck,
  Users,
  Shield,
  UserPlus,
  Download,
} from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

// Hero section animation
const heroVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};



// Modern feature card with 3D hover effect
const FeatureCard = ({ icon: Icon, title, description }) => {
  const ref = useRef(null);
  const isInView = useScroll(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      whileHover={{ translateY: -8 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-xl sm:rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-8 rounded-xl sm:rounded-3xl border border-white/20 shadow-lg overflow-hidden h-full flex flex-col">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-14 sm:h-14 relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-lg sm:rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-white rounded-lg sm:rounded-xl border border-white/50">
                <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-light bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent flex-shrink-0">
              {title}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed flex-grow">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Modern step card with number indicator
const StepCard = ({ number, text }) => (
  <motion.div whileHover={{ scale: 1.02 }} className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-xl sm:rounded-2xl blur-lg"></div>
    <div className="relative flex items-center bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20 shadow-lg">
      <div className="flex-shrink-0 mr-4 sm:mr-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-full blur-lg"></div>
          <div className="relative w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-light">
            {number}
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-700 font-light">{text}</p>
    </div>
  </motion.div>
);

// Modern download button
const DownloadButton = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl overflow-hidden"
  >
    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-all duration-300"></div>
    <div className="absolute inset-0 border border-blue-600/30 rounded-lg sm:rounded-xl"></div>
    <Download
      size={16}
      className="text-blue-600 transition-transform duration-300 group-hover:-translate-y-1"
    />
    <span className="relative text-sm sm:text-base font-light text-gray-700">{name}</span>
  </a>
);

const AutomatReprting = () => {
  // Same features data
  const features = [
    {
      title: "Quarterly & Annual Reports",
      description:
        "PlanSync generates detailed quarterly and annual reports automatically, keeping clients informed and ensuring compliance with minimal effort.",
      icon: ClipboardCheck,
    },
    {
      title: "One-Click Reporting",
      description:
        "Generate comprehensive compliance reports in under 30 seconds. With just one click, your reports are ready—saving you hours of manual work.",
      icon: Clock,
    },
    {
      title: "Concise & Impactful",
      description:
        "Reports are designed to be 5 pages max, delivering only the most relevant insights. No more 80-page documents—just clear, actionable information.",
      icon: FileText,
    },
    {
      title: "Personalized & Scalable",
      description:
        "Every report is built from actual client interactions—ensuring they are always **personalized, relevant, and easy to scale** without losing the personal touch.",
      icon: Users,
    },
    {
      title: "Effortless Due Diligence",
      description:
        "PlanSync ensures **seamless documentation of fiduciary responsibilities**, making it easy to demonstrate compliance and maintain airtight records.",
      icon: Shield,
    },
    {
      title: "Support for Plan Sponsors",
      description:
        "Under ERISA, plan sponsors must document their plan management process, but they often lack the time. **PlanSync simplifies compliance by handling documentation for them.**",
      icon: UserPlus,
    },
  ];
  // Example reports
  const exampleReports = [
    {
      name: 'Quarterly Report Example',
      url: 'https://drive.google.com/file/d/1-4d6iQnDrF3L-uG-AwhNSFm2rOdPtkOX/view?usp=sharing'
    },
    {
      name: 'Annual Report Example',
      url: 'https://drive.google.com/file/d/1VyzpZ-q7BrNKzbtbhdtKQ8WXR-Paxc5a/view?usp=sharing'
    }
  ];

  // SEO keywords
  const seoKeywords = [
    '401k compliance software',
    'automated 401k reporting',
    '401k quarterly reporting software',
    '401k annual reporting',
    'ERISA compliance reporting',
    'fiduciary reporting tools',
    'streamline 401k reporting',
    'AI-powered 401k tools',
    'retirement plan reporting',
    'financial advisor reporting software',
    'plan sponsor documentation',
    'automated compliance testing',
    '401k plan document management',
    'retirement plan automation',
    'fiduciary risk management'
  ].join(', ');

  // Structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PlanSync Automated Reporting',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description:
      'AI-powered 401(k) plan reporting software for financial advisors. Generate comprehensive, personalized compliance reports with a single click.',
    featureList: [
      'Automated quarterly and annual reports',
      'One-click report generation',
      'Concise, personalized reporting',
      'ERISA compliance documentation',
      'Plan sponsor support',
      'Fiduciary documentation'
    ]
  };

  return (
    <>
      <Helmet>
        <title>Automated 401(k) Reporting Software for Financial Advisors | PlanSync</title>
        <meta
          name="description"
          content="Transform your 401(k) plan reporting with AI-powered automation. Generate comprehensive, personalized compliance reports in seconds. Perfect for financial advisors and plan sponsors."
        />
        <meta name="keywords" content={seoKeywords} />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Automated 401(k) Reporting Software | PlanSync"
        />
        <meta
          property="og:description"
          content="Generate comprehensive, personalized 401(k) compliance reports with a single click. Save hours on reporting while maintaining perfect documentation."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://401kpro.com/automated-reporting"
        />
        <meta
          property="og:image"
          content="https://401kpro.com/images/automated-reporting-preview.jpg"
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Automated 401(k) Reporting Software | PlanSync"
        />
        <meta
          name="twitter:description"
          content="Generate comprehensive, personalized 401(k) compliance reports with a single click. Save hours on reporting while maintaining perfect documentation."
        />
        <meta
          name="twitter:image"
          content="https://401kpro.com/images/automated-reporting-preview.jpg"
        />

        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="author"
          content="PlanSync - AI-Powered 401(k) Plan Management Software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="canonical"
          href="https://401kpro.com/automated-reporting"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="relative min-h-screen overflow-hidden font-['Roboto',sans-serif] font-light">
        {/* Background animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* 
          Uncomment if you want the animated circles:
          <AnimatedCircle delay={0} className="top-0 left-0 w-[500px] h-[500px] bg-blue-200/30" />
          <AnimatedCircle delay={2} className="bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/30" />
          <AnimatedCircle delay={4} className="top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-200/20" />
          */}
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-24">
          {/* Hero Section */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-12 sm:mb-20"
          >
            <motion.h1 variants={textVariants} className="text-4xl sm:text-6xl font-extralight mb-4 sm:mb-6">
              <span className="text-transparent bg-clip-text bg-gray-600">
                Automated
              </span>
              <span className="text-transparent bg-clip-text bg-gray-600"> </span>
              <motion.span
                variants={textVariants}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"
              >
                Reporting
              </motion.span>
            </motion.h1>
            <motion.p
              variants={textVariants}
              className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4"
            >
              Generate comprehensive, personalized compliance reports with a single click
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-24"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>

          {/* How It Works Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 sm:mb-24"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl sm:text-4xl font-extralight text-center mb-8 sm:mb-12"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                How It Works
              </span>
            </motion.h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                'Track your plan touchpoints and requirements over the course of the year',
                "Select the type of report you'd like to generate",
                'Click one button and generate your report',
                'Download and make any necessary edits',
                'Send to your clients',
                "That's it!"
              ].map((step, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <StepCard number={index + 1} text={step} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Example Reports Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative mb-16 sm:mb-24"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-xl sm:rounded-3xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-12 rounded-xl sm:rounded-3xl border border-white/20 shadow-lg">
              <motion.h2
                variants={textVariants}
                className="text-2xl sm:text-3xl font-light text-center mb-6 sm:mb-8"
              >
                Example Reports
              </motion.h2>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap justify-center gap-4 sm:gap-6"
              >
                {exampleReports.map((report, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <DownloadButton {...report} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={textVariants}
              className="text-3xl sm:text-4xl font-extralight mb-4 sm:mb-6"
            >
              Ready to streamline your reporting?
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
            >
              Join forward-thinking advisors who are saving hours on compliance reporting
            </motion.p>
            <motion.div variants={itemVariants}>
              <GradientButtonWithArrow
                buttonText="Get Started"
                link="/book-a-demo"
                showArrow={true}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AutomatReprting;