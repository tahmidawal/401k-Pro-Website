import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ClipboardList,
  Users,
  FileCheck,
  Target,
  ChartBar,
  Zap,
  Database,
  ArrowRight
} from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';

/**
 * GradientIcon
 * Stunning 3D-style gradient icon with hover effect
 */
const GradientIcon = ({ icon: Icon }) => (
  <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-xl blur-lg"></div>
    <div className="absolute inset-0 bg-white/80 rounded-xl border border-white/20 shadow-lg"></div>
    <Icon className="relative z-10 w-8 h-8 text-blue-600" strokeWidth={1.5} />
  </div>
);

/**
 * FeatureCard
 * Beautiful feature card with glass morphism and 3D hover effect
 */
const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{ scale: 1.02, translateY: -10 }}
    className="group relative h-full"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
    <div className="relative h-full backdrop-blur-xl bg-white/80 p-8 rounded-2xl border border-white/20 shadow-lg overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
      <div className="flex items-center gap-4">
        <GradientIcon icon={icon} />
        <h3 className="text-2xl font-light bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed flex-grow mt-4">{description}</p>
    </div>
  </motion.div>
);

/**
 * Expanded step data for the "How It Works" section
 */
const stepsData = [
  {
    title: 'Distribute surveys through Typeform integration',
    description:
      'Say goodbye to the hassle of manually sending and tracking surveys. Our Typeform integration streamlines this process, allowing you to distribute professionally designed surveys effortlessly. The system automatically tracks responses and sends gentle reminders to enhance engagement.',
    benefits: [
      'Comprehensive risk tolerance survey',
      'Enhanced participant engagement',
      'Seamless distribution to participants'
      // "Automated reminder system"
    ]
  },
  {
    title: 'Collect and process responses in real-time',
    description:
      'As responses come in, our system automatically analyzes and organizes the information, providing immediate insights. This real-time processing enables you to identify trends and take action promptly, eliminating the need for lengthy manual compilation.',
    benefits: [
      'Automated response collection',
      'Efficient data organization and categorization'
    ]
  },
  {
    title: 'Generate instant participant census reports',
    description:
      "Quickly transform raw data into valuable insights. Our advanced reporting engine creates comprehensive census reports in an instant, allowing you to analyze participants' risk tolerance and identify potential clients for your wealth advisory practice.",
    benefits: [
      'Instant participant report generation',
      'Insightful analysis of participant data'
    ]
  },
  {
    title: 'Review risk tolerance and lead scores',
    description:
      'Utilize our sophisticated scoring system to gain a deeper understanding of your participants. Our AI-powered analysis evaluates various factors to create accurate risk profiles and identify promising leads, ensuring tailored investment recommendations.',
    benefits: [
      'Improved understanding of participants',
      'AI-driven risk analysis',
      'Effective lead scoring',
      'Behavioral insights for better decision-making'
    ]
  },
  {
    title: 'Identify high-potential advisory opportunities',
    description:
      'Transform your data into actionable revenue opportunities. Our system identifies participants who are likely to benefit from additional advisory services, helping you focus your efforts where they can make the most impact.',
    benefits: [
      'Streamlined opportunity identification',
      'Targeted engagement strategies',
      'Focused approach to advisory services'
    ]
  },
  {
    title: 'Grow your practice',
    description:
      'Leverage our advanced lead scoring system to pinpoint participants with the highest potential for your wealth advisory practice. This targeted approach allows you to concentrate on those who will benefit most from your services, facilitating growth.',
    benefits: [
      'Targeted opportunity identification',
      'Strategic engagement strategies',
      'Focused outreach for advisory services'
    ]
  }
];

/**
 * Custom hook to manage multiple expanded states
 */
