import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check, Briefcase, Users, Code, Brain, Sparkles } from 'lucide-react'; // Added ChartBar import
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';

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


const jobListings = [
  {
    title: "Sales Associate",
    icon: Briefcase,
    salary: "$70,000 - $100,000",
    features: [
      "Learn about effective implementation of AI in business",
      "Deliver unparalleled customer experiences",
      "Collaborate with innovative team",
      "Opportunity for rapid growth",
    ],
    isPopular: true
  },
  {
    title: "Full Stack Developer",
    icon: Code,
    salary: "$90,000 - $120,000",
    features: [
      "Create intuitive robot interfaces",
      "Shape human-robot interactions",
      "Work with latest technologies",
      "Flexible work environment",
      "Professional development opportunities"
    ],
    isPopular: true
  },
  {
    title: "AI Engineer",
    icon: Brain,
    salary: "$150,000 - $200,000",
    features: [
      "Build and optimize large language models",
      "Work on real-world projects",
      "Learn from industry experts",
    ],
    isPopular: true
  },
  {
    title: "Product Manager",
    icon: Sparkles,
    salary: "$100,000 - $130,000",
    features: [
      "Lead product development from concept to launch",
      "Work closely with engineering and design teams",
      "Define product vision and strategy",
      "Drive user engagement and satisfaction"
    ],
    isPopular: true
  },
  {
    title: "UX/UI Designer",
    icon: Users,
    salary: "$75,000 - $105,000",
    features: [
      "Design user-friendly interfaces and experiences",
      "Conduct user research and testing",
      "Collaborate with developers to implement designs",
      "Stay updated with design trends and best practices"
    ],
    isPopular: true
  },
  {
    title: "Machine Learning Intern",
    icon: Brain,
    salary: "Competitive",
    features: [
      "Train and optimize AI models",
      "Work on real-world projects",
      "Learn from industry experts",
      "Potential for full-time offer",
      "Networking opportunities"
    ],
    isPopular: true
  }
];

const JobCard = ({ title, icon: Icon, salary, features, isPopular }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
      <div className="relative h-full backdrop-blur-xl bg-white/80 p-8 rounded-2xl border border-white/20 shadow-lg overflow-hidden flex flex-col">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
        
        {/* Icon and Title Container */}
        <div className="flex items-center gap-4 mb-4">
          {/* Icon */}
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-xl blur-lg"></div>
            <div className="relative flex items-center justify-center h-full bg-white rounded-xl border border-white/50">
              <Icon className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-light bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent">{title}</h2>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <p className="text-gray-600 mb-4">{salary}</p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-base font-normal text-gray-700">
                <Check className="text-blue-600 mr-2 flex-shrink-0 mt-1" size={16} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Button */}
        <div className="mt-6">
          <GradientButtonWithArrow
            buttonText="Apply Now"
            onClick={() => window.location.href = '/apply'}
            showArrow={true}
          />
        </div>
      </div>
    </motion.div>
  );
};

const CareersPage = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="relative min-h-screen  overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        
      </motion.div>

      <main className="relative max-w-7xl mx-auto px-4 pb-24">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360, 360]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block mb-8"
          >
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-full blur-xl"></div>
              <div className="relative flex items-center justify-center h-full">
                <Users size={48} className="text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text" />
              </div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl font-extralight mb-6"
          >
            Join Our
            <span className="relative mx-4">
              <span className="relative z-10 text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text">
                Team
              </span>
              <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 -z-10 transform skew-x-12"></div>
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Help us bring AI to advisors everywhere
          </motion.p>
        </motion.div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <JobCard {...job} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <div className="inline-block p-1 rounded-full">
            <div className="bg-white px-12 py-16 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <h2 className="text-4xl font-light mb-6">Don't See Your Role?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're always looking for talented individuals to join our team
              </p>
              <GradientButtonWithArrow 
                buttonText="Contact Us" 
                link="/contact"
                showArrow={true}
              />
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default CareersPage;