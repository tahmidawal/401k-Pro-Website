import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Check,
  ChevronDown,
  Lock,
  Shield,
  Server,
  Bell,
  Database,
  Code,
  Trash
} from 'lucide-react';

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



// Modern security category card
const SecurityCategory = ({ title, features, icon: Icon, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      variants={itemVariants}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg overflow-hidden">
        <button
          className="flex justify-between items-center w-full text-left p-8 group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-6">
            <div className="relative w-14 h-14 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-white rounded-xl border border-white/50">
                <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="text-xl font-light bg-gradient-to-bl from-sky-400 to-blue-800 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
          >
            <ChevronDown size={24} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-8 pb-8"
            >
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start group"
                  >
                    <div className="relative w-6 h-6 flex-shrink-0 mr-4 mt-0.5">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="relative flex items-center justify-center w-full h-full bg-white rounded-full border border-white/50">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    <span className="text-gray-600 font-light">{feature}</span>
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

const Security = () => {
  const securityCategories = [
    {
      title: "Network Security",
      icon: Server,
      features: [
        "Virtual Private Cloud to isolate the application",
        "Web Application Firewall in AWS",
        "Content Delivery in HTTPS",
        "AWS S3 encryption at rest",
        "AWS S3 backup encryption at transmission"
      ]
    },
    {
      title: "Data Protection",
      icon: Shield,
      features: [
        "Encryption at rest for Database",
        "Encryption at rest for app",
        "User parametrized queries to prevent SQL Injections",
        "HTTPonly cookies",
        "Encrypt Cookies",
        "Include Limits on Cookies"
      ]
    },
    {
      title: "Access Control",
      icon: Lock,
      features: [
        "Multi-Factor Authentication (MFA)",
        "JWT tokens",
        "Automated logout",
        "Role based access control"
      ]
    },
    {
      title: "Monitoring and Testing",
      icon: Bell,
      features: [
        "AWS Cloudwatch",
        "Amazon inspector for automated vulnerability testing",
        "Regular security assessment and pen testing",
        "Rate limiting on all API endpoints"
      ]
    },
    {
      title: "Backup and Recovery",
      icon: Database,
      features: [
        "Regular backups",
        "Regular rollbacks",
        "Disaster Recovery Process",
        "Backup system ready to be deployed"
      ]
    },
    {
      title: "Application Security",
      icon: Code,
      features: [
        "Containerize application into docker",
        "Never let sensitive info be displayed on the error page",
        "AWS Secrets manager or parameter store for .env files",
        "AWS Secrets manager or parameter store for .env files backup",
        "Rotate credentials every 3 days"
      ]
    },
    {
      title: "Data Management",
      icon: Trash,
      features: [
        "Have process for secure disposal of data"
      ]
    }
  ];

  // SEO data
  const seoKeywords = [
    '401k security',
    'AWS security for 401k platform',
    'data protection',
    'encrypted backups',
    'MFA for retirement plan',
    'pen testing 401k software',
    'containerized application security',
  ].join(', ');

  // Structured Data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enterprise-Grade Security | 401k Pro',
    description:
      'Explore advanced security measures that protect your data. Features include network security, data protection, access control, backups, and application security for 401(k) plan management.',
    about: {
      '@type': 'Thing',
      name: 'Security'
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-['Roboto',sans-serif] font-light">
      {/* SEO Helmet */}
      <Helmet>
        <title>Enterprise-Grade Security | 401k Pro</title>
        <meta
          name="description"
          content="Your data's safety is our top priority. Learn about our comprehensive security measures, including network security, data protection, access control, and automated backups."
        />
        <meta name="keywords" content={seoKeywords} />

        {/* Open Graph */}
        <meta property="og:title" content="Enterprise-Grade Security | 401k Pro" />
        <meta
          property="og:description"
          content="Protecting your 401k data with encryption, MFA, and robust infrastructure. Explore our security features for the utmost data protection."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/security" />
        <meta property="og:image" content="https://your-domain.com/images/security-og.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise-Grade Security | 401k Pro" />
        <meta
          name="twitter:description"
          content="Robust encryption, frequent backups, and advanced monitoring to safeguard your 401k data. Learn about our security features."
        />
        <meta name="twitter:image" content="https://your-domain.com/images/security-og.jpg" />

        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="author"
          content="401k Pro - AI-Powered 401(k) Plan Management Software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="canonical"
          href="https://your-domain.com/security"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Background animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* If you want your AnimatedCircle components, uncomment them: */}
        {/* <AnimatedCircle delay={0} className="top-0 left-0 w-[500px] h-[500px] bg-blue-200/30" />
        <AnimatedCircle delay={2} className="bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/30" />
        <AnimatedCircle delay={4} className="top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-200/20" /> */}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl font-extralight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-bl from-sky-400 to-blue-800">
              Enterprise
            </span>
           <span> </span>
            <span className="text-gray-800">
              Grade Security
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Your data's safety is our top priority
          </motion.p>
        </motion.div>

        {/* Security Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {securityCategories.map((category, index) => (
            <SecurityCategory
              key={index}
              index={index}
              {...category}
            />
          ))}
        </motion.div>

        {/* Commitment Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-24"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-white/20 shadow-lg">
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-light text-center mb-6"
              >
                Our Commitment to You
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 text-center font-light max-w-3xl mx-auto"
              >
                We are committed to maintaining the highest standards of security to protect our organization and the privacy of its clients. Our security controls are designed and implemented to ensure the confidentiality, integrity, and availability of your data.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;