import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import Logo from '../img/401k Pro Logo-Photoroom.png';
import { IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const FooterSection = ({ title, items }) => (
  <motion.div variants={itemVariants}>
    <h3 className="font-light text-xl mb-6 bg-clip-text text-transparent">
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li 
          key={index}
          whileHover={{ x: 5 }}
          className="transition-colors duration-300"
        >
          <a 
            href={item.link} 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            {item.text}
          </a>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const SocialLink = ({ href, icon: Icon, color }) => (
  <motion.a
    whileHover={{ scale: 1.1, y: -2 }}
    href={href}
    className={`text-${color} hover:text-${color}/80 transition-colors duration-300`}
  >
    <Icon size={20} />
  </motion.a>
);

const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-2 text-gray-600">
    <Icon size={16} className="text-blue-600" />
    <span>{text}</span>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-16 font-['Roboto',sans-serif] font-light border-t border-gray-200">
      {/* Background blur elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-3xl"></div>
      </div> */}

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <img src={Logo} alt="401k Pro Logo" className="h-8 mb-6" />
            <p className="text-gray-600 mb-4">© 2024 AccessibleAI, LLC</p>
            <div className="flex space-x-4">
              <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Terms</a>
              <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Privacy</a>
            </div>
          </motion.div>

          {/* Careers */}
          <FooterSection
            title="Careers"
            items={[
              { text: "We're hiring! See open roles", link: "/careers" }
            ]}
          />

          {/* Product */}
          <FooterSection
            title="Product"
            items={[
              { text: 'Security', link: '/security' },
              { text: 'Demo Video', link: '/#demo-video' },
              { text: 'Try for Free', link: '/#pricing' }
            ]}
          />

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h3 className="font-light text-xl mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="flex space-x-4 mb-6">
              <SocialLink href="#" icon={IconBrandTwitter} color="blue-400" />
              <SocialLink href="https://www.linkedin.com/company/accessible-ai/?viewAsMember=true" icon={Linkedin} color="blue-600" />
              <SocialLink href="#" icon={IconBrandInstagram} color="pink-500" />
            </div>
            <div className="space-y-3">
              <ContactInfo icon={Phone} text="+1 (919) 200-9943" />
              <ContactInfo icon={Mail} text="info@401k-pro.ai" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;