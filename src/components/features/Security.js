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
      title: "Data Encryption",
      icon: Shield,
      features: [
        "End-to-End Encryption with industry-standard TLS/SSL (256-bit)",
        "AES-256 encryption for data at rest in databases",
        "AWS S3 encrypted buckets for document storage",
        "Encrypted transmission across all application layers",
        "Secure encryption key management"
      ]
    },
    {
      title: "User Authentication",
      icon: Lock,
      features: [
        "Strong password complexity requirements",
        "Multi-Factor Authentication (MFA)",
        "Secure session management with time-limited tokens",
        "Login monitoring for suspicious activities",
        "Automated logout for inactive sessions"
      ]
    },
    {
      title: "Access Controls",
      icon: Database,
      features: [
        "Role-based access control (RBAC)",
        "Fine-grained permissions for document access",
        "Comprehensive access logging for audit trails",
        "Just-in-time access provisioning",
        "Regular access reviews"
      ]
    },
    {
      title: "Application Security",
      icon: Code,
      features: [
        "Security-first architecture design",
        "Regular penetration testing and vulnerability assessments",
        "Protected API endpoints with rate limiting",
        "Cross-Site Scripting (XSS) protection",
        "SQL injection prevention with parameterized queries",
        "Cross-Site Request Forgery (CSRF) protection"
      ]
    },
    {
      title: "Infrastructure Security",
      icon: Server,
      features: [
        "AWS Security with multi-layered protection",
        "Geographic redundancy across multiple regions",
        "Regular security patching and updates",
        "Network segregation and isolation",
        "Advanced firewall configurations",
        "Real-time intrusion detection"
      ]
    },
    {
      title: "AI & Third-Party Security",
      icon: Bell,
      features: [
        "Strict AI data handling practices",
        "Limited AI data retention",
        "Careful selection of AI providers",
        "Rigorous security assessment for vendors",
        "Minimal data sharing with third parties",
        "Secure API connections for all integrations"
      ]
    },
    {
      title: "Compliance & Standards",
      icon: Shield,
      features: [
        "Alignment with GDPR and CCPA regulations",
        "Following NIST Cybersecurity Framework",
        "OWASP security guidelines implementation",
        "Regular compliance reviews",
        "Ongoing regulatory monitoring"
      ]
    },
    {
      title: "Incident Response",
      icon: Bell,
      features: [
        "Dedicated security response team",
        "Documented incident response procedures",
        "Clear user notification process",
        "Regular backups with encryption",
        "Comprehensive disaster recovery planning",
        "Resilient cloud infrastructure"
      ]
    }
  ];

  // SEO data
  const seoKeywords = [
    '401k security',
    'data encryption',
    'multi-factor authentication',
    'AWS security infrastructure',
    'GDPR compliance',
    'CCPA compliance',
    'role-based access control',
    'incident response',
    'AI data security',
    'financial data protection',
    'NIST security framework',
    'penetration testing',
    'secure authentication',
    'data privacy',
  ].join(', ');

  // Structured Data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Security and Privacy | PlanSync',
    description:
      'PlanSync implements comprehensive security measures including encryption, multi-factor authentication, access controls, and continuous monitoring to ensure the protection of your sensitive financial data.',
    about: {
      '@type': 'Thing',
      name: 'Data Security and Privacy'
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-['Roboto',sans-serif] font-light">
      {/* SEO Helmet */}
      <Helmet>
        <title>Security and Privacy | PlanSync</title>
        <meta
          name="description"
          content="PlanSync protects your data with end-to-end encryption, role-based access control, and enterprise-grade infrastructure security. Learn about our comprehensive security measures that ensure the confidentiality and integrity of your financial information."
        />
        <meta name="keywords" content={seoKeywords} />

        {/* Open Graph */}
        <meta property="og:title" content="Security and Privacy | PlanSync" />
        <meta
          property="og:description"
          content="Discover how PlanSync safeguards your data with advanced encryption, multi-factor authentication, and compliance with industry security standards. Your financial data security is our top priority."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://plansync.ai/security" />
        <meta property="og:image" content="https://plansync.ai/images/security-og.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Security and Privacy | PlanSync" />
        <meta
          name="twitter:description"
          content="PlanSync implements comprehensive security measures including encryption, access controls, and compliance with data protection regulations to keep your financial information safe."
        />
        <meta name="twitter:image" content="https://plansync.ai/images/security-og.jpg" />

        {/* Additional meta tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="author"
          content="PlanSync - AI-Powered 401(k) Plan Management Software"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="canonical"
          href="https://plansync.ai/security"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
              Security
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
          >
            At PlanSync.ai, we understand that the security and privacy of your data are paramount. 
            We've implemented comprehensive security measures to protect your information and ensure 
            a secure experience while using our application.
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
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-light text-center mb-8 sm:mb-10"
          >
            Comprehensive Security Features
          </motion.h2>
          
          {securityCategories.map((category, index) => (
            <SecurityCategory
              key={index}
              index={index}
              {...category}
            />
          ))}
        </motion.div>

        {/* Contact and Support Section */}
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
                Contact and Support
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-3xl mx-auto"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-2">For security concerns and inquiries</p>
                  <a href="mailto:security@plansync.ai" className="text-blue-600 hover:underline">security@plansync.ai</a>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-1">Support Portal</h3>
                  <p className="text-gray-600 mb-2">Access our security resources</p>
                  <a href="https://support.plansync.ai/security" className="text-blue-600 hover:underline">support.plansync.ai/security</a>
                </div>
              </motion.div>
            </div>
          </div>
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
                className="text-sm sm:text-base text-gray-600 text-center font-light max-w-3xl mx-auto mb-4"
              >
                We are committed to maintaining the highest standards of security to protect your sensitive information.
                Our security measures are continuously evaluated and enhanced to address evolving threats in the digital landscape.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-base text-gray-600 text-center font-light max-w-3xl mx-auto"
              >
                If you have any questions about our security practices or need to report a security concern, 
                please contact our security team at <a href="mailto:security@plansync.ai" className="text-blue-600 hover:underline">security@plansync.ai</a>.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;