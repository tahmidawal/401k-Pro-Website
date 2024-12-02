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
      title: "Multiple Fragmented Parties",
      description: "Managing 401k plans requires constant communication between advisors, plan sponsors, recordkeepers, and TPAs. This makes capturing and organizing critical details for due diligence challenging and time-consuming.",
      solution: "401k Pro streamlines communication between advisors, plan sponsors, recordkeepers, and TPAs by providing an organized platform for capturing and storing important plan details. Whether the communication happens in person, over the phone, or via email, all relevant information is centralized for easy access, making due diligence effortless."
    },
    {
      number: 2,
      title: "Inability to Scale",
      description: "Scaling 401k plan management is difficult due to varying plan designs, different service providers, and time-consuming data retrieval processes on recordkeeper platforms. This complexity hinders the creation of consistent, efficient processes.",
      solution: "401k Pro automates key tasks like note-taking, report writing, and providing best practices for plan sponsors. This creates a scalable, repeatable process that demonstrates your expertise while lightening the workload for plan sponsors, ultimately saving time and improving efficiency across multiple plans."
    },
    {
      number: 3,
      title: "Endless Fiduciary Responsibilities",
      description: "Understanding and adhering to fiduciary responsibilities under DOL and ERISA regulations is complex. A lack of clear processes for plan management can lead to significant compliance risks.",
      solution: "401k Pro helps you easily adhere to fiduciary responsibilities by offering ready-made or customizable templates that simplify compliance with DOL and ERISA requirements. These templates can be quickly applied across your entire client base, ensuring consistent, compliant plan management."
    },
    {
      number: 4,
      title: "Manual and Inefficient Data Extraction",
      description: "Extracting and organizing plan details, such as eligibility requirements and vesting schedules, from adoption agreements is a tedious and time-consuming task, making it difficult to ensure all necessary information is properly captured.",
      solution: "401k Pro allows you to automatically scan in and organize your plan documents, extracting key data points like eligibility requirements and vesting schedules in seconds."
    },
    {
      number: 5,
      title: "Inconsistent Review Processes",
      description: "The absence of a standardized approach to periodic reviews of plan and fiduciary activities leads to inefficiencies and uncertainty. Advisors often struggle to consistently document and manage plan requirements across different clients.",
      solution: "401k Pro offers customizable templates for quarterly and annual plan reviews, providing a consistent framework for documenting plan management and fiduciary activities. You can use or edit these templates as needed, ensuring a streamlined, repeatable process for all your clients."
    },
    {
      number: 6,
      title: "Overburdened Plan Sponsors",
      description: "Plan sponsors are supposed to keep documentation of their plan management process under ERISA regulations, but they often lack the time and expertise to do so effectively. This can lead to compliance risks and increased liability for both the sponsor and the advisor.",
      solution: "401k Pro allows advisors to provide plan sponsors with the documentation they need to stay compliant, reducing the burden on sponsors and ensuring that all necessary information is properly captured and stored."
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
        className="relative w-full h-fit min-h-fit text-white overflow-hidden" 
        style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 h-full flex flex-col justify-center">
          <h2 className={`text-4xl font-light mb-12 transition-all duration-1000 ease-out text-center ${
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