import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Lock,
  Shield,
  Server,
  Bell,
  Database,
  Code,
  Trash
} from 'lucide-react';

// Floating animation for background elements
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
const SecurityCategory = ({ title, icon: Icon, features, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-xl sm:rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
    <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-8 rounded-xl sm:rounded-3xl border border-white/20 shadow-lg">
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="w-10 h-10 sm:w-14 sm:h-14 relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-lg sm:rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
          <div className="relative flex items-center justify-center w-full h-full bg-white rounded-lg sm:rounded-xl border border-white/50">
            <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="text-lg sm:text-2xl font-light">{title}</h3>
      </div>
      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-2 text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400"></div>
            <span className="text-xs sm:text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

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
    name: 'Enterprise-Grade Security | PlanSync',
    description:
      'Explore advanced security measures that protect your data. Features include network security, data protection, access control, backups, and application security for 401(k) plan management.',
    about: {
      '@type': 'Thing',
      name: 'Security'
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-['Roboto',sans-serif] font-light">
      {/* SEO Helmet */}
      <Helmet>
        <title>Enterprise-Grade Security | PlanSync</title>
        <meta
          name="description"
          content="Your data's safety is our top priority. Learn about our comprehensive security measures, including network security, data protection, access control, and automated backups."
        />
        <meta name="keywords" content={seoKeywords} />

        {/* Open Graph */}
        <meta property="og:title" content="Enterprise-Grade Security | PlanSync" />
        <meta
          property="og:description"
          content="Protecting your 401k data with encryption, MFA, and robust infrastructure. Explore our security features for the utmost data protection."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/security" />
        <meta property="og:image" content="https://your-domain.com/images/security-og.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Enterprise-Grade Security | PlanSync" />
        <meta
          name="twitter:description"
          content="Robust encryption, frequent backups, and advanced monitoring to safeguard your 401k data. Learn about our security features."
        />
        <meta name="twitter:image" content="https://your-domain.com/images/security-og.jpg" />

        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="author"
          content="PlanSync - AI-Powered 401(k) Plan Management Software"
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
      <FloatingElement>
        <div className="absolute top-0 left-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute bottom-0 right-0 w-[200px] sm:w-[600px] h-[200px] sm:h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </FloatingElement>

      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-24">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12 sm:mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-extralight mb-4 sm:mb-6"
          >
            <span className="text-gray-800">
              Enterprise Grade
            </span>
            <span> </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-600 to-cyan-400">
              Security
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 px-4"
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
          className="max-w-4xl mx-auto space-y-4 sm:space-y-6"
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
          className="max-w-4xl mx-auto mt-16 sm:mt-24"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-xl sm:rounded-3xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-6 sm:p-12 rounded-xl sm:rounded-3xl border border-white/20 shadow-lg">
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl font-light text-center mb-4 sm:mb-6"
              >
                Our Commitment to You
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base text-gray-600 text-center font-light max-w-3xl mx-auto"
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