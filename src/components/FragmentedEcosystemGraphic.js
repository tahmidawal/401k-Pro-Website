import { Frame } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ badge, title, description, isAnimated = false, delay = 0, gradient = false }) => {
  const baseClasses = "relative backdrop-blur-sm p-8 rounded-3xl border overflow-hidden h-full flex flex-col";
  const gradientClasses = gradient 
    ? "bg-gradient-to-r from-[#0A5A9C] to-[#39A5F3] border-white/10 text-white" 
    : "bg-white/10 border-white/10";
  
  const card = (
    <div className={`${baseClasses} ${gradientClasses}`}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className={`text-sm font-medium py-1 px-3 rounded-full inline-block mb-2 ${
        gradient ? 'bg-green-500' : 'bg-red-500'
      } text-white relative z-10`}>
        {badge}
      </div>
      <h3 className="text-2xl font-light mb-2 text-white relative z-10">{title}</h3>
      <p className={`relative z-10 ${gradient ? "text-white/90" : "text-gray-300"}`}>
        {description}
      </p>
    </div>
  );

  if (isAnimated) {
    return (
      <div className="animate-fade" style={{ animationDelay: `${delay}s` }}>
        {card}
      </div>
    );
  }

  return card;
};

const FragmentedEcosystemGraphic = () => {
  return (
    <div className="relative overflow-hidden font-roboto py-24">
      <style>{`
        @keyframes fadeInOut {
          0%, 20%, 80%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }

        .animate-fade {
          animation: fadeInOut 10s infinite;
        }
      `}</style>

      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-blue-50/30">
        <div className="absolute inset-0"></div>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 0,
        }}
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2,
        }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
          {/* Step 1 - Animated Cards */}
          <div className="relative h-full">
            <div className="absolute inset-0">
              <Card
                badge="Fiduciary Responsibilities"
                title="No Solutions"
                description="There is no dedicated system specifically designed for helping advisors manage their fiduciary responsibilities."
                isAnimated={true}
                delay={0}
              />
            </div>
            <div className="absolute inset-0">
              <Card
                badge="Fiduciary Responsibilities"
                title="401k Pro"
                description="With 401k Pro you can easily manage your fiduciary responsibilities. Your plan management ecosystem is now complete."
                isAnimated={true}
                delay={5}
                gradient={true}
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="mt-60 sm:mt-0">
            <Card
              badge="Plan Hosting"
              title="Record Keepers"
              description="Record Keepers allow you to easily host your plans on their platform and provide you with the tools to manage them."
            />
          </div>

          {/* Step 3 */}
          <div>
            <Card
              badge="ERISA Compliance"
              title="TPAs and ERISA Attorneys"
              description="TPAs and ERISA Attorneys easily take care of the plan's accounting and ERISA compliance."
            />
          </div>

          {/* Step 4 */}
          <div>
            <Card
              badge="Investments"
              title="Investment Monitoring Tools"
              description="Investment monitoring tools such as fi360 and Morninstar provide you with the tools to monitor your plan's investments easily and efficiently."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FragmentedEcosystemGraphic;