import React from 'react';
import { motion } from 'framer-motion';
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
      
      <div className="relative backdrop-blur-xl bg-white/80 p-8 rounded-2xl border border-white/20 shadow-lg overflow-hidden flex flex-col h-full">
        <div className="flex flex-col h-full">
          <div className="text-sm font-medium py-1 px-3 rounded-full inline-block mb-4 bg-blue-50 text-blue-600 relative z-10 w-fit">
            {badge}
          </div>
          <h3 className="text-2xl font-light mb-4 relative z-10 text-gray-800">
            {title === "Advisors + 401k Pro" ? (
              <>
                Advisors + <span className="bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent">401k Pro</span>
              </>
            ) : (
              title
            )}
          </h3>
          <p className="text-gray-600 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FragmentedEcosystemCombined = () => {

  return (
    <>
      <Helmet>
        <title>401k Pro - Complete Ecosystem for 401(k) Plan Management</title>
        <meta
          name="description"
          content="401k Pro integrates fiduciary management, compliance, and investment monitoring tools to streamline the 401(k) ecosystem for advisors."
        />
        <meta
          name="keywords"
          content="401k ecosystem, fiduciary tools, plan management, ERISA compliance, investment monitoring, record keepers"
        />
        <meta property="og:title" content="401k Pro - Complete Ecosystem for 401(k) Plan Management" />
        <meta
          property="og:description"
          content="Discover how 401k Pro connects fiduciary management, compliance, and investment tools to simplify 401(k) administration for advisors."
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
              title="Advisors + 401k Pro"
              description="401k Pro empowers advisors to efficiently manage fiduciary duties, automate compliance, and centralize data for streamlined plan management."
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
      </div>
    </>
  );
};

export default FragmentedEcosystemCombined;