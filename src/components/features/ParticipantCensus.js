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
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import GradientButtonWithArrow from '../buttons/GradientButtonWithArrow';

/**
 * GradientIcon
 * Stunning 3D-style gradient icon with hover effect
 */
const GradientIcon = ({ icon: Icon }) => (
  <div className="relative w-10 h-10 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-lg sm:rounded-xl blur-lg"></div>
    <div className="absolute inset-0 bg-white/80 rounded-lg sm:rounded-xl border border-white/20 shadow-lg"></div>
    <Icon className="relative z-10 w-5 h-5 sm:w-8 sm:h-8 text-blue-600" strokeWidth={1.5} />
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
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-xl sm:rounded-2xl blur-2xl transform group-hover:scale-110 transition-transform duration-500"></div>
    <div className="relative h-full backdrop-blur-xl bg-white/80 p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-white/20 shadow-lg overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-600/10 to-cyan-400/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <GradientIcon icon={icon} />
        <h3 className="text-lg sm:text-2xl font-light text-gray-800">
          {title}
        </h3>
      </div>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow mt-3 sm:mt-4">{description}</p>
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
      className="relative group px-2 sm:px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-400/5 rounded-xl blur-lg transform group-hover:scale-105 transition-all duration-300"></div>
      <div className="relative bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div
          className="flex items-center gap-3 sm:gap-6 p-4 sm:p-6 cursor-pointer"
          onClick={() => onToggle(index)}
        >
          <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-light text-sm sm:text-xl">
            {index + 1}
          </div>
          <div className="flex-grow">
            <p className="text-sm sm:text-lg text-gray-700 font-medium">{step.title}</p>
          </div>
          <motion.div
            className="flex-shrink-0 text-blue-600"
            animate={{ rotate: isExpanded ? 90 : 0 }}
          >
            <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-4 sm:p-6 pt-0 border-t border-gray-100">
            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{step.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {step.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
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
    title: 'Seamless Plan Integration',
    description:
      'All participant responses automatically sync with your plan data, ensuring a single, centralized hub for managing participant insights across all plans and companies—no manual data transfers required.',
    icon: Database
  },
  {
    title: 'Automated, Effortless Survey Distribution',
    description:
      'Send bulk participant surveys in just a few clicks using our Typeform integration. Whether reaching individual participants, companies, or advisors, automated distribution ensures timely responses without the hassle.',
    icon: ClipboardList
  },
  {
    title: 'Instant Data Processing & Insights',
    description:
      "Responses are collected and analyzed in real-time, eliminating manual follow-ups and data entry. Gain immediate access to actionable participant insights without lifting a finger.",
    icon: Zap
  },
  {
    title: 'Comprehensive Risk Tolerance Reports',
    description:
      'PlanSync automatically generates detailed risk tolerance and lead score reports for each participant. Access individualized insights instantly, giving you everything you need to enhance participant engagement and financial planning.',
    icon: FileCheck
  },
  {
    title: 'Identify Risk Mismatches Instantly',
    description:
      'Compare each participant’s self-reported risk tolerance with their AI-generated risk score to uncover discrepancies between perception and actual financial behavior—helping you guide more informed investment decisions.',
    icon: Target
  },
  {
    title: 'Unlock New Wealth Advisory Opportunities',
    description:
      'Automatically identify participants with the highest potential for individual wealth advisory services. Leverage advanced scoring and analytics to expand your practice with high-value prospects effortlessly.',
    icon: TrendingUp
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
        <title>Participant Census | Automate Surveys & Grow Your Practice</title>

        {/* Primary Meta Description */}
        <meta
          name="description"
          content="Easily manage your 401(k) participant census with our next-generation platform. Distribute surveys, collect data in real-time, and generate instant reports to identify high-potential leads."
        />

        {/* Relevant Keywords */}
        <meta
          name="keywords"
          content="participant census, PlanSync, real-time processing, risk tolerance reports, lead scoring, Typeform integration, wealth advisory"
        />

        <meta name="robots" content="index, follow" />

        {/* Canonical Link (Adjust domain/path as needed) */}
        <link rel="canonical" href="https://example.com/participant-census" />

        {/* Open Graph / Social Media Tags */}
        <meta property="og:title" content="Participant Census | Automate Surveys & Grow Your Practice" />
        <meta
          property="og:description"
          content="Easily manage your 401(k) participant census with our automated tools. Real-time updates, lead scoring, and risk tolerance reports for optimized practice growth."
        />
        <meta property="og:image" content="https://example.com/images/participant-census-og.jpg" />
        <meta property="og:url" content="https://example.com/participant-census" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Participant Census | Automate Surveys & Grow Your Practice" />
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

        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-24 relative">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 sm:mb-32"
          >
            <h1 id="participant-census-title" className="text-4xl sm:text-6xl font-extralight mb-4 sm:mb-8">
              Participant
              <span className="relative mx-2 sm:mx-4">
                <span className="relative z-10 text-transparent bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text animate-gradient">
                  Census
                </span>
                <div className="absolute inset-x-0 bottom-0 h-3 sm:h-4 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 -z-10 transform skew-x-12"></div>
              </span>
            </h1>
            <p className="text-base sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Transform your participant data into actionable insights with our next-generation census management system
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-12 sm:mb-32">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>

          {/* Process Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-16 sm:mb-32"
          >
            <h2 className="text-3xl sm:text-4xl font-light text-center mb-8 sm:mb-12">
              <span className="bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <div className="grid gap-3 sm:gap-4 max-w-4xl mx-auto">
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
            className="text-center px-4 sm:px-0"
          >
            <div className="inline-block p-1 rounded-full mb-12 sm:mb-24">
              <div className="bg-white px-6 sm:px-12 py-8 sm:py-16 rounded-full relative overflow-hidden">
                <h2 className="text-2xl sm:text-4xl font-light mb-4 sm:mb-6">Ready to Grow Your Practice?</h2>
                <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
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