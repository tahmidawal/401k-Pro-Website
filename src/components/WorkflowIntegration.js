import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileUp, MousePointer, Layers } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
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

const WorkflowIntegration = () => {
  const features = [
    {
      icon: Mail,
      title: "Forward Emails, Auto-Log Touchpoints",
      description: "Simply forward emails to your PlanSync email address, and our system automatically categorizes and stores the touchpoint for compliance and reporting."
    },
    {
      icon: FileUp,
      title: "Upload PDFs, Extract Data Instantly",
      description: "Upload plan documents and let our AI-powered data extraction automatically pull key details for you—no more manual copy-pasting."
    },
    {
      icon: MousePointer,
      title: "Click Once, Get Fully Formatted Reports",
      description: "Generate professional, audit-ready reports in under 30 seconds with a single click—no manual data entry required."
    },
    {
      icon: Layers,
      title: "Keep Your Current Tools",
      description: "PlanSync enhances your existing systems rather than replacing them, handling tedious tasks while you focus on advising."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Design */}
        <div className="block md:hidden">
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl font-extralight mb-4">
              Seamless Integration With
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400"> Your Workflow</span>
            </h2>
            <p className="text-base text-gray-600 px-4">
              No Need to Change Your Process—PlanSync Works With It
            </p>
          </motion.div>
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Desktop Design */}
        <div className="hidden md:block">
          <motion.div className="text-center mb-16">
            <h2 className="text-5xl font-extralight mb-6">
              Seamless Integration With
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-400"> Your Workflow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No Need to Change Your Process—PlanSync Works With It
            </p>
          </motion.div>

          <motion.div className="mb-16">
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              We know that advisors don't have time to rebuild their entire workflow just to adopt new software. 
              That's why PlanSync integrates directly into how you already work—no disruptions, no complicated onboarding.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowIntegration; 