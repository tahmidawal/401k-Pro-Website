import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Infinity, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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


const BenefitCard = ({ Icon, title, description }) => {
  const ref = useRef(null);

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
      description: "Demonstrate your value as an advisor with PlanSync. Show plan sponsors and auditors the tangible results of your work, such as detailed reports documenting all actions in plan management. Eliminate doubts about your role and contributions.",
    },
    {
      Icon: Shield,
      title: "Promote Compliance",
      description: "Ensure ERISA and fiduciary compliance with built-in checklists that guide advisors through complex regulations. Automate due diligence and simplify compliance reporting, making it easier to communicate with stakeholders.",
    },
    {
      Icon: Infinity,
      title: "Centralized Data Management",
      description: "Access all fiduciary plan data and documents in one place. Say goodbye to scattered information and manage plan details with just a few clicks, saving time and reducing complexity.",
    },
    {
      Icon: TrendingUp,
      title: "Increase Revenue Opportunities",
      description: "Expand your advisory practice by identifying participants who are ready for Individual Wealth Advisory Practice (IWAP) conversions. Streamline client onboarding and justify higher fees with clear, professional deliverables.",
    },
    {
      Icon: Users,
      title: "Enhance Stakeholder Communication",
      description: "Facilitate transparent communication with TPAs, record keepers, and plan sponsors. Share detailed reports and ensure everyone is aligned throughout the plan management process.",
    },
    {
      Icon: Clock,
      title: "Save Time",
      description: "Automate reporting, compliance, and administrative tasks with PlanSync. Free up valuable time to focus on growing your business and serving clients better.",
    }
  ];

  return (
    <>
      <Helmet>
        <title>PlanSync - Benefits of Our 401(k) Management Software</title>
        <meta
          name="description"
          content="Learn how PlanSync simplifies plan management, improves compliance, and helps advisors grow their business. See the benefits of centralized tools and automated reporting."
        />
        <meta
          name="keywords"
          content="401k benefits, fiduciary compliance, plan management software, automated reporting, stakeholder communication, centralized data management"
        />
        <meta property="og:title" content="PlanSync - Benefits of Our 401(k) Management Software" />
        <meta
          property="og:description"
          content="Learn how PlanSync simplifies plan management, improves compliance, and helps advisors grow their business. See the benefits of centralized tools and automated reporting."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com/benefits" />
      </Helmet>
      <div className="relative py-24 overflow-hidden" id="benefits">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-6xl font-extralight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                  Benefits
                </span>{" "}
                of PlanSync
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover how PlanSync transforms plan management for advisors, making it efficient, scalable, and compliant.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Benefits;