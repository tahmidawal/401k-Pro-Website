import React, { useEffect, useRef, useState } from 'react';

const IssuePoint = ({ number, title, description, solution, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`space-y-4 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-center space-x-4">
        <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-semibold">
          {number}
        </span>
        <h3 className="text-2xl font-light">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
      <p className="text-gray-300">{solution}</p>
    </div>
  );
};

const IndustryIssueOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const issues = [
    {
      number: 1,
      title: "Late reports.",
      description: "The industry standard is a 15-21 day close, which means you won't get this month's numbers until next month is already half over. That's useless.",
      solution: "With Digits, you'll get your reports by the 5th of the month—2-3X faster than any competing firm."
    },
    {
      number: 2,
      title: "TLDR; please?",
      description: "Financials delivered as Excel models or black & white PDFs take far too long to understand, with the key takeaways lost in a sea of numbers.",
      solution: "Digits Reports are live, visual, and intuitive—designed to help you understand your business in seconds."
    },
    {
      number: 3,
      title: "Compliance nightmares.",
      description: "Keeping up with changing regulations and ensuring all plans are compliant is a constant challenge for advisors.",
      solution: "Our platform automatically updates with the latest compliance requirements, alerting you to any issues and guiding you through resolution."
    },
    {
      number: 4,
      title: "Data silos.",
      description: "Critical information is often scattered across multiple systems, making it difficult to get a holistic view of your clients' plans.",
      solution: "Digits integrates all your data sources into one centralized platform, giving you a comprehensive overview at your fingertips."
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`py-16 transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ minHeight: "fit-content" }}
    >
      <div 
        className="relative w-full h-screen min-h-fit text-white overflow-hidden" 
        style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <h2 className={`text-4xl font-light mb-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            How is 401k plan management broken?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {issues.map((issue, index) => (
              <IssuePoint 
                key={index} 
                number={issue.number} 
                title={issue.title} 
                description={issue.description} 
                solution={issue.solution} 
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryIssueOverview;