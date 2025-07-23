'use client'

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="max-w-8xl mx-auto bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">

        {/* Form Section - Left Side */}
        <div className="order-2 md:order-1">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Form Fields */}
            <div className="space-y-4 sm:space-y-5">
              {/* First Name Field */}
              <div className="space-y-2">
                <label className="block font-outfit font-medium text-sm leading-5 text-[#344054]">
                  First name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="w-full h-[44px] sm:h-[48px] px-3 sm:px-4 py-3 font-outfit text-sm sm:text-base leading-6 text-[#667085] bg-white border border-[#d0d5dd] rounded-lg focus:outline-none focus:border-[#4e73ff] focus:ring-1 focus:ring-[#4e73ff] transition-colors duration-200"
                  />
                </div>
              
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block font-outfit font-medium text-sm leading-5 text-[#344054]">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="aiif@ajkcas.ac.in"
                    className="w-full h-[44px] sm:h-[48px] px-3 sm:px-4 py-3 font-outfit text-sm sm:text-base leading-6 text-[#667085] bg-white border border-[#d0d5dd] rounded-lg focus:outline-none focus:border-[#4e73ff] focus:ring-1 focus:ring-[#4e73ff] transition-colors duration-200"
                  />
                </div>
              
              </div>

              {/* Phone Number Field */}
              <div className="space-y-2">
                <label className="block font-outfit font-medium text-sm leading-5 text-[#344054]">
                  Phone number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91-XXXXXXXXXX"
                    className="w-full h-[44px] sm:h-[48px] px-3 sm:px-4 py-3 font-outfit text-sm sm:text-base leading-6 text-[#667085] bg-white border border-[#d0d5dd] rounded-lg focus:outline-none focus:border-[#4e73ff] focus:ring-1 focus:ring-[#4e73ff] transition-colors duration-200"
                  />
                </div>
               
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="block font-outfit font-medium text-sm leading-5 text-[#344054]">
                  Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Include a message..."
                    rows={4}
                    className="w-full min-h-[100px] sm:min-h-[120px] px-3 sm:px-4 py-3 font-inter text-sm sm:text-base leading-6 text-[#667085] bg-white border border-[#d0d5dd] rounded-lg resize-y focus:outline-none focus:border-[#4e73ff] focus:ring-1 focus:ring-[#4e73ff] transition-colors duration-200"
                  />
                </div>
             
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[50px] sm:h-[56px] bg-transparent text-black font-outfit font-medium text-lg sm:text-xl lg:text-[24px] leading-[30px] rounded-md flex items-center justify-center gap-2 border relative overflow-hidden group transition-colors duration-300 cursor-pointer mt-6"
            >
              <div className="absolute inset-0 bg-[#4e73ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Register Now
              </span>
            </button>
          </form>
        </div>

        {/* Main Content Section - Mobile: Top, Large: Right Side */}
        <div className="order-1 md:order-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-4 lg:gap-6">
          {/* Social Media Section */}
          <div className="bg-white md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none space-y-4 sm:space-y-6">
            <h2 className="font-outfit font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-[#4e73ff] text-center md:text-right">
              Social media
            </h2>
            <div className="space-y-3 sm:space-y-4 md:space-y-6 flex flex-col items-center md:items-end">
              {/* Instagram */}
              <a href='https://www.instagram.com/ajk.cas/' target='_blank' className="flex items-center justify-center md:justify-start w-full md:w-auto gap-3 p-2 md:hover:bg-gray-50 md:rounded-lg md:transition-colors md:duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4e73ff] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-outfit font-semibold text-sm sm:text-base leading-[25px] text-[#2a2a2a]">
                  Instagram
                </span>
              </a>
              {/* Facebook */}
              <a href='https://www.facebook.com/ajkcollege' target='_blank' className="flex items-center justify-center md:justify-start w-full md:w-auto gap-3 p-2 md:hover:bg-gray-50 md:rounded-lg md:transition-colors md:duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4e73ff] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-outfit font-semibold text-sm sm:text-base leading-[25px] text-[#2a2a2a]">
                  Facebook
                </span>
              </a>
              {/* LinkedIn */}
              <a href='https://www.linkedin.com/school/ajk-educational-institutions/?originalSubdomain=in' target='_blank' className="flex items-center justify-center md:justify-start w-full md:w-auto gap-3 p-2 md:hover:bg-gray-50 md:rounded-lg md:transition-colors md:duration-200">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#4e73ff] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-outfit font-semibold text-sm sm:text-base leading-[25px] text-[#2a2a2a]">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* General Enquires Section */}
          <div className="bg-white md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none space-y-4 sm:space-y-5">
            <h2 className="font-outfit font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-[#4e73ff] text-center md:text-right">
              General Enquires
            </h2>
            
            {/* Organization Name */}
            <div className="text-center md:text-right">
              <h3 className="font-outfit font-bold text-sm sm:text-base lg:text-lg leading-6 text-[#2a2a2a]">
                AJK Innovation Incubator Foundation (AIIF)
              </h3>
            </div>

            {/* Phone Number */}
            <div className="text-center md:text-right space-y-1 sm:space-y-2">
              <h4 className="font-outfit font-semibold text-sm sm:text-base leading-6 text-[#2a2a2a]">
                Phone Number
              </h4>
              <p className="font-outfit text-sm sm:text-base leading-6 text-[#7e7e7e]">
                +91-6384555533
              </p>
            </div>

            {/* Location */}
            <div className="text-center md:text-right space-y-1 sm:space-y-2">
              <h4 className="font-outfit font-semibold text-sm sm:text-base leading-6 text-[#2a2a2a]">
                Location
              </h4>
              <p className="font-outfit text-sm sm:text-base leading-6 text-[#7e7e7e] max-w-xs md:max-w-none mx-auto md:mx-0">
                AJK College of Arts and Science, Navakkarai, Coimbatore
              </p>
            </div>

            {/* Email Address */}
            <div className="text-center md:text-right space-y-1 sm:space-y-2">
              <h4 className="font-outfit font-semibold text-sm sm:text-base leading-6 text-[#2a2a2a]">
                E-mail Address
              </h4>
              <p className="font-outfit text-sm sm:text-base leading-6 text-[#7e7e7e] break-all md:break-normal">
                aiif@ajkcas.ac.in
              </p>
            </div>

            {/* Website */}
            <div className="text-center md:text-right space-y-1 sm:space-y-2">
              <h4 className="font-outfit font-semibold text-sm sm:text-base leading-6 text-[#2a2a2a]">
                Website
              </h4>
              <p className="font-outfit text-sm sm:text-base leading-6 text-[#7e7e7e] break-all md:break-normal">
                www.ajkcas.ac.in/aiif
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactForm; 