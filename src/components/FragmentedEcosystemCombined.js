import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, FileUp, MousePointer, Layers } from 'lucide-react';

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


const EcosystemCard = ({ badge, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ translateY: -10 }}
      className="relative group h-full"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500 border border-gray-300"></div>
      
      <div className={`relative backdrop-blur-xl bg-white/80 p-8 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full ${
        title === "Advisors + PlanSync" 
          ? "border-2 border-gradient-to-r from-cyan-400 to-blue-600 p-[2px]"
          : "border border-white/20 border-r border-gray-200"
      }`}>
        {/* Add inner white container for Advisors + PlanSync to maintain same background */}
        <div className={`${
          title === "Advisors + PlanSync" 
            ? "bg-white/80 rounded-xl p-8 h-full"
            : ""
        }`}>
          <div className="flex flex-col h-full">
            <div className="text-sm font-medium py-1 px-3 rounded-full inline-block mb-4 bg-blue-50 text-blue-600 relative z-10 w-fit">
              {badge}
            </div>
            <h3 className="text-2xl font-light mb-4 relative z-10 text-gray-800">
              {title === "Advisors + PlanSync" ? (
                <>
                  Advisors + <span className="bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent">PlanSync</span>
                </>
              ) : (
                title
              )}
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              {description.includes("<span") ? (
                <>
                  PlanSync is designed to enhance, <span className="text-blue-600">never replace</span>, the role of advisor by equipping them with the tools they need to manage fiduciary responsibilities more efficiently.
                </>
              ) : (
                description
              )}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Add new WorkflowFeatureCard component
const WorkflowFeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
    <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-xl">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-light text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-400/5 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform duration-500"></div>
    <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg h-auto">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-xl">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-light text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const FragmentedEcosystemCombined = () => {

  // Add workflow features data
  const workflowFeatures = [
     {
      icon: Layers,
      title: "Keep Your Current Tools, Work Smarter",
      description: "401k Pro integrates with the systems you already use—no need to change your workflow. We handle the tedious, time-consuming tasks so you can focus on what matters most: advising your clients."
    },
    {
      icon: MousePointer,
      title: "Advisors Stay at the Center",
      description: "401k Pro enhances your workflow while never replacing your expertise. You drive the decision-making, client relationships, and plan management. We help with the boring stuff."
    },
    {
      icon: Mail,
      title: "Forward Emails, Auto-Log Touchpoints",
      description: "Simply forward emails to your 401k Pro email address, and our system automatically categorizes and stores data for compliance and reporting."
    },
    {
      icon: FileUp,
      title: "Upload PDFs, Extract Data Instantly",
      description: "Upload plan documents and let our AI-powered data extraction automatically pull key details for you—no more manual copy-pasting."
    },  
  ];

  return (
    <>
      <Helmet>
        <title>PlanSync - Complete Ecosystem for 401(k) Plan Management</title>
        <meta
          name="description"
          content="PlanSync integrates fiduciary management, compliance, and investment monitoring tools to streamline the 401(k) ecosystem for advisors."
        />
        <meta
          name="keywords"
          content="401k ecosystem, fiduciary tools, plan management, ERISA compliance, investment monitoring, record keepers"
        />
        <meta property="og:title" content="PlanSync - Complete Ecosystem for 401(k) Plan Management" />
        <meta
          property="og:description"
          content="Discover how PlanSync connects fiduciary management, compliance, and investment tools to simplify 401(k) administration for advisors."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com/ecosystem" />
      </Helmet>

      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative mb-20">
          {/* Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 360]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block mb-8"
            ></motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl font-extralight mb-6"
            >
              Your Complete
              <span> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                Ecosystem
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Streamline your fiduciary responsibilities and plan management with an interconnected 401(k) ecosystem.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EcosystemCard
              badge="Fiduciary Responsibilities"
              title="Advisors + PlanSync"
              description="PlanSync is designed to enhance, <span className='text-blue-600'>never replace</span>, the role of advisor by equipping them with the tools they need to manage fiduciary responsibilities more efficiently."
              delay={0}
            />

            <EcosystemCard
              badge="Plan Hosting"
              title="Record Keepers"
              description="Leverage platforms from record keepers to manage participant data, contributions, and distributions while ensuring data accuracy."
              delay={0.2}
            />

            <EcosystemCard
              badge="ERISA Compliance"
              title="TPAs and ERISA Attorneys"
              description="TPAs and ERISA Attorneys handle plan accounting and ensure your plans remain ERISA-compliant with robust regulatory guidance."
              delay={0.4}
            />

            <EcosystemCard
              badge="Investment Monitoring"
              title="Monitoring Tools"
              description="Tools like fi360 and Morningstar simplify investment monitoring, enabling better plan performance and compliance reporting."
              delay={0.6}
            />
          </div>
        </div>

        {/* Add WorkflowIntegration section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-24 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-extralight mb-6">
                Seamless Integration With
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"> Your Workflow</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                No Need to Change Your Process—401k Pro Works With It
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <p className="text-gray-600 text-center max-w-3xl mx-auto">
                We know that advisors don't have time to rebuild their entire workflow just to adopt new software. 
                That's why 401k Pro integrates directly into how you already work—no disruptions, no complicated onboarding.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {workflowFeatures.map((feature, index) => (
                <FeatureCard 
                  key={index} 
                  {...feature}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FragmentedEcosystemCombined;