import React from 'react';
import { Linkedin } from 'lucide-react';
import SectionTitle from './titles/section_title';

const ContactPage = () => {
  return (
    <div className="mx-auto p-6 bg-slate-50 w-full">
        <div className="container mx-auto px-4 py-8 mt-16">
            <SectionTitle
                mainTitle="Contact Us"
                subtitle="Scale your 401(k) plan management with PlanSync"
                />
        
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
            
            <a href="https://linkedin.com" className="inline-block text-blue-500 mb-4">
                <Linkedin size={24} />
            </a>
            
            <div className="flex items-center mb-2">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@PlanSync.ai</span>
            </div>
            
            <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 919 200 9943</span>
            </div>
            </div>
            
            <div className="md:w-1/2">
            <form className="space-y-4">
                <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded"
                />
                <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
                <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-gradient-to-r from-blue-600 to-cyan-400"
                >
                Send Message
                </button>
            </form>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ContactPage;