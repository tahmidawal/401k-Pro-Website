import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactCard = ({ title, subtitle, buttonText, linkText }) => {
  const [state, handleSubmit] = useForm("xanwkqdj");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Form submission attempted");
    handleSubmit(event)
      .then(() => console.log("Form submitted successfully"))
      .catch((error) => console.error("Form submission error:", error));
  };

  if (state.succeeded) {
    return (
      <div className="min-h-fit flex items-center justify-center p-4 sm:p-10 md:p-8 p-15" id='contact-section'
        style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}
      >
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full mt-20 mb-20 border-2 border-gray-200">
          <h2 className="text-4xl font-light mb-4">Thank You!</h2>
          <p className="text-gray-500">Your message has been sent successfully.</p>
          <p className="text-sm text-gray-500 mt-2 mb-4">We will contact you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-fit flex items-center justify-center p-4 sm:p-10 md:p-8 p-15" id='contact-section'
      style={{ background: 'linear-gradient(to right, #0A5A9C, #39A5F3)' }}
    >
      <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full mt-20 mb-20 border-2 border-gray-200">
        <h2 className="text-4xl font-light mb-4">{title}</h2>
        <p className="text-gray-500 mb-6">{subtitle}</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Work email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
          <textarea
            id="message"
            name="message"
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Write a message..."
            rows="4"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="relative w-fit py-3 px-6 rounded-full text-white font-medium text-lg transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A5A9C]"
            style={{
              backgroundImage: 'linear-gradient(to right, #0A5A9C, #39A5F3)',
            }}
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
              style={{
                backgroundImage: 'linear-gradient(to right, #0A5A9C, #39A5F3)',
              }}
            ></div>

            {/* White background with gradient border (hidden by default, shown on hover) */}
            <div
              className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            ></div>
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full p-[2px]"
              style={{
                backgroundImage: 'linear-gradient(to right, #0A5A9C, #39A5F3)',
              }}
            >
              <div className="bg-white h-full w-full rounded-full"></div>
            </div>

            {/* Button content */}
            <span
              className="relative z-10 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0A5A9C] group-hover:to-[#39A5F3]"
            >
              {buttonText}
            </span>
          </button>

        </form>
        <p className='text-gray-500 text-sm mt-10'>Already have an account?</p>
        <p className="text-sm text-gray-500 mt-2">
          {linkText} <a href="https://app.401k-pro.ai/" className="text-blue-500 hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
};

export default ContactCard;