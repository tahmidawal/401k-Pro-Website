import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FileText, Clock, ClipboardCheck, Users, Shield, UserPlus, Download, FileDigit, Sparkles } from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';

// Add these new animation variants near the top of the file
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

// Update the hero section animation
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

// Modern feature card with 3D hover effect
const FeatureCard = ({ icon: Icon, title, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      whileHover={{ translateY: -8 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-3xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-lg overflow-hidden h-full flex flex-col">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-14 h-14 mb-6 relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative flex items-center justify-center w-full h-full bg-white rounded-xl border border-white/50">
              <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
            </div>
          </div>
          <h3 className="text-xl font-light mb-3 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent flex-shrink-0">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Modern step card with number indicator
const StepCard = ({ number, text }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-2xl blur-lg"></div>
    <div className="relative flex items-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
      <div className="flex-shrink-0 mr-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-full blur-lg"></div>
          <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-white font-light">
            {number}
          </div>
        </div>
      </div>
      <p className="text-gray-700 font-light">{text}</p>
    </div>
  </motion.div>
);

// Modern download button
const DownloadButton = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center space-x-2 px-6 py-3 rounded-xl overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 group-hover:from-blue-600/20 group-hover:to-cyan-400/20 transition-all duration-300"></div>
    <Download size={20} className="text-blue-600 transition-transform duration-300 group-hover:-translate-y-1" />
    <span className="relative font-light text-gray-700">{name}</span>
  </a>
);

const AutomatedReporting = () => {
  const features = [
    {
      title: "Quarterly + Annual Reports",
      description: "401k Pro generates both quarterly and annual reports for your clients, so you can keep them informed and compliant with ease.",
      icon: ClipboardCheck
    },
    {
      title: "One and Done",
      description: "With 401k Pro, simply click one button and all of your compliance reporting is generated and ready to go. Reporting takes under 30 seconds.",
      icon: Clock
    },
    {
      title: "5 Pages Max",
      description: "Our reports are designed to be concise and to the point, so you can quickly and easily communicate the most important information to your clients. After all, who has time to read 80 page reports from their advisors anyway? Let's just get to the point.",
      icon: FileText
    },
    {
      title: "Hyper-Personalized",
      description: "All of the information in your reports is simply documentation of emails and conversations you've already had with your clients, so it is always unique and personalized to them. Your practice will be scalable while never making your clients feel like they are just a number.",
      icon: Users
    },
    {
      title: "Due dilligence? No Problem",
      description: "Record-keeping is effortless with 401k Pro. Our reports are designed to demonstrate your diligence in meeting fiduciary responsibilities, making it easy to showcase your efforts.",
      icon: Shield
    },
    {
      title: "Support Your Plan Sponsors",
      description: "Under ERISA, plan sponsors are required to maintain documentation of their plan management process. However, realistically, they're often too busy running their businesses to keep up with this requirement. With 401k Pro, you can provide your plan sponsors with the necessary documentation to stay compliant.",
      icon: UserPlus
    }
  ];

  const exampleReports = [
    { name: "Quarterly Report Example", url: "https://drive.google.com/file/d/1-4d6iQnDrF3L-uG-AwhNSFm2rOdPtkOX/view?usp=sharing" },
    { name: "Annual Report Example", url: "https://drive.google.com/file/d/1VyzpZ-q7BrNKzbtbhdtKQ8WXR-Paxc5a/view?usp=sharing" },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-['Roboto',sans-serif] font-light">
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
        {/* Hero Section with staggered animation */}
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.h1 
            variants={textVariants}
            className="text-7xl font-extralight mb-6"
          >
            <motion.span
              variants={textVariants}
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"
            >
              Automated Reporting
            </motion.span>
            {/* <br />
            <motion.span
              variants={textVariants}
              className="text-gray-800"
            >
              Reporting
            </motion.span> */}
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Generate comprehensive, personalized compliance reports with a single click
          </motion.p>
        </motion.div>

        {/* Features Grid with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works Section with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.h2 
            variants={textVariants}
            className="text-4xl font-extralight text-center mb-12"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
              How It Works
            </span>
          </motion.h2>
          <div className="space-y-4">
            {[
              "Track your plan touchpoints and requirements over the course of the year",
              "Select the type of report you'd like to generate",
              "Click one button and generate your report",
              "Download and make any necessary edits",
              "Send to your clients",
              "That's it!"
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <StepCard number={index + 1} text={step} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Example Reports Section with fade-in animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-3xl blur-xl"></div>
          <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl border border-white/20 shadow-lg">
            <motion.h2 
              variants={textVariants}
              className="text-3xl font-light text-center mb-8"
            >
              Example Reports
            </motion.h2>
            <motion.div 
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-6"
            >
              {exampleReports.map((report, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <DownloadButton {...report} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section with fade-up animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h2 
            variants={textVariants}
            className="text-4xl font-extralight mb-6"
          >
            Ready to streamline your reporting?
          </motion.h2>
          <motion.p
            variants={textVariants}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
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
  );
};

export default AutomatedReporting;