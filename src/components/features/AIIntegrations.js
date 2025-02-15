import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Bot,
  FileText,
  Upload,
  Mail,
  Sparkles,
  Clock,
  TrendingUp,
  ShieldCheck,
  Users,
  BrainCircuit
} from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';

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

// Feature card component
const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  return (
    <motion.div
      ref={ref}
      className="relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 blur-3xl opacity-10 -z-10 transform rotate-3"></div>
      <div className="h-full">
        <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-3xl h-full backdrop-blur-xl relative overflow-hidden flex flex-col border border-gray-300">
          <FloatingElement delay={index * 0.5}>
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          </FloatingElement>
          
          <div className="flex items-center gap-3 sm:gap-4 mb-4 flex-shrink-0">
            <div className="w-10 h-10 sm:w-16 sm:h-16 relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 blur-lg opacity-50"></div>
              <div className="relative w-full h-full rounded-lg sm:rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center">
                {React.cloneElement(feature.icon, { className: "w-5 h-5 sm:w-8 sm:h-8 text-white" })}
              </div>
            </div>
            <h3 className="text-lg sm:text-2xl font-light">{feature.title}</h3>
          </div>
          
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow">{feature.description}</p>
          
          <div className="space-y-2 flex-shrink-0">
            {feature.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="text-xs sm:text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component with SEO enhancements
const AIIntegration = () => {
  // Original feature data
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: "AI Chat Assistant",
      description: "Intelligent document analysis with contextual responses. Get instant insights about uploaded documents and receive answers backed by regulatory knowledge.",
      highlights: [
        "Ask questions about document content",
        "Receive contextual responses",
      ]
    },
    {
      icon: <Upload className="w-8 h-8 text-white" />,
      title: "Automated Data Entry",
      description: "Upload PDFs to automatically populate Plan Design, Elections, and Performance data. Save time and ensure accuracy with our smart document processing.",
      highlights: [
        "Automatic field population",
        "Smart document processing",
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "AI Professional Rewriting",
      description: "Transform your touchpoints with our AI Writer. Ensure consistent, professional language across all reports with just one click.",
      highlights: [
        "Professional tone adjustment",
        "Error-free content",
        "Consistent messaging"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Email Integration",
      description: "Forward stakeholder email chains to automatically generate documentation for touchpoints in your reports. Streamline your workflow with automated documentation.",
      highlights: [
        "Automatic documentation",
        "Email chain processing",
      ]
    }
  ];

  // Original benefits data
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate routine tasks like document review, data entry, and report generation, freeing up valuable time for client relationships."
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Save time and increase revenue by automating routine tasks and focusing on revenue-generating activities."
    },
    {
      icon: ShieldCheck,
      title: "Reduce Compliance Risk",
      description: "AI-powered compliance checks and automated documentation promote regulatory requirements are met consistently."
    },
    {
      icon: Users,
      title: "Scale Your Practice",
      description: "Handle more clients without proportionally increasing staff, maintaining high service quality through automation."
    },
    {
      icon: BrainCircuit,
      title: "Stay Organized",
      description: "Keep all of your data in one place, and let AI help you stay organized."
    },
    {
      icon: Sparkles,
      title: "Competitive Edge",
      description: "Stay ahead of the your competition with cutting-edge technology that differentiates your practice in a crowded market."
    }
  ];

  // SEO Keywords
  const seoKeywords = [
    'AI integration for 401k advisors',
    'automated data entry',
    'AI chat assistant',
    'professional rewriting tools',
    'email integration for retirement plans',
    'financial advisor AI',
    'regulatory compliance software',
    'AI for 401k plan management',
    'AI-driven compliance checks',
  ].join(', ');

  // Structured Data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'PlanSync AI Integration',
    description:
      'Harness the power of AI to streamline your workflow as a 401k advisor. Automate data entry, rewriting, email integration, and more.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    featureList: [
      'AI Chat Assistant',
      'Automated Data Entry',
      'AI Professional Rewriting',
      'Email Integration',
      'Time Savings',
      'Reduced Compliance Risk',
      'Scale Your Practice',
      'Stay Organized',
      'Competitive Edge'
    ]
  };

  return (
    <>
      {/* SEO Helmet */}
      <Helmet>
        <title>AI Integration for 401k Advisors | PlanSync</title>
        <meta
          name="description"
          content="Harness the power of AI to streamline your workflow and enhance productivity. Perfect for 401k advisors seeking to automate data entry, professional rewriting, email integration, and more."
        />
        <meta name="keywords" content={seoKeywords} />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="AI Integration for 401k Advisors | PlanSync" />
        <meta
          property="og:description"
          content="Intelligent document analysis, automated data entry, professional rewriting, and email integration—all powered by AI to boost your advisory practice."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com/ai-integration" />
        <meta property="og:image" content="https://your-domain.com/images/ai-integration-og.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Integration for 401k Advisors | PlanSync" />
        <meta
          name="twitter:description"
          content="Enhance your workflow with AI-powered tools for data entry, rewriting, and email integration—designed for 401k advisors."
        />
        <meta name="twitter:image" content="https://your-domain.com/images/ai-integration-og.jpg" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="PlanSync - AI-Powered 401(k) Plan Management Software" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://your-domain.com/ai-integration" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="relative min-h-screen overflow-hidden font-['Roboto',sans-serif] font-light">
        {/* Background animations */}
        <FloatingElement>
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </FloatingElement>

        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-24 relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16 sm:mb-32"
          >
            
            <h1 className="text-4xl sm:text-6xl font-extralight mb-4 sm:mb-8 relative z-10 text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text">
              AI
              <span className="relative mx-2 sm:mx-4">
                <span className="relative z-10 text-gray-900">
                  Integrations
                </span>
                {/* <div className="absolute inset-x-0 bottom-0 h-3 sm:h-4 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 -z-10 transform skew-x-12"></div> */}
              </span>
            </h1>
            <p className="text-base sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Harness the power of AI to streamline your workflow and enhance productivity
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-16 sm:mb-32 auto-rows-fr">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 sm:mb-32"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-center mb-3 sm:mb-4">
              Why AI Matters for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 ml-2">
                401k Advisors
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 sm:mb-16 px-4">
              Transform your practice with AI-powered tools designed specifically for retirement plan advisors
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white backdrop-blur-xl p-4 sm:p-8 rounded-xl sm:rounded-3xl shadow-sm border border-gray-100 h-full relative"
                >
                  <div className="absolute inset-0 bg-white rounded-xl sm:rounded-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 blur-lg opacity-50"></div>
                        <div className="relative w-full h-full rounded-lg sm:rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center">
                          <benefit.icon className="w-5 h-5 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-light text-gray-900">{benefit.title}</h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 sm:px-0"
          >
            <div className="inline-block p-1 rounded-full mb-8 sm:mb-16">
              <div className="bg-white px-6 sm:px-12 py-8 sm:py-16 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-6">Ready to Gain Your Competitive Advantage?</h2>
                <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                  Join forward-thinking advisors leveraging AI to transform their practice
                </p>
                <GradientButtonWithArrow 
                  buttonText="Get Started" 
                  link="/book-a-demo"
                  showArrow={true}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AIIntegration;