"use client"

import LayoutWrapper from "@/Components/Common/LayoutWrapper";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaQuoteLeft } from "react-icons/fa6";
import Mission from "./Mission";
import WhyWeExist from "./WhyWeExist";
import ScrollFan from "./scroll-fan";
import Image from "next/image";
import FinalSection from "./FinalSection";

// Register GSAP with React
gsap.registerPlugin(useGSAP);

function page() {
  // intro
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);

  useGSAP(() => {
    // TV Screen opening animation - curtains sliding apart
    const timeline = gsap.timeline({ delay: 0.5 });
    
    timeline
      .to([leftCurtainRef.current, rightCurtainRef.current], {
        duration: 2,
        ease: "power2.inOut",
      })
      .to(leftCurtainRef.current, {
        x: "-100%",
        duration: 2,
        ease: "power2.inOut",
      }, 0)
      .to(rightCurtainRef.current, {
        x: "100%", 
        duration: 2,
        ease: "power2.inOut",
      }, 0);
  }, []);

  return (
    <>
      <LayoutWrapper>
        <div className="container mx-auto font-outfit mt-[4rem]">

        {/* section 1 */}
          <div className=" grid grid-cols-2 gap-5 ">
            <div className=" flex flex-col justify-start">
            <h1 className=" text-7xl font-semibold">About Us</h1>
            </div>

            <div className=" flex flex-col justify-center items-end gap-[1rem]">
              <h3 className="text-3xl font-bold">Transforming Ideas into Impact</h3>
              <p className=" text-end">At the heart of innovation and entrepreneurship in Tamil Nadu's Tier 2 and Tier 3 ecosystem, the AJK Innovation Incubator Foundation (AIIF) is redefining what’s possible for student-led startups and early-stage founders. Built by AJK College of Arts and Science, AIIF is not just an incubator it’s a launchpad where imagination meets execution.
              </p>

              <p className=" text-end">Whether it’s a ground breaking idea, a college project, or a passion driven prototype we turn potential into progress.</p>
            </div>
          </div>

          {/* section 2 - video */}
          <div className="my-[1.5rem] w-full h-[350px] rounded-[2rem] relative overflow-hidden">
            
            {/* Left curtain */}
            <div 
              ref={leftCurtainRef}
              className="absolute inset-0 w-1/2 h-full bg-white rounded-l-[2rem] z-10" 
            />
            
            {/* Right curtain */}
            <div 
              ref={rightCurtainRef}
              className="absolute inset-0 left-1/2 w-1/2 h-full bg-white rounded-r-[2rem] z-10" 
            />

            <Image
              src="/webp/7379608_32265_updated.webp"
              alt="aboutus"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-[2rem]"
            />

            

            {/* <video 
              className="w-full h-full object-cover rounded-[2rem]"
              // controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              loading="lazy"
            >
              <source src="/video/aboutus.webm" type="video/webm" />
              <source src="/video/aboutus.mp4" type="video/mp4" />
              
              <p className="flex items-center justify-center h-full text-gray-500">
                Your browser doesn't support HTML video. 
                <a href="/video/aboutus.mp4" className="text-blue-500 underline ml-1">
                  Download the video instead.
                </a>
              </p>
            </video> */}

          </div>

                      {/* section 3 - Vision */}
            <div className=" place-content-center place-items-center my-[5rem] space-y-[1rem]">
            <h3 className="text-5xl font-bold">Vision</h3>
              <div className=" w-[50%] relative mt-[2rem]">
              <FaQuoteLeft className=" absolute -top-[1.5rem] -left-[1.5rem] " size={30} />
                <p className=" text-[#00CA40] text-center text-2xl tracking-wide">To be the catalyst for transforming student innovations into scalable startups from Tier-2/3 regions.</p>
                <FaQuoteLeft className=" absolute bottom-0 -right-[1.5rem] transform rotate-180 " size={30} />
              </div>
            </div>


            {/* section 4 - Mission */}
            <div className=" my-[10rem] relative ">
            {/* <Mission /> */}
            
            {/* Mission Text - Completely isolated from scroll effects */}
            <div className="absolute top-[2rem] left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <p className="text-5xl font-bold text-center">Mission</p>
            </div>
            
            <ScrollFan />
            </div>


            <div className=" my-[5rem]">
              <WhyWeExist />
            </div>


            <div>
              {/* <FinalSection /> */}
            </div>
          
        </div>
      </LayoutWrapper> 
    </>
  );
}

export default page;
