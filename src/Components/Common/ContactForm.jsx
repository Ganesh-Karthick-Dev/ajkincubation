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
    <div className="max-w-[1679px] mx-auto bg-transparent">
      <div className=" grid grid-cols-2 gap-8">

        {/* Form Section - Left Side */}
        <div className="">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Form Fields */}
            <div className="space-y-3">
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
                    className="w-full h-[38px] px-4 py-3 font-outfit text-sm leading-6 text-[#667085] bg-white border border-[#d0d5dd] rounded-lg focus:outline-none focus:border-[#4e73ff] focus:ring-1 focus:ring-[#4e73ff]"
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
                    className="w-full h-[38px] px-4 py-3 font-outfit text-sm leading-6 text-[#667085] bg-white border border-[#d0d5dd] rounded-lg focus:outline-none focus:border-[#4e73ff] focus:ring-1 focus:ring-[#4e73ff]"
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
                    className="w-full h-[38px] px-4 py-3 font-outfit text-sm leading-6 text-[#667085] bg-white border border-[#d0d5dd] rounded-lg focus:outline-none focus:border-[#4e73ff] focus:ring-1 focus:ring-[#4e73ff]"
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
                    rows={6}
                    className="w-full h-[100px] px-4 py-3 font-inter text-sm leading-6 text-[#667085] bg-white border border-[#d0d5dd] rounded-lg resize-none focus:outline-none focus:border-[#4e73ff] focus:ring-1 focus:ring-[#4e73ff]"
                  />
                </div>
             
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[50px] bg-transparent text-black font-outfit font-medium text-[24px] leading-[30px] rounded-md flex items-center justify-center gap-2 border relative overflow-hidden group transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-[#4e73ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Register Now
              </span>
            </button>
          </form>
        </div>

        {/* Contact Information Section - Right Side */}
        <div className=" grid grid-cols-2 gap-2">
          {/* Social Media Section */}
          <div className="space-y-6">
            <h2 className="font-outfit font-semibold text-3xl leading-[53px] text-[#4e73ff] text-right">
              Social media
            </h2>
            <div className="space-y-6 flex flex-col items-end">
              {/* Instagram */}
              <a href='https://www.instagram.com/ajk.cas/' target='_blank' className="flex items-center justify-start w-[7rem] gap-[1rem]">
                <svg className="w-6 h-6 text-[#4e73ff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-outfit font-semibold text-md leading-[25px] text-[#2a2a2a]">
                  Instagram
                </span>
              </a>
              {/* Facebook */}
              <a href='https://www.facebook.com/ajkcollege' target='_blank' className="flex items-center justify-start w-[7rem] gap-[1rem]">
                <svg className="w-6 h-6 text-[#4e73ff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="font-outfit font-semibold text-md leading-[25px] text-[#2a2a2a]">
                  Facebook
                </span>
              </a>
              {/* Twitter */}
              <a href='https://www.linkedin.com/school/ajk-educational-institutions/?originalSubdomain=in' target='_blank' className="flex items-center justify-start w-[7rem] gap-[1rem]">
                <svg className="w-6 h-6 text-[#4e73ff]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                <span className="font-outfit font-semibold text-md leading-[25px] text-[#2a2a2a]">
                  Twitter
                </span>
              </a>
            </div>
          </div>

          {/* General Enquires Section */}
          <div className="space-y-4">
            <h2 className="font-outfit font-semibold text-3xl leading-[53px] text-[#4e73ff] text-right">
              General Enquires
            </h2>
            
            {/* Organization Name */}
            <div className="text-right">
              <h3 className="font-outfit font-bold text-md leading-[25px] text-[#2a2a2a]">
                AJK Innovation Incubator Foundation (AIIF)
              </h3>
            </div>

            {/* Phone Number */}
            <div className="text-right space-y-2">
              <h4 className="font-outfit font-semibold text-md leading-[25px] text-[#2a2a2a]">
                Phone Number
              </h4>
              <p className="font-outfit text-md leading-[25px] text-[#7e7e7e]">
                +91-6384555533
              </p>
            </div>

            {/* Location */}
            <div className="text-right space-y-2">
              <h4 className="font-outfit font-semibold text-md leading-[25px] text-[#2a2a2a]">
                Location
              </h4>
              <p className="font-outfit text-md leading-[25px] text-[#7e7e7e]">
                AJK College of Arts and Science, Navakkarai, Coimbatore
              </p>
            </div>

            {/* Email Address */}
            <div className="text-right space-y-2">
              <h4 className="font-outfit font-semibold text-md leading-[25px] text-[#2a2a2a]">
                E-mail Address
              </h4>
              <p className="font-outfit text-md leading-[25px] text-[#7e7e7e]">
                aiif@ajkcas.ac.in
              </p>
            </div>

            {/* Website */}
            <div className="text-right space-y-2">
              <h4 className="font-outfit font-semibold text-md leading-[25px] text-[#2a2a2a]">
                Website
              </h4>
              <p className="font-outfit text-md leading-[25px] text-[#7e7e7e]">
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