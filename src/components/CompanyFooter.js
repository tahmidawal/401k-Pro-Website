import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';
import Logo from '../img/PlanSync-No-Bg.png';
import { IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 10,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const FooterSection = ({ title, items }) => (
  <motion.div variants={itemVariants} className="space-y-6">
    <h3 className="font-normal text-base text-gray-900">
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li 
          key={index}
          className="group flex items-center"
        >
          <ChevronRight className="w-3 h-3 text-blue-500 opacity-0 -ml-4 mr-1 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
          <a 
            href={item.link} 
            className="text-gray-600 hover:text-blue-600 transition-all duration-200"
          >
            {item.text}
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    className="relative group"
    aria-label={label}
  >
    <div className="absolute inset-0 bg-gray-100 rounded-full transition-transform duration-200 group-hover:scale-110" />
    <div className="relative flex items-center justify-center w-10 h-10">
      <Icon size={18} className="text-gray-700 transition-colors duration-200 group-hover:text-blue-600" />
    </div>
  </motion.a>
);

const SimpleContactInfo = ({ icon: Icon, text, href }) => (
  <a href={href} className="flex items-center text-gray-600 hover:text-blue-600 justify-center md:justify-start space-x-3">
    <Icon className="w-5 h-5 text-blue-600" />
    <span>{text}</span>
  </a>
);

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-500">
      <div className="absolute inset-0 pointer-events-none" />
      
      {/* Mobile footer */}
      <div className="block md:hidden">
        <div className="rounded-t-3xl mt-8">
          <div className="container mx-auto px-6 py-12">
            {/* Logo and Company Info */}
            <div className="text-center mb-12">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={Logo} 
                alt="PlanSync Logo" 
                className="h-8 mx-auto mb-4"
              />
              <p className="text-sm text-gray-500">© 2024 AccessibleAI, LLC</p>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="/terms" className="text-sm text-gray-600 hover:text-blue-600">Terms</a>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">Privacy</a>
              </div>
            </div>

            {/* Careers */}
            <div className="text-center mb-12">
              <h3 className="text-lg font-light mb-4">Careers</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/careers" className="text-gray-600 hover:text-blue-600">
                    We're hiring! See open roles
                  </a>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div className="text-center mb-12">
              <h3 className="text-lg font-light mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="/security" className="text-gray-600 hover:text-blue-600">Security</a></li>
                <li><a href="/#demo-video" className="text-gray-600 hover:text-blue-600">Demo Video</a></li>
                <li><a href="/#pricing" className="text-gray-600 hover:text-blue-600">Try for Free</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="text-center">
              <h3 className="text-2xl font-light mb-8">Connect</h3>
              <div className="flex justify-center space-x-8 mb-12">
                <SocialLink href="#" icon={IconBrandTwitter} label="Twitter" />
                <SocialLink href="https://www.linkedin.com/company/accessible-ai/?viewAsMember=true" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="#" icon={IconBrandInstagram} label="Instagram" />
              </div>
              <div className="space-y-6 text-left">
                <SimpleContactInfo 
                  icon={Phone} 
                  text="+1 (919) 200-9943" 
                  href="tel:+19192009943" 
                />
                <SimpleContactInfo 
                  icon={Mail} 
                  text="info@PlanSync.ai" 
                  href="mailto:info@PlanSync.ai" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop footer - keep existing desktop layout */}
      <div className="hidden md:block pt-20 pb-12 font-['Inter',sans-serif]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                src={Logo} 
                alt="PlanSync Logo" 
                className="h-8 cursor-pointer"
                onClick={() => window.location.href = '/'}
              />
              <p className="text-sm text-gray-500">© 2024 AccessibleAI, LLC</p>
              <div className="flex space-x-6">
                <a href="/terms" className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200">Terms</a>
                <a href="/privacy" className="text-sm text-gray-600 hover:text-blue-600 transition-all duration-200">Privacy</a>
              </div>
            </motion.div>

             {/* Product */}
            <FooterSection
              title="Product"
              items={[
                { text: 'Security', link: '/security' },
                { text: 'F.A.Q.', link: '/frequently-asked-questions' },
                { text: 'Demo Video', link: '/#demo-video' },
                { text: 'Try for Free', link: '/#pricing' }
              ]}
            />

            {/* Careers */}
            <FooterSection
              title="Careers"
              items={[
                { text: "We're hiring! See open roles", link: "/careers" }
              ]}
            />

           

            {/* Connect */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="font-normal text-base text-gray-900">
                Connect
              </h3>
              <div className="flex space-x-3">
                <SocialLink href="#" icon={IconBrandTwitter} label="Twitter" />
                <SocialLink href="https://www.linkedin.com/company/accessible-ai/?viewAsMember=true" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="#" icon={IconBrandInstagram} label="Instagram" />
              </div>
              <div className="space-y-3 text-left">
                <SimpleContactInfo 
                  icon={Phone} 
                  text="+1 (919) 200-9943" 
                  href="tel:+19192009943" 
                />
                <SimpleContactInfo 
                  icon={Mail} 
                  text="info@PlanSync.ai" 
                  href="mailto:info@PlanSync.ai" 
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;