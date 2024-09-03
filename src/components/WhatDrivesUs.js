import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      });
    });
    
    const { current } = domRef;
    observer.observe(current);
    
    return () => observer.unobserve(current);
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const WhatDrivesUs = () => {
  return (
    <section className="w-full p-1 md:p-20" style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}>
      <div className="font-roboto font-light max-w-5xl mx-auto p-4 md:p-8 text-center">
        <FadeInSection>
          <h1 className="text-3xl md:text-4xl mb-6 md:mb-8 relative text-white">
            What Drives Us
          </h1>
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <p className="text-lg md:text-xl italic mb-6 md:mb-8 text-white">
            "AI won't replace humans — but humans with AI will replace humans without AI" <br className="hidden md:inline" />
            - <span className="text-white">Harvard Business Review, November 2023.</span>
          </p>
        </FadeInSection>
        
        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-left text-white">
          <FadeInSection delay={400}>
            <p>
              In the world we live in today, AI has the power to both drive a business forward or make it obsolete. The sad reality is that due to a lack of adequate access to AI and automation, more and more advisory firms are being left behind.
            </p>
          </FadeInSection>
          
          <FadeInSection delay={600}>
            <p>
              Financial advisors play a critical role in making sure that our world is financially secure. It is our mission to ensure that no advisor is left behind in the AI revolution because we do not want to live in a world where they have ceased to exist.
            </p>
          </FadeInSection>

          <FadeInSection delay={800}>
            <p>
              Our challenge to you is to ask yourself, <span className="italic">"Am I doing enough to make sure that my practice is as efficient as possible, so that we can survive and thrive in this new world of AI?"</span>
            </p>
          </FadeInSection>
          
          <FadeInSection delay={1000}>
            <p className="text-lg md:text-xl font-medium italic">
              Working together, we push to allow your firm to survive and thrive in this new world of AI.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;