import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Check, Clock, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const FormInput = ({ icon: Icon, label, error, ...props }) => (
  <div className="space-y-2">
    <label className="text-sm font-light text-gray-700 flex items-center gap-2">
      <Icon size={16} className="stroke-blue-600" />
      {label}
    </label>
    <input
      {...props}
      className={`w-full px-4 py-3.5 bg-white rounded-xl border shadow-sm font-light
      focus:ring-2 focus:ring-blue-600/20 outline-none transition-all duration-300 
      ${error ? 'border-red-400' : 'border-gray-200 hover:border-gray-300'}`}
    />
  </div>
);

const ContactInfo = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 
    hover:shadow-sm transition-all duration-300 bg-white group">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-400/10 flex items-center justify-center flex-shrink-0
      group-hover:bg-gradient-to-r group-hover:from-blue-600/20 group-hover:to-cyan-400/20 transition-colors duration-300">
      <Icon className="w-5 h-5 stroke-blue-600" />
    </div>
    <div>
      <p className="text-sm text-gray-500 font-light">{label}</p>
      <p className="text-gray-900 font-light">{value}</p>
    </div>
  </div>
);

const ContactCard = () => {
  const [state, handleSubmit] = useForm("xanwkqdj");

  if (state.succeeded) {
    return (
      <motion.div {...fadeIn} className="flex items-center justify-center min-h-screen bg-gray-50/50 p-4">
        <div className="bg-white rounded-2xl p-12 max-w-md w-full shadow-xl">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Check className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent" />
          </div>
          <h2 className="text-3xl font-light text-center mb-3">Message Sent!</h2>
          <p className="text-gray-600 text-center font-light">We'll get back to you within 24 hours.</p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 flex items-center justify-center p-4">
      <motion.div {...fadeIn} className="max-w-6xl w-full border border-gray-300 rounded-2xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info - 2 columns */}
            <div className="md:col-span-2 p-8 lg:p-12 bg-white border-r border-gray-200">
              <div className="sticky top-8 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-light bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                    Let's start a conversation
                  </h2>
                  <p className="text-gray-600 font-light">
                    We're here to help transform your 401(k) management experience.
                  </p>
                </div>

                <div className="space-y-4">
                  <ContactInfo
                    icon={Mail}
                    label="Email us at"
                    value="help@plansync.ai"
                  />
                  <ContactInfo
                    icon={Phone}
                    label="Call us at"
                    value="+1 (919) 200-9943"
                  />
                  <ContactInfo
                    icon={Clock}
                    label="Office Hours"
                    value="Mon-Fri: 9:00 AM - 5:00 PM EST"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form - 3 columns */}
            <div className="md:col-span-3 p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    icon={User}
                    label="Full Name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                  
                  <FormInput
                    icon={Mail}
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    error={state.errors?.email}
                  />
                </div>
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <div className="space-y-2">
                  <label className="text-sm font-light text-gray-700 flex items-center gap-2">
                    <Mail size={16} className="stroke-blue-600" />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    required
                    className="w-full px-4 py-3.5 bg-white rounded-xl border border-gray-200 font-light
                    hover:border-gray-300 focus:ring-2 focus:ring-blue-600/20 outline-none 
                    transition-all duration-300 min-h-[150px] resize-none shadow-sm"
                  />
                </div>
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="group w-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-6 py-3.5 rounded-xl
                  hover:opacity-90 transition-all duration-300 flex items-center 
                  justify-center gap-2 disabled:opacity-50 shadow-lg shadow-blue-600/25"
                >
                  <span className="font-light">Send Message</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactCard;