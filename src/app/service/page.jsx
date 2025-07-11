"use client";
import LayoutWrapper from '@/Components/Common/LayoutWrapper'
import React, { useRef, useEffect } from 'react'
import HorizontalStackingCards from '@/Components/Common/HorizontalStackingCards'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

            <h2 className=' text-green-500 text-3xl font-semibold'>Incubation Program</h2>

            <h3 className=' text-xl text-[#2A2A2A] font-light'>AIIF offers a pre-incubation and full incubation pathway with</h3>
            </div>

            {/* cards */}
            <div>
                <HorizontalStackingCards />
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