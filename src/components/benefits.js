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
      <div className="hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
        <div className="relative h-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-lg overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center w-full h-full bg-white rounded-xl border border-white/50">
                  <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-xl font-light bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                {title}
              </h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* New Mobile Card */}
      <div className="md:hidden bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900 text-lg font-normal">{title}</h3>
          <div className="text-[#0066FF]">
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
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