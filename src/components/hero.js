import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Users, ShieldCheck, FileText } from 'lucide-react';
import logo from '../img/PlanSyncAI-No-Bg.png';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

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


// Modern feature card with glass morphism
const FeatureCard = ({ icon: Icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-xl blur-lg transform group-hover:scale-110 transition-transform duration-300"></div>
    <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg flex items-center gap-3">
      <div className="relative w-10 h-10 flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-lg blur-lg"></div>
        <div className="relative flex items-center justify-center w-full h-full bg-white rounded-lg border border-white/50">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
      </div>
      <p className="text-gray-700 font-light">{text}</p>
    </div>
  </motion.div>
);

const HeroSection = () => {
  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();

  const features = [
    { icon: BarChart2, text: "Data Consolidation" },
    { icon: Users, text: "Client Management" },
    { icon: ShieldCheck, text: "Compliance Tools" },
    { icon: FileText, text: "Automated Reporting" },
  ];

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (email) {
      // Navigate to book-a-demo with email as query parameter
      navigate(`/contact-plansync?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Simplify your 401k plan administration with automated reporting, AI-powered insights, and comprehensive plan management tools. Start optimizing your retirement plans today." />
        <meta name="keywords" content="401k administration, retirement plans, plan management, automated reporting, AI insights" />
        <meta property="og:title" content="PlanSync - Streamline Your 401k Plan Administration" />
        <meta property="og:description" content="Simplify your 401k plan administration with automated reporting, AI-powered insights, and comprehensive plan management tools." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com" />
      </Helmet>
      <div className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8 flex items-center lg:-mt-5 mt-4 sm:mt-6" id="hero">
        <div className="max-w-7xl mx-auto relative">
          {/* Desktop View */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Text Content */}
            <motion.div 
              variants={itemVariants}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-5xl sm:text-7xl lg:text-7xl font-extralight mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                  Scale
                </span>
                
                <span className="ml-3">
                  Your
                </span>

                <br />
                Advisory Practice
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                PlanSync is an AI powered 401(k) plan management and reporting tool that helps advisors manage their plans more efficiently.
              </motion.p>
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToBenefits}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-sky-400 text-white font-light py-3 px-6 rounded-full inline-flex items-center gap-2">
                  <span>How We Can Help</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div 
              variants={itemVariants}
              className="w-full lg:w-1/2 hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-3xl blur-2xl"></div>
                
                  <img src={logo} alt="PlanSync Logo-Photoroom" className="w-full h-auto" />
              </div>
            </motion.div>
          </motion.div>

          {/* New Mobile View */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:hidden flex flex-col items-center text-center pt-4 sm:pt-6"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-3xl font-extralight mb-4 leading-tight mt-3 sm:mt-4"
            >
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-gray-900">
                401k plan management tools for advisors
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-base mb-6 max-w-sm"
            >
              PlanSync AI is built by AI experts and backed by retirement planning experts to help you manage your plans more efficiently.
            </motion.p>

            {/* Email Input Form */}
            <motion.form 
              variants={itemVariants}
              className="w-full max-w-md space-y-4 mb-8"
              onSubmit={handleGetStarted}
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 outline-none transition-all duration-200"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-sky-400 text-white font-light py-3 px-6 rounded-full hover:opacity-90 transition-opacity duration-200"
              >
                Get started
              </button>
            </motion.form>

            {/* Feature Cards Grid */}
            <motion.div 
              variants={itemVariants}
              className="w-full max-w-md grid grid-cols-1 gap-3 mt-8"
            >
              <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm flex items-center justify-between">
                <p className="text-gray-700 text-base font-normal">Data Consolidation</p>
                <div className="text-[#0066FF]">
                  <BarChart2 className="w-7 h-7" />
                </div>
              </div>
              <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm flex items-center justify-between">
                <p className="text-gray-700 text-base font-normal">Client Management</p>
                <div className="text-[#0066FF]">
                  <Users className="w-7 h-7" />
                </div>
              </div>
              <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm flex items-center justify-between">
                <p className="text-gray-700 text-base font-normal">Compliance Tools</p>
                <div className="text-[#0066FF]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
              </div>
              <div className="bg-white p-5 rounded-[24px] border border-gray-100 shadow-sm flex items-center justify-between">
                <p className="text-gray-700 text-base font-normal">Automated Reporting</p>
                <div className="text-[#0066FF]">
                  <FileText className="w-7 h-7" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;