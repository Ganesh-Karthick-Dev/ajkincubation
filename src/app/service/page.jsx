"use client";
import LayoutWrapper from '@/Components/Common/LayoutWrapper'
import React, { useRef, useEffect } from 'react'
import HorizontalStackingCards from '@/Components/Common/HorizontalStackingCards'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from 'next/image';

const page = () => {

    const typewriterRef = useRef(null);
    const cursorRef = useRef(null);
    
    useGSAP(() => {
        const textElement = typewriterRef.current;
        const cursor = cursorRef.current;
        
        if (textElement && cursor) {
            // Responsive text based on screen size
            const getResponsiveText = () => {
                if (window.innerWidth < 640) {
                    return "Empowering Ideas";
                } else if (window.innerWidth < 768) {
                    return "Empowering Ideas, Enabling";
                } else {
                    return "Empowering Ideas, Enabling Futures";
                }
            };
            
            const text = getResponsiveText();
            
            // Clear text
            textElement.textContent = "";
            
            // Simple cursor blink
            gsap.to(cursor, {
                opacity: 0,
                duration: 0.5,
                repeat: -1,
                yoyo: true
            });
            
            // Clean typewriter effect with responsive timing
            const typingSpeed = window.innerWidth < 768 ? 0.1 : 0.08;
            gsap.to({}, {
                duration: text.length * typingSpeed,
                ease: "none",
                onUpdate: function() {
                    const progress = this.progress();
                    const currentLength = Math.floor(progress * text.length);
                    textElement.textContent = text.substring(0, currentLength);
                },
                onComplete: () => {
                    // Stop cursor after 2 seconds
                    gsap.to(cursor, {
                        opacity: 0,
                        duration: 0.3,
                        delay: 2
                    });
                }
            });
        }
    }, []);

  return (
    <>
    <LayoutWrapper>
        <div className='container mx-auto font-outfit mt-8 md:mt-16 px-4 sm:px-6 lg:px-8'>

            <div className='flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#2A2A2A] leading-tight'>Programs & Services</h1>

            <h2 className='text-green-500 text-xl sm:text-2xl md:text-3xl font-semibold text-center px-4'>Nurturing Innovation from Ideation to Launch</h2>

            <h3 className='text-base sm:text-lg md:text-xl text-[#2A2A2A] text-center w-full sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto font-light leading-relaxed px-4'>At AJK Innovation Incubator Foundation (AIIF), we offer a curated suite of programs and services that cater to student innovators, early-stage entrepreneurs, and research-driven founders. Whether you're just forming your idea or preparing to go to market, our structured pathways provide the right environment, resources, and guidance to help your startup succeed.</h3>
            </div>

            {/* cards */}
            <div className="w-full my-3 md:my-12 lg:my-16 p-1 md:p-4 rounded-lg">
                <HorizontalStackingCards />
            </div>


            <div className="w-full">
              {/* Standout Section */}
              <StandoutSection />
            </div>


            <div className='flex flex-col gap-6 md:gap-8 lg:gap-12 place-content-center place-items-center mb-12 md:mb-20 px-4'>

            <p className='text-lg sm:text-xl md:text-2xl font-light text-center'>Build Future-Ready Startups with AJK Incubator</p>

            <div className='flex items-baseline justify-center text-center px-4'>
                <p 
                    ref={typewriterRef} 
                    className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent leading-tight'
                    style={{
                        fontFamily: 'inherit',
                        letterSpacing: '0.02em'
                    }}
                >
                </p>
                <span 
                    ref={cursorRef} 
                    className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 ml-1 inline-block'
                    style={{ 
                        lineHeight: '1',
                        fontFamily: 'monospace',
                        fontWeight: '900',
                        textShadow: '0 0 10px rgba(78, 115, 255, 0.5)'
                    }}
                >
                    |
                </span>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center w-full max-w-md mx-auto'>
            <button
                    type="submit"
                    className="w-full sm:w-fit px-6 sm:px-8 py-3 sm:py-2 bg-transparent text-[#4e73ff] font-outfit font-medium text-sm sm:text-base leading-relaxed rounded-md flex items-center justify-center gap-2 border relative overflow-hidden group transition-colors duration-300 cursor-pointer border-[#4e73ff] hover:shadow-lg"
                    >
                    <div className="absolute inset-0 bg-[#4e73ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-center">
                    <span className="hidden sm:inline">Join the incubation program</span>
                    <span className="sm:hidden">Join Program</span>
                    </span>
                    </button>
            </div>

            </div>


            
        </div>
    </LayoutWrapper>
    </>
  )
}

export default page




function StandoutSection() {
  return (
    <section
      className="bg-gray-50 rounded-2xl md:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto my-8 md:my-12 lg:my-16"
    >


      {/* Left column */}
      <div className="flex-1 flex flex-col items-start justify-center w-full lg:max-w-xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#4e73ff] mb-4 sm:mb-6 leading-tight text-center lg:text-left w-full">
          Startup Clinic
        </h2>
        <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 text-center lg:text-left leading-relaxed">
          The AIIF Startup Clinic is a strategic advisory platform where founders receive tailored guidance to overcome startup challenges.
        </p>
        <div className="w-full flex justify-center lg:justify-start">
        <button className="bg-[#4e73ff] text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow transition hover:bg-[#3d5ce6] text-sm sm:text-base">
        Clinic Services Include
        </button>
        </div>

        {/* points */}
        <div className="mt-6 sm:mt-8 w-full">
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base lg:text-lg">
            <li className="leading-relaxed">One-on-one diagnostic sessions to assess startup gaps</li>
            <li className="leading-relaxed">Pitch deck reviews and investor presentation feedback</li>
            <li className="leading-relaxed">Business model evaluation and risk mitigation advice</li>
            <li className="leading-relaxed">Access to a pool of mentors from domains like tech, finance, legal, and marketing</li>
          </ul>
        </div>

        <p className="text-gray-700 text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 italic leading-relaxed text-center lg:text-left">This service is especially beneficial for startups preparing for funding, accelerator applications, or market entry.</p>


      </div>


      {/* Right column */}
      <div className="flex-1 flex items-center justify-center w-full lg:w-auto mt-6 lg:mt-0">
        <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden">
          <Image 
            src="/webp/startup.webp" 
            alt="Startup Clinic" 
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}