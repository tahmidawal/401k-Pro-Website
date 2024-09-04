import React from 'react';
import { Linkedin } from 'lucide-react';
import Logo from './401k Pro Logo Footer.png'

// Import the new icons from @tabler/icons-react
import { IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col items-center text-center">
    <h3 className="font-light text-lg mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link} className="text-sm text-gray-600 hover:text-gray-900">{item.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white py-12 font-roboto font-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            {/* First column - Your logo and company info */}
            <img src={Logo} alt="401k Pro Logo" className="h-8 mb-4" />
            {/* <p className="text-sm mb-2">Plan management made simple, personal, and scalable</p> */}
            <p className="text-sm mb-4">© 2024 AccessibleAI, LLC</p>
            <p className="text-sm mb-2">
              <a href="/terms" className="text-gray-600 hover:text-gray-900 mr-4">Terms</a>
              <a href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</a>
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            {/* Second column - Hiring info and social links */}
            <h3 className="font-light text-lg mb-4">Careers</h3>
            <p className="text-sm mb-4">
              We're hiring! See <a href="/careers" className="underline">open roles</a>.
            </p>
          </div>
          
          <FooterSection
            title="Product"
            items={[
              { text: 'Security', link: '/security' },
              { text: 'Demo Video', link: '/#demo-video' },
              { text: 'Try for Free', link: '/#pricing' }
            ]}
          />
          
          <div className="flex flex-col items-center text-center">
            <h3 className="font-light text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-sky-500">
                <IconBrandTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/accessible-ai/?viewAsMember=true" className="text-blue-500">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-pink-600 hover:text-gray-900">
                <IconBrandInstagram size={20} />
              </a>
            </div>
            <p className='text-sm mt-3'>+1 (919) 200-9943</p>
            <p className='text-sm mt-3'>info@401k-pro.ai</p>
          </div>
        </div>

        {/* You can add the certification logos here if needed */}
        <div className="mt-8 flex justify-center space-x-4">
          {/* Add your certification logos here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;