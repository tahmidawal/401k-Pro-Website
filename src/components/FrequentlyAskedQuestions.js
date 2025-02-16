import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
      repeatType: 'reverse',
      delay,
    }}
  >
    {children}
  </motion.div>
);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98],
    },
  },
};

// Accordion FAQ item component
const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={itemVariants} className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <h3 className="text-lg font-light">{question}</h3>
        <span className="text-gray-500">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 text-gray-600 text-sm overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: 'What is PlanSync AI?',
      answer:
        'PlanSync AI is an AI-powered 401(k) plan management and reporting platform designed to help advisors streamline compliance, automate documentation, and centralize plan data. It simplifies fiduciary responsibilities, reducing the manual workload while enhancing compliance oversight.',
    },
    {
      question: "ChatGPT hasn’t been helpful in the way I work. Why is PlanSync AI any different?",
      answer: 
        "We get it—using AI tools like ChatGPT can feel like extra work because they don’t always give you exactly what you need. PlanSync AI is different because we’ve done all of that hard work for you. \n\n" +
        "Instead of asking advisors to figure out how to make AI useful, we curated out AI to be very good at organizing all your plan data and documentation without you lifting a finger. We handled all the prompt engineering, fine-tuning, and development work to ensure our AI-powered automation does exactly what you need—so you don’t have to spend time figuring it out."
    },
    {
      question: 'How does PlanSync AI work?',
      answer:
        'PlanSync AI integrates seamlessly into your current workflow without requiring you to change how you operate. It helps advisors automate documentation by forwarding client emails for automatic logging, extracting key data from PDFs, and instantly generating compliance reports. This means less time spent on administrative tasks and more time focusing on clients.',
    },
    {
      question: 'Is my data secure with PlanSync AI?',
      answer:
        'Yes. Security is a top priority for us. We use enterprise-grade security measures, including encryption, multi-factor authentication, and access controls. Additionally, we conduct regular security audits and are working toward SOC 2 compliance to ensure the highest level of data protection.',
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We provide dedicated support to all users, including onboarding assistance and ongoing guidance. Our team is available via email, live chat, and even text messaging during business hours. Enterprise clients receive priority support to ensure they get the help they need as quickly as possible. We are a startup, so we prioritize every single one of our customers.',
    },
    {
      question: 'Can I integrate PlanSync AI with my existing systems?',
      answer:
        'Yes. PlanSync AI is designed to work alongside your existing workflow rather than replacing it. While we don’t currently offer API integrations, the platform is built to seamlessly fit into your process, helping you manage fiduciary tasks more efficiently without requiring a major operational overhaul.',
    },
    {
      question: 'What pricing plans are available?',
      answer:
        'Our pricing is based on the number of plans you manage:\n\n' +
        '- 1-15 Plans: $300/month\n' +
        '- 16-50 Plans: $500/month *(Most Popular)*\n' +
        '- 51+ Plans: $10 per plan/month\n\n' +
        'For large enterprises such as TPAs, we offer custom pricing tailored to your specific needs. Contact us to discuss your requirements and receive a personalized quote.',
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes, we offer a free trial so you can experience the benefits of PlanSync AI firsthand before making a commitment. Reach out to our team to get started.',
    },
    {
      question: 'Who is PlanSync AI designed for?',
      answer:
        'PlanSync AI is built for 401(k) advisors, TPAs, and firms that want to improve efficiency in plan management, compliance tracking, and reporting automation. Whether you manage a few plans or hundreds, our platform helps streamline your workflow.',
    },
    {
      question: 'What makes PlanSync AI different from other plan management tools?',
      answer:
        'Most 401(k) plan management software is outdated and built on decades-old technology. PlanSync AI stands out by combining modern AI-powered automation with a highly structured fiduciary template, allowing advisors to cut down administrative work, centralize plan data, and generate reports instantly. Instead of adding complexity, it works alongside your current workflow to make plan management smoother and more efficient.',
    },
    {
      question: "Where did the idea for PlanSync.ai come from?",
      answer: 
        "PlanSync.ai was born when Cameron Abernethy, an intern at Ed Secrest's 401(k) plan management firm, saw firsthand the inefficiencies that Ed had to deal with daily. The plan management process was slow, manual, and overly complex, with fragmented communication and time-consuming documentation. \n\n" +
        "For his internship project, Cameron set out to find a better way for advisors to manage plans. His solution was a huge success, transforming the way Ed managed 401(k) plans and dramatically improving efficiency. \n\n" +
        "After seeing the impact firsthand, Cameron, Ed, and their cofounder Tahmid Awal, decided to turn this project into a full-scale product. Together, they built PlanSync AI, a modern, AI-powered platform designed to  streamline plan management, automate documentation, and make advisors’ lives easier. "
    },
  ];


  // Structured Data (FAQPage schema)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const seoKeywords = [
    'PlanSync AI FAQ',
    '401k plan management',
    'AI retirement plan',
    'PlanSync security',
    'PlanSync pricing',
    'PlanSync free trial',
  ].join(', ');

  return (
    <div className="relative min-h-screen overflow-hidden font-['Roboto',sans-serif] font-light">
      {/* SEO Helmet */}
      <Helmet>
        <title>Frequently Asked Questions | PlanSync AI</title>
        <meta
          name="description"
          content="Find answers to common questions about PlanSync AI, the AI-powered 401(k) plan management software."
        />
        <meta name="keywords" content={seoKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://your-domain.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Background animations */}
      <FloatingElement>
        <div className="absolute top-0 left-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </FloatingElement>
      <FloatingElement delay={2}>
        <div className="absolute bottom-0 right-0 w-[200px] sm:w-[600px] h-[200px] sm:h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </FloatingElement>

      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:py-24">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12 sm:mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-extralight mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to some of the most common questions about PlanSync AI.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} index={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
