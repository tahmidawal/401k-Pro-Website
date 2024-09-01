import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactCard = ({ title, subtitle, buttonText, linkText }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted email:', email);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md">
      <h2 className="text-4xl font-light mb-4">{title}</h2>
      <p className="text-gray-500 mb-6">{subtitle}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
          className="w-full p-3 border border-gray-300 rounded-full"
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-3 px-6 rounded-full flex items-center justify-between hover:border-sky-500"
        >
          <span>{buttonText}</span>
          <ArrowRight className="text-sky-500" size={20} />
        </button>
      </form>
      <p className="text-sm text-gray-500 mt-6">
        {linkText} <a href="https://app.401k-pro.ai/" className="text-blue-500">Log In</a>
      </p>
    </div>
  );
};

export default ContactCard;