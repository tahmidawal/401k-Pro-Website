import React from 'react';

const WhatDrivesUs = () => {
  return (
  <section className="w-full p-20"  style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}>
    <div className="font-roboto font-light max-w-5xl mx-auto p-8 text-center">
      <h1 className="text-4xl mb-8 relative text-white">
        What Drives Us
        {/* <span className="absolute left-0 right-0 -top-4 h-px bg-blue-300"></span>
        <span className="absolute left-0 right-0 -bottom-4 h-px bg-blue-300"></span> */}
      </h1>
      
      <p className="text-xl italic mb-8 text-gray-600 text-white">
        "AI won't replace humans — but humans with AI will replace humans without AI" <br></br>- <span className="text-white">Harvard Business Review, November 2023.</span>
      </p>
      
      <div className="space-y-6 text-lg text-gray-700 text-left text-white">
        <p>
          In the world we live in today, AI has the power to both drive a business forward or make it obsolete. The sad reality is that due to a lack of adequate access to AI and automation, more and more small businesses are becoming obsolete. This must change.
        </p>
        
        <p>
          Small businesses are not only the backbone of the US economy but critical to the very fabric and diversity of the world we live in. <span className="font-medium">It is our mission to ensure that small businesses are not left behind in the AI revolution</span> because we do not want to live in a world where they have ceased to exist.
        </p>
        
        <p>
          Our challenge to you is to ask yourself, <span className="italic">"Am I doing enough to make sure that my company is as efficient as possible, so that we can survive and thrive in this new world of AI?"</span>
        </p>
        
        <p>
          As you are thinking hard about that question, we bet your answer will be - <span className="italic">"No, there are inefficiencies in my business that desperately need to be addressed."</span>
        </p>
        
        <p>
          Just like everyone else, the next thought you will have is <span className="italic">"I know I need AI in my business, but I have no idea where to start."</span> This is where we come in. We are here to guide you through the entire process of both finding inefficencies in your workflows and then implementing AI and automation to solve them.
        </p>
        
        <p className="text-xl font-medium text-center">
          Working together, we will help your company survive and thrive in this new world of AI.
        </p>
      </div>
    </div>
  </section>
  );
};

export default WhatDrivesUs;