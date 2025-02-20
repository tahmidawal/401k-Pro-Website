import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, Users, TrendingUp, CheckCircle, Database } from 'lucide-react';
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


// Updated mobile-friendly benefit card
const BenefitCard = ({ Icon, title, description }) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="group relative h-full"
    >
      {/* Desktop Card - Hidden on Mobile */}
      <div className="hidden md:block h-full">
        {/* Enhanced gradient background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500"></div>
        <div className="relative h-full bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.06)] transition-shadow duration-300 overflow-hidden flex flex-col">
          {/* Refined accent gradient */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 opacity-60"></div>
          
          <div className="relative flex flex-col h-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 relative flex-shrink-0">
                {/* Enhanced icon container */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl blur-md transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center w-full h-full bg-white rounded-xl border border-gray-100 shadow-sm">
                  <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-xl font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {title}
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-[15px]">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Card */}
      <div className="md:hidden bg-white p-6 rounded-[24px] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-800 text-lg font-medium">{title}</h3>
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50/50 rounded-xl">
            <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
          </div>
        </div>
        <p className="text-gray-600 text-[15px] leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      Icon: Clock,
      title: "Save Time",
      description:
        "Automate compliance, reporting, and documentation. Free up time to focus on client relationships and business growth.",
    },
    {
      Icon: CheckCircle,
      title: "Prove Your Value",
      description:
        "Deliver clear, detailed reports that showcase your work. Help plan sponsors and auditors see the impact of your services.",
    },
    {
      Icon: Shield,
      title: "Promote Compliance",
      description:
        "Simplify ERISA and fiduciary compliance with automated checklists and built-in documentation tools.",
    },
    {
      Icon: Database,
      title: "Centralize Plan Data",
      description:
        "Store and access all plan documents, touchpoints, and compliance records in one structured platform.",
    },
    {
      Icon: TrendingUp,
      title: "Grow Your Revenue",
      description:
        "Identify wealth management opportunities among plan participants and streamline client onboarding.",
    },
    {
      Icon: Users,
      title: "Enhance Stakeholder Communication",
      description:
        "Improve collaboration with TPAs, record keepers, and plan sponsors through shared reports and automated updates.",
    },
  ];

  return (
    <>
      <Helmet>
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
      <div className="relative py-12 md:py-24 overflow-hidden" id="benefits">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Updated mobile header */}
            <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl md:text-6xl font-extralight mb-4 md:mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400">
                  Benefits
                </span>
                <span className="ml-2">of PlanSync</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Discover how PlanSync transforms plan management for advisors, making it efficient, scalable, and compliant.
              </p>
            </motion.div>

            {/* Updated grid with mobile-first spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
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