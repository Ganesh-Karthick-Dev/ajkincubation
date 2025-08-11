'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { BsThreads } from "react-icons/bs";
import { FiShare, FiX } from "react-icons/fi";
import { Dialog } from '@headlessui/react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  // Modal state management
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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
    <>
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
      
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
        <div className="order-1 md:order-2 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          
          {/* Social Media Section */}
          <div className="flex flex-col items-end gap-3 w-full max-w-[374px]">
            <h2 className="font-outfit font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[53px] text-[#4E73FF] text-right w-full">
              Social media
            </h2>
            
            <div className="flex flex-col gap-6 w-full max-w-[370px]">
              {/* Instagram */}
              <button 
                onClick={() => openModal('instagram')}
                className="flex items-center justify-between px-3 py-[10px] w-full h-[45px] rounded-md border-[3px] border-[#FFCDDD] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #FEDA75 45.67%, #FA7E1E 62.02%, #D62976 74.52%, #962FBF 87.98%, #4F5BD5 100%)'
                }}
              >
                {/* Logo space - user will add logo here */}
                <div className="w-[82.89px] h-[22.2px] rounded flex items-center justify-center text-xs text-gray-500">
                  <Image src="/logo.png" alt="facebook" width={82.89} height={22.2} />
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="font-outfit font-semibold text-[15px] leading-[25px] text-white">
                    Instagram
                  </span>
                  <svg className="w-[15px] h-[15px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.42-1.41L16.17 13H4v-2z"/>
                  </svg>
                </div>
              </button>

              {/* Facebook */}
              <button 
                onClick={() => openModal('facebook')}
                className="flex items-center justify-between px-3 py-[10px] w-full h-[45px] rounded-md border-[3px] border-[rgba(78,115,255,0.32)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #4E73FF 100%)'
                }}
              >
                {/* Logo space - user will add logo here */}
                <div className="w-[82.89px] h-[22.2px] rounded flex items-center justify-center text-xs text-gray-500">
                  <Image src="/logo.png" alt="facebook" width={82.89} height={22.2} />
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-outfit font-semibold text-[15px] leading-[25px] text-white">
                    Facebook
                  </span>
                  <svg className="w-[15px] h-[15px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.42-1.41L16.17 13H4v-2z"/>
                  </svg>
                </div>
              </button>

              {/* Thread */}
              <button 
                onClick={() => openModal('thread')}
                className="flex items-center justify-between px-3 py-[10px] w-full h-[45px] rounded-md border-[3px] border-[rgba(0,0,0,0.19)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #000000 100%)'
                }}
              >
                {/* Logo space - user will add logo here */}
                <div className="w-[82.89px] h-[22.2px] rounded flex items-center justify-center text-xs text-gray-500">
                  <Image src="/logo.png" alt="facebook" width={82.89} height={22.2} />
                </div>
                
                <div className="flex items-center gap-3">
                <BsThreads className='text-white text-[23px]' />
                  <span className="font-outfit font-semibold text-[15px] leading-[25px] text-white">
                    Thread
                  </span>
                  <svg className="w-[15px] h-[15px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.42-1.41L16.17 13H4v-2z"/>
                  </svg>
                </div>
              </button>

              {/* WhatsApp */}
              <button 
                onClick={() => openModal('whatsapp')}
                className="flex items-center justify-between px-3 py-[10px] w-full h-[45px] rounded-md border-[3px] border-[rgba(5,186,26,0.32)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #59C16C 65.2%, #00A11D 100%)'
                }}
              >
                {/* Logo space - user will add logo here */}
                <div className="w-[82.89px] h-[22.2px] rounded flex items-center justify-center text-xs text-gray-500">
                      <Image src="/logo.png" alt="facebook" width={82.89} height={22.2} />
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
                  </svg>
                    <span className="font-outfit font-semibold text-[15px] leading-[25px] text-white">
                    WhatsApp
                  </span>
                  <svg className="w-[15px] h-[15px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.42-1.41L16.17 13H4v-2z"/>
                  </svg>
                </div>
              </button>

              {/* WhatsApp Channel */}
              <button 
                onClick={() => openModal('whatsappChannel')}
                className="flex items-center justify-between px-3 py-[10px] w-full h-[45px] rounded-md border-[3px] border-[rgba(5,186,26,0.32)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #FFFFFF 0%, #59C16C 65.2%, #00A11D 100%)'
                }}
              >
                {/* Logo space - user will add logo here */}
                <div className="w-[82.89px] h-[22.2px] rounded flex items-center justify-center text-xs text-gray-500">
                  <Image src="/logo.png" alt="facebook" width={82.89} height={22.2} />
                </div>
                
                <div className="flex items-center gap-3">
                <Image src="/log_images/iconsax-instagram.png" alt="facebook" width={23} height={23} className='w-[25px] h-[25px]' quality={100}/>
                  <span className="font-outfit font-semibold text-[15px] leading-[25px] text-white">
                    WhatsApp Channel
                  </span>
                  <svg className="w-[15px] h-[15px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.42-1.41L16.17 13H4v-2z"/>
                  </svg>
                </div>
              </button>
            </div>
            
          </div>

          {/* General Enquires Section */}
          <div className="bg-white md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0 shadow-sm md:shadow-none space-y-4 sm:space-y-5">
            <h2 className="font-outfit font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-[#4e73ff] text-left md:text-right">
              General Enquires
            </h2>
            
            {/* Organization Name */}
            <div className="text-left md:text-right">
              <h3 className="font-outfit font-bold text-sm sm:text-base lg:text-lg leading-6 text-[#2a2a2a]">
                AJK Innovation Incubator Foundation (AIIF)
              </h3>
            </div>

            {/* Phone Number */}
            <div className="text-left md:text-right space-y-1 sm:space-y-2">
              <h4 className="font-outfit font-semibold text-sm sm:text-base leading-6 text-[#2a2a2a]">
                Phone Number
              </h4>
              <p className="font-outfit text-sm sm:text-base leading-6 text-[#7e7e7e]">
                +91-8925889316
              </p>
            </div>

            {/* Location */}
            <div className="text-left md:text-right space-y-1 sm:space-y-2">
              <h4 className="font-outfit font-semibold text-sm sm:text-base leading-6 text-[#2a2a2a]">
                Location
              </h4>
              <p className="font-outfit text-sm sm:text-base leading-6 text-[#7e7e7e] max-w-xs md:max-w-none mx-0 md:mx-0">
                AJK College of Arts and Science, Navakkarai, Coimbatore
              </p>
            </div>

            {/* Email Address */}
            <div className="text-left md:text-right space-y-1 sm:space-y-2">
              <h4 className="font-outfit font-semibold text-sm sm:text-base leading-6 text-[#2a2a2a]">
                E-mail Address
              </h4>
              <p className="font-outfit text-sm sm:text-base leading-6 text-[#7e7e7e] break-all md:break-normal">
                aiif@ajkcas.ac.in
              </p>
            </div>

            {/* Website */}
            <div className="text-left md:text-right space-y-1 sm:space-y-2">
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

            {/* Dynamic Modal using Headless UI */}
              <Dialog open={!!activeModal} onClose={closeModal} className="relative z-50">
          {/* Backdrop with subtle blur */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-md" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4 ">
          {/* The actual dialog panel */}
          <div className="bg-white rounded-lg w-full max-w-md mx-auto overflow-hidden  border">
            
            {/* Dynamic Header */}
            <div className="flex items-center justify-between p-4 mb-[10px]">
              <FiShare className="w-5 h-5 text-gray-600" />
              <h3 className="font-bold text-xl">
                {activeModal === 'instagram' && 'Instagram'}
                {activeModal === 'facebook' && 'Facebook'}
                {activeModal === 'thread' && 'Thread'}
                {activeModal === 'whatsapp' && 'WhatsApp Contact'}
                {activeModal === 'whatsappChannel' && 'Whatsapp Channel'}
              </h3>
              <button onClick={closeModal} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <FiX className="w-5 h-5 text-gray-600" />
              </button>
            </div>

           
            
            {/* Fixed height scrollable images */}
            <div className="h-80 overflow-y-auto p-4 scrollbar-hide">
              {activeModal === 'instagram' && (
                <div className="space-y-4">
                  <Image src="/webp/contact/Rectangle 41988.webp" alt="Image 1" width={400} height={200} className="w-full rounded" />
                  <Image src="/webp/contact/Rectangle 41989.webp" alt="Image 2" width={400} height={200} className="w-full rounded" />
                  <Image src="/webp/contact/Rectangle 41991.webp" alt="Image 3" width={400} height={200} className="w-full rounded" />
                </div>
              )}

              {activeModal === 'facebook' && (
                <div className="space-y-4">
                  <Image src="/webp/contact/Rectangle 41988.webp" alt="Image 1" width={400} height={200} className="w-full rounded" />
                  <Image src="/webp/contact/Rectangle 41989.webp" alt="Image 2" width={400} height={200} className="w-full rounded" />
                  <Image src="/webp/contact/Rectangle 41991.webp" alt="Image 3" width={400} height={200} className="w-full rounded" />
                </div>
              )}

              {activeModal === 'thread' && (
                <div className="space-y-4">
                  <Image src="/webp/contact/Rectangle 41988.webp" alt="Image 1" width={400} height={200} className="w-full rounded" />
                  <Image src="/webp/contact/Rectangle 41989.webp" alt="Image 2" width={400} height={200} className="w-full rounded" />
                  <Image src="/webp/contact/Rectangle 41991.webp" alt="Image 3" width={400} height={200} className="w-full rounded" />
                </div>
              )}

              {/* WhatsApp Contact Content */}
              {activeModal === 'whatsapp' && (
                <div className="text-center place-content-center place-items-center h-full">
                  <p className="text-2xl font-bold text-gray-800">+91-8925889316</p>
                </div>
              )}

              {activeModal === 'whatsappChannel' && (
                <div className="text-center place-content-center place-items-center h-full mb-[10px]">
                  <p className="text-lg font-medium text-gray-800">Subscribe to Stay updated</p>
                </div>
              )}
            </div>

            {/* Subscribe Text (outside scrollable area) */}
            {(activeModal === 'instagram' || activeModal === 'facebook' || activeModal === 'thread') && (
              <div className="px-4 py-3 text-start md:my-[20px]">
                <p className="text-gray-800 font-bold text-xl">Subscribe to Stay updated</p>
              </div>
            )}

            {/* Dynamic Footer */}
            <div className="p-4 border-t">
              <button 
                onClick={() => {
                  if (activeModal === 'instagram') window.open('https://www.instagram.com/ajk.cas/', '_blank');
                  if (activeModal === 'facebook') window.open('https://www.facebook.com/ajkcollege', '_blank');
                  if (activeModal === 'whatsapp') window.open('tel:+916384555533', '_self');
                }}
                className={`w-full py-3 rounded-full font-medium transition-colors ${
                  activeModal === 'whatsappChannel' 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-black hover:bg-gray-800 text-white'
                }`}
              >
                {activeModal === 'instagram' && 'Follow on Instagram'}
                {activeModal === 'facebook' && 'Follow on Facebook'}
                {activeModal === 'thread' && 'Follow on Thread'}
                {activeModal === 'whatsapp' && 'chat with us'}
                {activeModal === 'whatsappChannel' && 'Click to Join'}
              </button>
            </div>

          </div>
        </div>
      </Dialog>
    </div>
    </>
  );
};

export default ContactForm; 