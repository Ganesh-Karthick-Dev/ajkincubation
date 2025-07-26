"use client";
import LayoutWrapper from '@/Components/Common/LayoutWrapper'
import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import RoboSection from './RoboSection';


const CardDesign = ({ data }) => {
    return (
        <div className='w-full md:max-w-[310px] h-[150px] sm:h-[300px] flex flex-col gap-2 sm:gap-[10px] p-2 sm:p-0 '>
            <p className='text-lg sm:text-xl lg:text-2xl font-medium text-[#00CA40] leading-tight'>{data.title}</p>
            <p className='text-sm sm:text-base lg:text-lg text-[#929292] leading-normal tracking-wide'>{data.description}</p>
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
    const diceTextRef = useRef(null);
    const diceShadowRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        const lightBlue = lightBlueRef.current;
        const card = cardRef.current;
        const text = textRef.current;
        const shadow = shadowRef.current;
        const circle = circleRef.current;
        const diceText = diceTextRef.current;
        const diceShadow = diceShadowRef.current;

                // Check if device supports hover (not touch-only)
        const supportsHover = window.matchMedia('(hover: hover)').matches;
        
        // Get screen size for responsive animations
        const isMobile = window.innerWidth < 768; // md breakpoint
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

        if (container && lightBlue && card && text && shadow && circle && diceText && diceShadow) {
            // Only add complex 3D animations on devices that support hover
            if (supportsHover && !isMobile) {
                // Hover animation - create layered 3D separation
                container.addEventListener('mouseenter', () => {
                    // Adjust animation intensity based on screen size
                    const intensity = isTablet ? 0.6 : 1;

                    // Tilt the entire container
                    gsap.to(container, {
                        duration: 0.8,
                        rotationX: 15 * intensity,
                        rotationY: -20 * intensity,
                        ease: "power2.out"
                    });

                    // Layer 0: Light Blue div (deepest layer - only visible on hover)
                    gsap.to(lightBlue, {
                        duration: 0.8,
                        z: -150 * intensity,
                        rotationX: 3 * intensity,
                        rotationY: -3 * intensity,
                        opacity: 0.8,
                        ease: "power2.out"
                    });

                    // Layer 1: Blue div (bottom layer)
                    gsap.to(card, {
                        duration: 0.8,
                        z: -40 * intensity,
                        rotationX: 5 * intensity,
                        rotationY: -5 * intensity,
                        ease: "power2.out"
                    });

                    // Layer 2: Text shadow (middle layer)
                    gsap.to(shadow, {
                        duration: 0.8,
                        z: -20 * intensity,
                        y: 8 * intensity,
                        x: 8 * intensity,
                        rotationX: 3 * intensity,
                        rotationY: -3 * intensity,
                        opacity: 0.6,
                        ease: "power2.out"
                    });

                    // Layer 3: Black circle (between shadow and text, behind upTN only)
                    gsap.to(circle, {
                        duration: 0.8,
                        z: -10 * intensity,
                        y: -3 * intensity,
                        rotationX: 6 * intensity,
                        rotationY: -6 * intensity,
                        scale: 1.05 + (0.05 * intensity),
                        ease: "back.out(1.7)"
                    });

                    // Layer 4: Main text (top layer)
                    gsap.to(text, {
                        duration: 0.8,
                        z: 30 * intensity,
                        y: -15 * intensity,
                        rotationX: 10 * intensity,
                        rotationY: -10 * intensity,
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
            } else {
                // For touch devices, add a simple tap animation
                container.addEventListener('touchstart', () => {
                    gsap.to(container, {
                        duration: 0.2,
                        scale: 0.98,
                        ease: "power2.out"
                    });
                });

                container.addEventListener('touchend', () => {
                    gsap.to(container, {
                        duration: 0.3,
                        scale: 1,
                        ease: "back.out(1.7)"
                    });
                });
            }

            // Dice roll reveal animation
            const diceTexts = ["StartupTN", "Test 2", "Test 3", "Test 4"];
            let currentIndex = 0;

            const rollReveal = () => {
                // Move current text up and out
                gsap.to([diceText, diceShadow], {
                    duration: 0.5,
                    y: -50,
                    opacity: 0,
                    ease: "power2.inOut",
                    onComplete: () => {
                        // Update text content for both main text and shadow
                        currentIndex = (currentIndex + 1) % diceTexts.length;
                        diceText.textContent = diceTexts[currentIndex];
                        diceShadow.textContent = diceTexts[currentIndex];
                        
                        // Reset position to below (hidden)
                        gsap.set([diceText, diceShadow], { y: 50, opacity: 0 });
                        
                        // Slide new text up from below
                        gsap.to([diceText, diceShadow], {
                            duration: 0.5,
                            y: 0,
                            opacity: 1,
                            ease: "power2.out"
                        });
                    }
                });
            };

            // Roll reveal every 1 second
            const rollInterval = setInterval(rollReveal, 2000);

            // Cleanup interval on component unmount
            return () => clearInterval(rollInterval);
        }
    }, []);

    const staticData = [
        {
            id: 1,
            title: "Catalyst Platform",
            description: "Get featured on StartupTN’s Catalyst platform—a gateway to networking, investor visibility, and statewide startup events and challenges.",
            image: "/webp/project_planning.webp"
        },
        {
            id: 2,
            title: "MentorTN",
            description: "Connect with a diverse pool of mentors from academia, industry, and entrepreneurship through the MentorTN network to guide your startup’s growth.",
            image: "/webp/project_planning.webp"
        },
        {
            id: 3,
            title: "StartupTN",
            description: "Leverage Tamil Nadu’s official startup platform to apply for government grants, explore market opportunities, and showcase your venture.",
            image: "/webp/project_planning.webp"
        },
        {
            id: 4,
            title: "Coordination programs",
            description: "AJK AIIF facilitates coordination with state-run startup missions, organizing pitch days, demo days, and capacity-building programs aligned with StartupTN’s vision.",
            image: "/webp/project_planning.webp"
        }

    ]



    return (
        <>
            <LayoutWrapper>

                <div className='font-outfit container mx-auto px-4 sm:px-6 lg:px-8 xl:px-[100px] my-8 sm:my-12 lg:my-[100px]'>

                    <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8'>

                        {/* Cards Section - Mobile: Stack vertically, Large: Left side */}
                        <div className='lg:col-span-6 order-2 lg:order-1'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-1 sm:gap-6'>

                                <div className='space-y-4 sm:space-y-6'>
                                    <CardDesign data={staticData[0]} />
                                    <CardDesign data={staticData[1]} />
                                </div>

                                <div className='space-y-4 sm:space-y-6'>
                                    <CardDesign data={staticData[2]} />
                                    <CardDesign data={staticData[3]} />
                                </div>

                            </div>
                        </div>

                        {/* Main Content Section - Mobile: Top, Large: Right side */}
                        <div className='lg:col-span-6 order-1 lg:order-2'>

                            <div
                                ref={containerRef}
                                className='relative cursor-pointer px-4 sm:px-6 lg:px-[30px] py-8 sm:py-12 lg:py-[80px] min-h-[140px] sm:min-h-[280px] lg:min-h-[340px]'
                                style={{
                                    perspective: '1200px',
                                    transformStyle: 'preserve-3d'
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
                                    className='absolute inset-0 px-4 sm:px-6 lg:px-[30px] py-8 sm:py-12 lg:py-[80px] text-2xl sm:text-4xl lg:text-6xl font-semibold leading-tight lg:leading-normal text-slate-700 pointer-events-none'
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transformOrigin: 'center center',
                                        opacity: 0.4,
                                        zIndex: 2
                                    }}
                                >
                                    <div className="block">AIIF + <span ref={diceShadowRef} style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}>StartupTN</span></div>
                                    <div className="block">Connect</div>
                                </div>

                                {/* Layer 3: Black Circle (Between shadow and text, behind upTN only) */}
                                <div
                                    ref={circleRef}
                                    className='w-16 h-16 sm:w-20 sm:h-20 lg:w-[120px] lg:h-[120px] bg-black rounded-full absolute pointer-events-none hidden sm:block'
                                    style={{
                                        top: 'calc(28% - 8px)',
                                        left: 'calc(50% + 20px)',
                                        transformStyle: 'preserve-3d',
                                        transformOrigin: 'center center',
                                        zIndex: 3
                                    }}
                                >
                                </div>

                                {/* Layer 4: Main Text (Top Layer) */}
                                <div
                                    ref={textRef}
                                    className='absolute inset-0 px-4 sm:px-6 lg:px-[30px] py-8 sm:py-12 lg:py-[80px] text-2xl sm:text-4xl lg:text-6xl text-white font-semibold leading-tight lg:leading-normal pointer-events-none'
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transformOrigin: 'center center',
                                        zIndex: 4
                                    }}
                                >
                                    <div className="block">AIIF + <span ref={diceTextRef} style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}>StartupTN</span></div>
                                    <div className="block">Connect</div>
                                </div>

                            </div>

                            <div className='mt-8 sm:mt-12 lg:mt-[80px] flex flex-col gap-4 sm:gap-6 lg:gap-[20px]'>
                                <p className='text-[#4e73ff] text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight'>State Ecosystem Integration</p>

                                <p className='text-base sm:text-lg lg:text-xl font-light leading-relaxed'>Start your innovation journey with AJK AIIF. Join a vibrant ecosystem of thinkers, makers, and doers.</p>

                                <button
                                    type="submit"
                                    className="w-fit px-6 sm:px-8 lg:px-[30px] py-2 sm:py-3 lg:py-[5px] bg-transparent text-[#4e73ff] font-outfit font-medium text-sm sm:text-base lg:text-[14px] leading-[30px] rounded-md flex items-center justify-center gap-2 border relative overflow-hidden group transition-colors duration-300 cursor-pointer border-[#4e73ff] hover:scale-105 transform transition-transform"
                                >
                                    <div className="absolute inset-0 bg-[#4e73ff] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                        Register Now
                                    </span>
                                </button>

                            </div>

                        </div>



                    </div>


                    <div >

                        <RoboSection />
                    </div>

                </div>

            </LayoutWrapper>
        </>
    )
}

export default page