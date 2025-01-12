import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, Sparkles } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 15,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
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

// Updated InputField with modern styling
const InputField = ({ icon: Icon, ...props }) => (
  <div className="relative group">
    <div className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative flex items-center">
      <Icon 
        className="absolute left-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 z-10" 
        size={20}
      />
      <input
        {...props}
        className="w-full bg-white/80 backdrop-blur-xl border-[0.5px] border-gray-100 rounded-2xl py-4 px-12 
        focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20 
        transition-all duration-300 text-gray-700 placeholder-gray-400/80
        shadow-sm hover:shadow-md"
      />
    </div>
  </div>
);

// Updated TextAreaField with matching modern styling
const TextAreaField = ({ icon: Icon, ...props }) => (
  <div className="relative group">
    <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative">
      <Icon 
        className="absolute left-4 top-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300 z-10" 
        size={20}
      />
      <textarea
        {...props}
        className="w-full bg-white/80 backdrop-blur-xl border-[0.5px] border-gray-100 rounded-2xl py-4 px-12 
        focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20 
        transition-all duration-300 min-h-[140px] text-gray-700 placeholder-gray-400/80
        shadow-sm hover:shadow-md resize-none"
      />
    </div>
  </div>
);

const ContactCard = () => {
  const [state, handleSubmit] = useForm("xanwkqdj");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Form submission attempted");
    handleSubmit(event)
      .then(() => console.log("Form submitted successfully"))
      .catch((error) => console.error("Form submission error:", error));
  };

  if (state.succeeded) {
    return (
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="absolute inset-0 opacity-85"></div>
        <FloatingElement delay={0}>
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-white/30 rounded-full blur-3xl"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-white/30 rounded-full blur-3xl"></div>
        </FloatingElement>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/90 backdrop-blur-2xl p-14 rounded-[2.5rem] shadow-2xl max-w-md w-full"
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
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 opacity-85"></div>
      <FloatingElement delay={0}>
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-white/30 rounded-full blur-3xl"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-white/30 rounded-full blur-3xl"></div>
      </FloatingElement>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative bg-white/90 backdrop-blur-2xl p-14 rounded-[2.5rem] shadow-2xl max-w-md w-full"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-light mb-3 text-gray-800 tracking-tight">Book a Demo</h2>
          <p className="text-gray-500 mb-10 tracking-wide">See 401k Pro in action today</p>
        </motion.div>

        <form onSubmit={onSubmit} className="space-y-7">
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
              <div className="absolute inset-0 bg-gradient-to-bl from-sky-400 to-blue-800 rounded-2xl blur opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-bl from-sky-400 to-blue-800 text-white font-light py-4 px-6 rounded-2xl 
                flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 group-hover:scale-[0.99]">
                <span className="tracking-wide">Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 rotate-45" />
              </div>
            </button>
          </motion.div>
        </form>

        <motion.div variants={itemVariants} className="mt-10 text-center">
          <p className="text-gray-500 text-sm">Already have an account?</p>
          <p className="text-sm mt-2">
            
            <a 
              href="https://testapp.401k-pro.ai/" 
              className="text-transparent bg-clip-text bg-gradient-to-bl from-sky-400 to-blue-800 hover:opacity-80 
              transition-opacity duration-300 font-medium hover:underline decoration-blue-400/30"
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