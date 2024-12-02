import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

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

// Floating animation for background elements
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [-1, 1, -1],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
  >
    {children}
  </motion.div>
);

// Modern input field with animation
const InputField = ({ icon: Icon, ...props }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative flex items-center">
      <Icon className="absolute left-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" size={20} />
      <input
        {...props}
        className="w-full bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all duration-300 text-gray-700 placeholder-gray-400"
      />
    </div>
  </div>
);

// Add a similar component for the textarea
const TextAreaField = ({ icon: Icon, ...props }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative">
      <Icon className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" size={20} />
      <textarea
        {...props}
        className="w-full bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl py-3 px-12 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all duration-300 min-h-[120px] text-gray-700 placeholder-gray-400"
      />
    </div>
  </div>
);

const ContactCard = ({ title, subtitle, buttonText, linkText }) => {
  const [state, handleSubmit] = useForm("xanwkqdj");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Form submission attempted");
    handleSubmit(event)
      .then(() => console.log("Form submitted successfully"))
      .catch((error) => console.error("Form submission error:", error));
  };

  // Success state component
  if (state.succeeded) {
    return (
      <div className="relative min-h-[600px] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 opacity-90"></div>
        <FloatingElement delay={0}>
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl"></div>
        </FloatingElement>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white/95 backdrop-blur-xl p-12 rounded-3xl shadow-2xl max-w-md w-full"
        >
          <div className="text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 360]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block mb-8"
            >
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-full blur-xl"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Sparkles size={40} className="text-blue-600" />
                </div>
              </div>
            </motion.div>
            <h2 className="text-4xl font-light mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-2">Your message has been sent successfully.</p>
            <p className="text-sm text-gray-500">We will contact you within 24 hours.</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[600px] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 opacity-90"></div>
      <FloatingElement delay={0}>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl"></div>
      </FloatingElement>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative bg-white/95 backdrop-blur-xl p-12 rounded-3xl shadow-2xl max-w-md w-full"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-light mb-4 text-gray-800">{title}</h2>
          <p className="text-gray-600 mb-8">{subtitle}</p>
        </motion.div>

        <form onSubmit={onSubmit} className="space-y-6">
          <motion.div variants={itemVariants}>
            <InputField
              icon={Mail}
              id="email"
              type="email"
              name="email"
              placeholder="Work email"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <TextAreaField
              icon={MessageSquare}
              id="message"
              name="message"
              placeholder="Write a message..."
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <button
              type="submit"
              disabled={state.submitting}
              className="relative group w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-light py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow duration-300">
                <span>{buttonText}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </motion.div>
        </form>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <p className="text-gray-600 text-sm">Already have an account?</p>
          <p className="text-sm mt-1">
            {linkText}{' '}
            <a 
              href="https://app.401k-pro.ai/" 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-80 transition-opacity duration-300 font-medium"
            >
              Log In
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactCard;