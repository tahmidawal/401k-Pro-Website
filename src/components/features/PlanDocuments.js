import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FileText, Search, Bot, Upload, Share, Shield, ArrowRight, Sparkles } from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

// Animated background circles
const AnimatedCircle = ({ delay = 0, className }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
      opacity: [0.5, 0.2, 0.5],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay,
    }}
  />
);

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

const FeatureSection = ({ title, description, icon: Icon, isReversed }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 relative`}
    >
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-3xl blur-2xl transform rotate-3"></div>
        <div className="bg-gradient-to-r from-blue-600 to-cyan-400 p-[2px] rounded-3xl backdrop-blur-xl">
          <div className="bg-white/80 p-8 rounded-3xl h-full backdrop-blur-xl relative overflow-hidden">
            <FloatingElement delay={0.5}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
            </FloatingElement>
            <div className="w-16 h-16 mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 blur-lg opacity-50"></div>
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center">
                <Icon size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-light mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="relative">
          <FloatingElement>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 blur-2xl opacity-10 transform -rotate-3"></div>
          </FloatingElement>
          <div className="bg-gray-50 rounded-3xl p-8 backdrop-blur-xl border border-gray-100">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 mix-blend-overlay"></div>
              <Sparkles className="text-gray-400 w-8 h-8" />
              <span className="text-gray-400 ml-2">Feature Visual</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const UseCaseCard = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    className="group relative"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
    <div className=" rounded-2xl relative">
      <div className="bg-white/80 p-6 rounded-2xl h-full backdrop-blur-xl">
        <FloatingElement>
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-xl transform translate-x-8 -translate-y-8"></div>
        </FloatingElement>
        <h4 className="text-xl font-light mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

const StepIndicator = ({ number }) => (
  <div className="relative">
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xl">
      {number}
    </div>
    <div className="absolute -z-10 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 opacity-20 -top-1 -left-1"></div>
  </div>
);

const PlanDocuments = () => {
  const features = [
    {
      title: "AI-Powered Document Assistant",
      description: "Ask questions about your documents in real-time and receive instant, contextual responses that reference relevant DOL and ERISA regulations. No more manual searching through lengthy documents.",
      icon: Bot
    },
    {
      title: "Centralized Document Management",
      description: "Access adoption agreements, SPDs, Form 5500s, and compliance checklists instantly in one secure location. Our advanced search and filtering tools make document retrieval effortless.",
      icon: FileText
    },
    {
      title: "Seamless Integration & Sharing",
      description: "Upload files in multiple formats and share them securely with stakeholders. Our built-in email features maintain data protection while enabling efficient collaboration.",
      icon: Share
    }
  ];

  const useCases = [
    {
      title: "Compliance Reviews",
      description: "Upload critical documents and use AI to quickly confirm compliance requirements without reading full documents."
    },
    {
      title: "Audit Preparation",
      description: "Organize SPDs, plan amendments, and service agreements in one location for seamless audit workflows."
    },
    {
      title: "Document Sharing",
      description: "Email plan amendments, benefit statements, or compliance updates directly to clients without leaving the app."
    },
    {
      title: "Participant Inquiries",
      description: "Quickly reference plan details and leverage AI to clarify specific clauses during participant meetings."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <AnimatedCircle delay={0} className="top-0 left-0 w-[500px] h-[500px] bg-blue-200/30" />
        <AnimatedCircle delay={2} className="bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/30" />
        <AnimatedCircle delay={4} className="top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-200/20" />
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
            className="text-7xl font-extralight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              Plan Documents
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Transform your document management with AI-powered insights and seamless organization
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <FeatureSection
              key={index}
              {...feature}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-light text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Upload & Organize",
                description: "Upload your documents and categorize them with custom metadata for easy access"
              },
              {
                step: 2,
                title: "Ask Questions",
                description: "Use our AI chatbot to get instant insights from your documents"
              },
              {
                step: 3,
                title: "Share & Collaborate",
                description: "Securely share documents and insights with your team and stakeholders"
              }
            ].map(({ step, title, description }) => (
              <div key={step} className="text-center">
                <div className="flex justify-center mb-6">
                  <StepIndicator number={step} />
                </div>
                <h3 className="text-xl font-light mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-light text-center mb-12">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-24"
        >
          <h2 className="text-3xl font-light mb-6">Ready to Transform Your Document Management?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join forward-thinking advisors who are leveraging AI to streamline their document workflows
          </p>
          <GradientButtonWithArrow 
            buttonText="Get Started" 
            link="/book-a-demo"
            showArrow={false}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PlanDocuments;