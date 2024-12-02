import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Shield, Infinity, ThumbsUp, Users, TrendingUp } from 'lucide-react';

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
      Icon: Clock,
      title: "Save Time",
      description: "Manage 401(k) plans in half the time. Compliance reporting takes seconds, allowing you to grow your business faster."
    },
    {
      Icon: Shield,
      title: "Promote Compliance",
      description: "Integrated calendar and tracking system simplifies compliance promotion in your clients' plans."
    },
    {
      Icon: Infinity,
      title: "All In One Place",
      description: "Centralize client information, reports, and compliance data. No more switching between resources."
    },
    {
      Icon: ThumbsUp,
      title: "Easy to Use",
      description: "Built-in fiduciary best practices empower advisors of all experience levels in retirement plan management."
    },
    {
      Icon: Users,
      title: "All Stakeholders",
      description: "Easily communicate with TPAs, recordkeepers, and plan sponsors. Share reports and data securely."
    },
    {
      Icon: TrendingUp,
      title: "Scalable",
      description: "Grow your business effortlessly. Add new clients, plans, and users with ease, regardless of team size."
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50/30 py-24 overflow-hidden" id="benefits">
      {/* Animated background elements */}
      <AnimatedCircle delay={0} className="top-0 left-0 w-[800px] h-[800px] bg-blue-200/30" />
      <AnimatedCircle delay={2} className="bottom-0 right-0 w-[600px] h-[600px] bg-cyan-200/30" />
      <AnimatedCircle delay={4} className="top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-200/20" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extralight mb-6 leading-tight">
              Benefits of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3]">
                401(k) Pro
              </span>
            </h2>
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