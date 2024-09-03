import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import GradientButtonWithArrow from './buttons/GradientButtonWithArrow';

const ContactCard = ({ title, subtitle, buttonText, linkText }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted email:', email);
    console.log('Submitted phone number:', phoneNumber);
  };

  return (
    <div className="min-h-fit flex items-center justify-center p-4 sm:p-10 md:p-8 p-15" id='contact-section'
    style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}
    >
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full mt-20 mb-20 border-2 border-gray-200"
       
      >
        <h2 className="text-4xl font-light mb-4">{title}</h2>
        <p className="text-gray-500 mb-6">{subtitle}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Write a message..."
            rows="4"
            required
          />
          <GradientButtonWithArrow buttonText="Submit" showArrow={false}/>
        </form>
        <p className="text-sm text-gray-500 mt-6">
          {linkText} <a href="https://app.401k-pro.ai/" className="text-blue-500 hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;