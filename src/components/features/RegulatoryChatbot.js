import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ChatbotVideo from './RegulatoryChatbot.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmarkFlag } from '@fortawesome/free-solid-svg-icons';
import { Shield, Zap, Clock, MessageSquare, ListCheck, BookOpen } from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <Icon className="w-12 h-12 mb-4 text-blue-500" />
    <h3 className="text-xl font-light mb-2">{title}</h3>
    <p className="text-gray-600 text-sm font-light">{description}</p>
  </motion.div>
);

const RegulatoryChatbot = () => {
  const features = [
    {
      icon: Zap,
      title: "Answers in Seconds",
      description: "PlanSync's regulatory chatbot is designed to provide you with answers to your regulatory questions in seconds, saving you time and effort."
    },
    {
      icon: Shield,
      title: "401k Specialized",
      description: "PlanSync's regulatory chatbot is trained to answer your regulatory questions based upon the actual ERISA, FINRA, and DOL codes so that your answers are actually relevant to your plan management process."
    },
    {
      icon: MessageSquare,
      title: "The Power of 'I don't know'",
      description: "If our chatbot cannot find the answer to your question within the ERISA, FINRA, and DOL codes, it will tell you that it cannot find the answer and will advise you to consult with a legal professional."
    }
  ];

  const additionalBenefits = [
    {
      icon: ListCheck,
      title: "Double Check our Work",
      description: "Our chatbot provides you with the actual ERISA, FINRA, or DOL code that it used to answer your question so that you can double check if you are not sure about the answer."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access regulatory information and guidance whenever you need it, day or night."
    },
    {
      icon: BookOpen,
      title: "See the Source",
      description: "View the actual regulatory codes used by the chatbot to provide your answer, ensuring transparency and allowing you to verify the information firsthand."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen font-['Roboto',sans-serif] font-light">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 leading-tight">
            <span className="text-gray-700">Regulatory</span>{" "}
            <span className="text-transparent bg-clip-textinset-0 bg-gradient-to-bl">Chatbot</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Got a regulatory question? We're here to help.
          </p>
        </motion.div>

        <FadeInSection>
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-light mb-6 text-center">How It Works</h2>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 mb-8" style={{ maxHeight: 'calc(80vh - 200px)' }}>
                <video
                  src={ChatbotVideo}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  autoPlay
                />
              </div>
            </div>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Our regulatory chatbot uses advanced AI to provide accurate and up-to-date information on your regulatory questions. Simply ask your question, and receive instant answers. We're still in testing but our regulatory chatbot is available to beta testers.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </FadeInSection>

        <FadeInSection>
          <h2 className="text-3xl font-light mb-12 text-center">Additional Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {additionalBenefits.map((benefit, index) => (
              <FeatureCard key={index} {...benefit} />
            ))}
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto border border-gray-300 mt-12">
            <h2 className="text-3xl font-light mb-4">Disclaimer</h2>
            <p className="text-gray-700 font-light">
              PlanSync's regulatory chatbot can make mistakes. This chatbot is not a substitute for professional legal advice. Always consult with a qualified legal professional for specific guidance.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="text-center mt-16">
            <h2 className="text-3xl font-light mb-6">Ready to simplify your regulatory compliance?</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Start using our AI-powered regulatory chatbot today and experience a new level of efficiency in managing your compliance needs.
            </p>
            <GradientButtonWithArrow 
              buttonText="Get Started" 
              link="/contact-plansync"
              showArrow={false}
            />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default RegulatoryChatbot;
