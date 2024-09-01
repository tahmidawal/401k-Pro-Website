import { Section } from 'lucide-react';
import React from 'react';

const SectionTitle = ({ mainTitle, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto my-12">
      <h2 className="section-title">
        {mainTitle}
      </h2>
      <p className="text-xl text-gray-600 mt-4">{subtitle}</p>
      <style jsx>{`
        .section-title {
          font-size: 32px;
          font-weight: bold;
          text-transform: uppercase;
          position: relative;
          color: #222222;
        }
        .section-title::before {
          content: "";
          margin: 0 15px 10px 0;
          width: 50px;
          height: 2px;
          background: #3498db;
          display: inline-block;
        }
        .section-title::after {
          content: "";
          margin: 0 0 10px 15px;
          width: 50px;
          height: 2px;
          background: #3498db;
          display: inline-block;
        }
        *, ::after, ::before {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default SectionTitle;