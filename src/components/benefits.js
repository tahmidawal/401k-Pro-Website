import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Shield, Infinity, ThumbsUp, Users, TrendingUp, CheckCircle } from 'lucide-react';

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

// Animated background element
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
      repeat: Number.POSITIVE_INFINITY,
      delay,
    }}
  />
);

const BenefitCard = ({ Icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="group relative h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
      <div className="relative h-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
        
        <div className="relative">
          <div className="w-14 h-14 mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
            <div className="relative flex items-center justify-center w-full h-full bg-white rounded-xl border border-white/50">
              <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
            </div>
          </div>
          
          <h3 className="text-xl font-light mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      Icon: CheckCircle,
      title: "Prove Your Value",
      description: "Prove your value as an advisor to your plan sponsors and auditors with clear, tangible deliverables that document every action taken in the plan management process. A plan sponsor will never again ask if all you do is show up for educational events."
    },
    {
      Icon: Shield,
      title: "Promote Compliance",
      description: "Includes built-in, easy-to-follow compliance checklists that can be marked as complete. This allows even inexperienced advisors to follow a clear template and communicate compliance requirements with all stakeholders, while automating due diligence reporting for plan sponsors."
    },
    {
      Icon: Infinity,
      title: "Keep Everything in One Place",
      description: "Centralizes all fiduciary plan data and documents into one location, making information easily accessible with just a few clicks and reducing time and complexity in managing scattered data."
    },
    {
      Icon: TrendingUp,
      title: "Make Me More Money",
      description: "401k Pro makes you money helping improve participant-to-IWAP (Individual Wealth Advisory Practice) conversions, saves time to onboard and manage more clients, generates professional marketing materials, and justifies higher fees with clear, tangible deliverables."
    },
    {
      Icon: Users,
      title: "Communicate With All Stakeholders",
      description: "Easily communicate with TPAs, recordkeepers, and plan sponsors. Share reports with all parties in the plan management process so that everyone is always on the same page."
    },
    {
      Icon: Clock,
      title: "Save Time",
      description: "Time is a valuable resource, and 401k Pro is designed to help you manage 401(k) plans efficiently. By streamlining plan management and minimizing the time spent on compliance reporting and administrative tasks, you can dedicate more energy to growing your business."
    }
  ];

  return (
    <div className="relative py-24 overflow-hidden" id="benefits">
      {/* Animated background elements */}
      {/* <AnimatedCircle delay={0} className="top-0 left-0 w-[800px] h-[800px] bg-blue-200/30" />
      <AnimatedCircle delay={2} className="bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/30" />
      <AnimatedCircle delay={4} className="top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-200/20" /> */}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-6xl font-extralight mb-6">
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                Benefits
              </span>
              {" "}
              of 401(k) Pro
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make 401(k) Plan Management Easy and Scalable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard 
                key={index} 
                {...benefit} 
                delay={index * 0.2} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;