const useExpandedSteps = (totalSteps) => {
  const [expandedSteps, setExpandedSteps] = React.useState(new Set());

  const toggleStep = (index) => {
    setExpandedSteps((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isExpanded = (index) => expandedSteps.has(index);

  return { isExpanded, toggleStep };
};

/**
 * StepCard
 * Update the StepCard component to receive expanded state from parent
 */
const StepCard = ({ step, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-xl blur-lg transform group-hover:scale-105 transition-all duration-300"></div>
      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Header Section */}
        <div
          className="flex items-center gap-6 p-6 cursor-pointer"
          onClick={() => onToggle(index)}
        >
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center text-white font-light text-xl">
            {index + 1}
          </div>
          <div className="flex-grow">
            <p className="text-gray-700 text-lg font-medium">{step.title}</p>
          </div>
          <motion.div
            className="flex-shrink-0 text-blue-600"
            animate={{ rotate: isExpanded ? 90 : 0 }}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-6 pt-0 border-t border-gray-100">
            <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {step.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400"></div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};



/**
 * ParticipantCensus (Main Component)
 * with enhanced styling, animations, and 10/10 SEO
 */
const ParticipantCensus = () => {
  // Original feature data
  const features = [
    {
      title: 'Master Spreadsheet Integration',
      description:
        'Automatically sync all participant responses with the Master Spreadsheet, creating a single, unified hub for participant data across all plans and companies.',
      icon: Database
    },
    {
      title: 'Automated Survey Distribution',
      description:
        'Distribute surveys in bulk using our Typeform integration, ensuring seamless delivery to participants, companies, and advisors with just a few clicks.',
      icon: ClipboardList
    },
    {
      title: 'Real-Time Processing',
      description:
        "Collect and process responses automatically in real-time, eliminating the need for manual follow-ups and data entry. Sit back and relax, we've got this.",
      icon: Zap
    },
    {
      title: 'Instant Participant Risk Tolerance and Lead Score Reports',
      description:
        '401k Pro automatically creates comprehensive risk tolerance and lead score reports for every participant. With 401k Pro, you receive detailed documentation for each individual, ensuring you have all the insights you need at your fingertips without lifting a finger.',
      icon: FileCheck
    },
    {
      title: 'Risk Mismatch Detection',
      description:
        'Each participant reports their perceived risk tolerance, while an automatic risk tolerance score is generated based on their survey responses. This enables you to easily identify discrepancies between perceived risk tolerance and actual financial behavior, facilitating more informed investment discussions.',
      icon: Target
    },
    {
      title: 'Independent Wealth Advisory Practice Lead Scoring System',
      description:
        'Highlight participants with the greatest potential for individual wealth advisory practice using advanced metrics and scoring, giving you the opportunity to grow your practice.',
      icon: ChartBar
    }
  ];

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Hook for expanded steps
  const { isExpanded, toggleStep } = useExpandedSteps(stepsData.length);

  // Structured Data (JSON-LD) for "How It Works" (HowTo Schema)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Participant Census Management Process',
    description:
      'A step-by-step guide on how to distribute surveys, process responses, generate reports, and ultimately grow your wealth advisory practice with participant data.',
    step: stepsData.map((step, i) => ({
      '@type': 'HowToStep',
      name: step.title,
      position: i + 1,
      itemListElement: step.benefits.map((benefit) => ({
        '@type': 'HowToDirection',
        text: benefit
      }))
    }))
  };

  return (
    <section aria-labelledby="participant-census-title">
      {/* React Helmet for 10/10 SEO */}
      <Helmet>
        {/* Primary Title Tag */}
        <title>Participant Census Hub | Automate Surveys & Grow Your Practice</title>

        {/* Primary Meta Description */}
        <meta
          name="description"
          content="Easily manage your 401(k) participant census with our next-generation platform. Distribute surveys, collect data in real-time, and generate instant reports to identify high-potential leads."
        />

        {/* Relevant Keywords */}
        <meta
          name="keywords"
          content="participant census, 401k pro, real-time processing, risk tolerance reports, lead scoring, Typeform integration, wealth advisory"
        />

        <meta name="robots" content="index, follow" />

        {/* Canonical Link (Adjust domain/path as needed) */}
        <link rel="canonical" href="https://example.com/participant-census" />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="Participant Census Hub | Automate Surveys & Grow Your Practice" />
        <meta
          property="og:description"
          content="Easily manage your 401(k) participant census with our automated tools. Real-time updates, lead scoring, and risk tolerance reports for optimized practice growth."
        />
        <meta property="og:image" content="https://example.com/images/participant-census-og.jpg" />
        <meta property="og:url" content="https://example.com/participant-census" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Participant Census Hub | Automate Surveys & Grow Your Practice" />
        <meta
          name="twitter:description"
          content="Streamline participant census management with real-time data collection, advanced reporting, and AI-driven lead scoring."
        />
        <meta name="twitter:image" content="https://example.com/images/participant-census-og.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="relative min-h-screen overflow-hidden">
        {/* Animated background elements */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-32"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 360] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              className="inline-block mb-8"
            >
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-full blur-xl"></div>
                <div className="relative flex items-center justify-center h-full">
                  <Users
                    size={48}
                    className="text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text"
                  />
                </div>
              </div>
            </motion.div>

            <h1 id="participant-census-title" className="text-6xl font-extralight mb-8">
              Participant
              <span className="relative mx-4">
                <span className="relative z-10 text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text animate-gradient">
                  Census
                </span>
                <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 -z-10 transform skew-x-12"></div>
              </span>
              Hub
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your participant data into actionable insights with our next-generation census management system
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>

          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-32"
          >
            <h2 className="text-4xl font-light text-center mb-12">
              <span className="bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <div className="grid gap-4 max-w-4xl mx-auto">
              {stepsData.map((step, index) => (
                <StepCard
                  key={index}
                  step={step}
                  index={index}
                  isExpanded={isExpanded(index)}
                  onToggle={toggleStep}
                />
              ))}
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block p-1 rounded-full mb-24">
              <div className="bg-white px-12 py-16 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 over:opacity-100 transition-opacity duration-500"></div>
                <h2 className="text-4xl font-light mb-6">Ready to Grow Your Practice?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join forward-thinking advisors leveraging next-generation technology
                </p>
                <GradientButtonWithArrow buttonText="Get Started" link="/book-a-demo" showArrow={true} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantCensus;