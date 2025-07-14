"use client";
import LayoutWrapper from '@/Components/Common/LayoutWrapper'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const CardDesign = ({data}) => {

    
    const cardRef = useRef()
    const textContentRef = useRef()  // For text content
    const imageContentRef = useRef() // For image content
    

    useGSAP(()=> {

        const card = cardRef.current
        const textContent = textContentRef.current
        const imageContent = imageContentRef.current

        if(card && textContent && imageContent){
            
            // Step 1: Set initial states (FORCE default state)
            gsap.set(textContent, { 
                x: 0,        // Text at center
                opacity: 1   // Text visible
            })
            
            gsap.set(imageContent, { 
                x: 200,      // Image off-screen right
                opacity: 0   // Image invisible
            })

            // Step 2: HOVER - Text slides left + fades, Image slides in
            card.addEventListener("mouseenter",()=> {
                
                // KILL all previous animations (prevents conflicts)
                gsap.killTweensOf([textContent, imageContent])
                
                // Animate text content OUT (to left)
                gsap.to(textContent,{
                    x: -200,        // Move left
                    opacity: 0,     // Fade out
                    duration: 0.8,  // Faster for responsiveness
                    ease: "power2.out"
                })

                // Animate image content IN (from right)
                gsap.to(imageContent,{
                    x: 0,           // Move to center
                    opacity: 1,     // Fade in
                    duration: 0.8,  // Faster for responsiveness
                    ease: "power2.out",
                    delay: 0.1      // Smaller delay
                })
            })

            // Step 3: LEAVE - Text slides back, Image slides out
            card.addEventListener("mouseleave",()=> {
                
                // KILL all previous animations (prevents conflicts)
                gsap.killTweensOf([textContent, imageContent])
                
                // FIRST: Hide image immediately (prevent sticking)
                gsap.to(imageContent,{
                    x: 200,         // Move right off-screen
                    opacity: 0,     // Fade out
                    duration: 0.6,  // Even faster for immediate response
                    ease: "power2.out"
                })
                
                // THEN: Show text (ensure text always returns)
                gsap.to(textContent,{
                    x: 0,           // Move back to center
                    opacity: 1,     // Fade in
                    duration: 0.6,  // Faster response
                    ease: "power2.out"
                })
            })
            
            // Step 4: CLEANUP - Force default state on component mount
            const resetToDefault = () => {
                // Kill any running animations first
                gsap.killTweensOf([textContent, imageContent])
                // Force default state
                gsap.set(textContent, { x: 0, opacity: 1 })
                gsap.set(imageContent, { x: 200, opacity: 0 })
            }
            
            // Call reset immediately and on window focus (handles tab switching bugs)
            resetToDefault()
            window.addEventListener('focus', resetToDefault)
            
            // Cleanup on unmount
            return () => {
                window.removeEventListener('focus', resetToDefault)
                resetToDefault()
            }
        }
    })

    return (
        <div ref={cardRef} className=' w-[210px] h-[300px] flex flex-col gap-[10px] relative overflow-hidden'>

            {/* Text Content - Shows by default */}
            <div ref={textContentRef} className="flex flex-col gap-[10px]">
                <p className=' text-2xl font-medium text-[#00CA40]'>{data.title}</p>
                <p className=' text-lg text-[#929292] leading-normal tracking-wide'>{data.description}</p>
            </div>

            {/* Image Content - Hidden initially, shows on hover */}
            <div ref={imageContentRef} className="absolute top-0 left-0 w-full h-full">
                <img 
                    src={data.image} 
                    alt={data.title} 
                    className="w-full h-[240px] object-cover rounded-lg"
                />
            </div>

        </div>
    )
}




const page = () => {

    const containerRef = useRef(null);
    const lightBlueRef = useRef(null);  // New light blue layer
    const cardRef = useRef(null);
    const textRef = useRef(null);
    const shadowRef = useRef(null);
    const circleRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        const lightBlue = lightBlueRef.current;
        const card = cardRef.current;
        const text = textRef.current;
        const shadow = shadowRef.current;
        const circle = circleRef.current;

        if (container && lightBlue && card && text && shadow && circle) {
            // Hover animation - create layered 3D separation
            container.addEventListener('mouseenter', () => {
                // Tilt the entire container
                gsap.to(container, {
                    duration: 0.8,
                    rotationX: 15,
                    rotationY: -20,
                    ease: "power2.out"
                });

                // Layer 0: Light Blue div (deepest layer - only visible on hover)
                gsap.to(lightBlue, {
                    duration: 0.8,
                    z: -150,
                    rotationX: 3,
                    rotationY: -3,
                    opacity: 0.8,
                    ease: "power2.out"
                });

                // Layer 1: Blue div (bottom layer)
                gsap.to(card, {
                    duration: 0.8,
                    z: -40,
                    rotationX: 5,
                    rotationY: -5,
                    ease: "power2.out"
                });

                // Layer 2: Text shadow (middle layer)
                gsap.to(shadow, {
                    duration: 0.8,
                    z: -20,
                    y: 8,
                    x: 8,
                    rotationX: 3,
                    rotationY: -3,
                    opacity: 0.6,
                    ease: "power2.out"
                });

                // Layer 3: Black circle (between shadow and text, behind upTN only)
                gsap.to(circle, {
                    duration: 0.8,
                    z: -10,
                    y: -3,
                    rotationX: 6,
                    rotationY: -6,
                    scale: 1.1,
                    ease: "back.out(1.7)"
                });

                // Layer 4: Main text (top layer)
                gsap.to(text, {
                    duration: 0.8,
                    z: 30,
                    y: -15,
                    rotationX: 10,
                    rotationY: -10,
                    ease: "power2.out"
                });
            });

            // Mouse leave animation - return all layers to normal
            container.addEventListener('mouseleave', () => {
                gsap.to(container, {
                    duration: 0.6,
                    rotationX: 0,
                    rotationY: 0,
                    ease: "power2.out"
                });

                gsap.to([card, text, shadow, circle], {
                    duration: 0.6,
                    z: 0,
                    y: 0,
                    x: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    opacity: 1,
                    ease: "power2.out"
                });

                // Light blue layer fades out completely
                gsap.to(lightBlue, {
                    duration: 0.6,
                    z: 0,
                    rotationX: 0,
                    rotationY: 0,
                    opacity: 0,  // Hide it again
                    ease: "power2.out"
                });
            });
        }
    }, []);

    const staticData = [
        {
            id : 1,
            title: "Catalyst Platform",
            description: "Get featured on StartupTN’s Catalyst platform—a gateway to networking, investor visibility, and statewide startup events and challenges.",
            image: "/webp/project_planning.webp"
        },
        {
            id : 2,
            title: "MentorTN",
            description: "Connect with a diverse pool of mentors from academia, industry, and entrepreneurship through the MentorTN network to guide your startup’s growth.",
            image: "/webp/project_planning.webp"
        },
        {
            id : 3,
            title: "StartupTN",
            description: "Leverage Tamil Nadu’s official startup platform to apply for government grants, explore market opportunities, and showcase your venture.",
            image: "/webp/project_planning.webp"
        },
        {
            id : 4,
            title: "Coordination programs",
            description: "AJK AIIF facilitates coordination with state-run startup missions, organizing pitch days, demo days, and capacity-building programs aligned with StartupTN’s vision.",
            image: "/webp/project_planning.webp"
        }
            
    ]



  return (
    <>
    <LayoutWrapper>

        <div className=' grid grid-cols-12  font-outfit container mx-auto px-[100px] my-[100px] space-y-[20px]'>

         {/* left side */}
            <div className=' col-span-3 space-x-[20px] space-y-[20px]'>

            <CardDesign data={staticData[0]} />

            <CardDesign data={staticData[1]} />


            </div>
           
            <div className=' col-span-3 space-x-[20px] space-y-[20px]'>

            <CardDesign data={staticData[2]} />

            <CardDesign data={staticData[3]} />

            </div>



        {/* right side */}  
            <div className=' col-span-6 '>

                <div 
                    ref={containerRef}
                    className='relative cursor-pointer px-[30px] py-[80px]'
                    style={{ 
                        perspective: '1200px', 
                        transformStyle: 'preserve-3d',
                        minHeight: '320px'
                    }}
                >
                    {/* Layer 0: Light Blue Card Background (Deepest Layer - Hidden initially) */}
                    <div 
                        ref={lightBlueRef}
                        className='absolute inset-0 rounded-2xl'
                        style={{
                            background: 'linear-gradient(135deg, #87CEEB, #87CEFA)',
                            transformStyle: 'preserve-3d',
                            transformOrigin: 'center center',
                            zIndex: 0,
                            opacity: 0  // Hidden initially
                        }}
                    >
                    </div>

                    {/* Layer 1: Blue Card Background (Bottom Layer) */}
                    <div 
                        ref={cardRef}
                        className='bg-[#4E73FF] absolute inset-0 rounded-2xl'
                        style={{
                            transformStyle: 'preserve-3d',
                            transformOrigin: 'center center',
                            zIndex: 1
                        }}
                    >
                    </div>

                    {/* Layer 2: Text Shadow (Middle Layer) */}
                    <div 
                        ref={shadowRef}
                        className='absolute inset-0 px-[30px] py-[80px] text-6xl font-semibold leading-normal text-slate-700 pointer-events-none'
                        style={{
                            transformStyle: 'preserve-3d',
                            transformOrigin: 'center center',
                            opacity: 0.4,
                            zIndex: 2
                        }}
                    >
                        AIIF + StartupTN Connect&nbsp;&nbsp;&nbsp;
                    </div>

                    {/* Layer 3: Black Circle (Between shadow and text, behind upTN only) */}
                    <div 
                        ref={circleRef}
                        className='w-[120px] h-[120px] bg-black rounded-full absolute pointer-events-none'
                        style={{
                            top: 'calc(28% - 15px)',
                            left: 'calc(45% + 85px)',
                            transformStyle: 'preserve-3d',
                            transformOrigin: 'center center',
                            zIndex: 3
                        }}
                    >
                    </div>

                    {/* Layer 4: Main Text (Top Layer) */}
                    <div 
                        ref={textRef}
                        className='absolute inset-0 px-[30px] py-[80px] text-6xl text-white font-semibold leading-normal pointer-events-none'
                        style={{
                            transformStyle: 'preserve-3d',
                            transformOrigin: 'center center',
                            zIndex: 4
                        }}
                    >
                        AIIF + StartupTN Connect&nbsp;&nbsp;&nbsp;
                    </div>
                    
                </div>

                <div className=' mt-[80px] flex flex-col gap-[20px]'>
                    <p className=' text-[#4e73ff] text-3xl font-semibold'>State Ecosystem Integration</p>

                    <p className='  text-xl font-light'>Start your innovation journey with AJK AIIF. Join a vibrant ecosystem of thinkers, makers, and doers.</p>

                    <button
                    type="submit"
                    className="w-fit px-[30px] py-[5px] bg-transparent text-[#4e73ff] font-outfit font-medium text-[14px] leading-[30px] rounded-md flex items-center justify-center gap-2 border relative overflow-hidden group transition-colors duration-300 cursor-pointer border-[#4e73ff]"
                    >
                    <div className="absolute inset-0 bg-[#4e73ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        Register Now
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