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
            const text = "Empowering Ideas, Enabling Futures";
            
            // Clear text
            textElement.textContent = "";
            
            // Simple cursor blink
            gsap.to(cursor, {
                opacity: 0,
                duration: 0.5,
                repeat: -1,
                yoyo: true
            });
            
            // Clean typewriter effect
            gsap.to({}, {
                duration: text.length * 0.08, // Total duration
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
        <div className='container mx-auto font-outfit mt-[4rem]'>

            <div className='flex flex-col items-center justify-center gap-[2rem]'>
            <h1 className='text-6xl font-bold text-center text-[#2A2A2A]'>Programs & Services</h1>

            <h2 className=' text-green-500 text-3xl font-semibold'>Nurturing Innovation from Ideation to Launch</h2>

            <h3 className=' text-xl text-[#2A2A2A] text-center w-[80%] mx-auto font-light'>At AJK Innovation Incubator Foundation (AIIF), we offer a curated suite of programs and services that cater to student innovators, early-stage entrepreneurs, and research-driven founders. Whether you're just forming your idea or preparing to go to market, our structured pathways provide the right environment, resources, and guidance to help your startup succeed.</h3>
            </div>

            {/* cards */}
            <div>
                <HorizontalStackingCards />
            </div>


            <div>
              {/* Standout Section */}
              <StandoutSection />
            </div>


            <div className=' flex flex-col gap-[30px] place-content-center place-items-center mb-[50px]'>

            <p className='text-2xl font-light'>Build Future-Ready Startups with AJK Incubator</p>

            <div className='flex items-baseline justify-center'>
                <p 
                    ref={typewriterRef} 
                    className='text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent'
                    style={{
                        fontFamily: 'inherit',
                        letterSpacing: '0.02em'
                    }}
                >
                </p>
                <span 
                    ref={cursorRef} 
                    className='text-5xl font-bold text-green-500 ml-1 inline-block'
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

            <div className=' flex flex-row gap-[20px]'>
            <button
                    type="submit"
                    className="w-fit px-[30px] py-[5px] bg-transparent text-[#4e73ff] font-outfit font-medium text-[14px] leading-[30px] rounded-md flex items-center justify-center gap-2 border relative overflow-hidden group transition-colors duration-300 cursor-pointer border-[#4e73ff]"
                    >
                    <div className="absolute inset-0 bg-[#4e73ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Join the incubation program
                    </span>
                    </button>
                {/* <button className=' px-[20px] py-[10px] rounded border cursor-pointer '>Sign up</button> */}
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
      className="bg-gray-50 rounded-3xl shadow-xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto my-12"
    >


      {/* Left column */}
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4e73ff] mb-6 leading-tight">
          Startup Clinic
        </h2>
        <p className="text-lg text-gray-500 mb-8">
          The AIIF Startup Clinic is a strategic advisory platform where founders receive tailored guidance to overcome startup challenges.
        </p>
        {/* <span className="bg-white text-gray-800 text-xs font-semibold px-4 py-1 rounded-full mb-4 shadow-sm">
        Clinic Services Include
          </span> */}
        <button className="bg-[#4e73ff] text-white font-semibold px-8 py-3 rounded-lg shadow  transition">
        Clinic Services Include
        </button>

        {/* points */}
        <div className="mt-8">
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
            <li>One-on-one diagnostic sessions to assess startup gaps</li>
            <li>Pitch deck reviews and investor presentation feedback</li>
            <li>Business model evaluation and risk mitigation advice</li>
            <li>Access to a pool of mentors from domains like tech, finance, legal, and marketing</li>
          </ul>
        </div>

        <p className="text-gray-700 text-lg mt-4 italic">This service is especially beneficial for startups preparing for funding, accelerator applications, or market entry.</p>


      </div>


      {/* Right column */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-gray-200 rounded-2xl flex items-center justify-center w-80 h-80">
          {/* Replace below with your SVG or logo */}
          <Image src="/webp/startup.webp" alt="Startup Clinic" width={300} height={300} />
        </div>
      </div>
    </section>
  );
}