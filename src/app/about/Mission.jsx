"use client"

import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const missionData = [
  {
    id: 1,
    title: "Entrepreneurial Mindset1",
    text: "Enable an entrepreneurial mindset among students and faculty."
  },
  {
    id: 2,
    title: "Entrepreneurial Mindset2",
    text: "Facilitate idea validation and prototyping support."
  },
  {
    id: 3,
    title: "Entrepreneurial Mindset3",
    text: "Bridge startups with investors and industry mentors."
  }
];

const Mission = () => {
  const containerRef = useRef(null);
  const bladeRefs = useRef([]);
  const fanSpinRef = useRef(null);
  const lastActiveIdx = useRef(-1);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;
    const scrollerElement = document.getElementById('main-scroll-area');
    if (!scrollerElement) return;

    // Set all blades to hidden and rotated initially
    bladeRefs.current.forEach((blade) => {
      if (blade) gsap.set(blade, { opacity: 0, rotate: -90, pointerEvents: 'none' });
    });

    // Fan spinning animation (only outer fan)
    if (fanSpinRef.current) {
      gsap.fromTo(
        fanSpinRef.current,
        { rotate: 0 },
        {
          rotate: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: "center 90%",
            end: "center 10%",
            scrub: 1,
            scroller: scrollerElement,
          }
        }
      );
    }

    // Blade stepper logic (fan swing)
    ScrollTrigger.create({
      trigger: container,
      start: "center 90%",
      end: "center 10%",
      scrub: 1,
      scroller: scrollerElement,
      onUpdate: (self) => {
        const progress = self.progress;
        let activeIdx = -1;
        if (progress >= 0.95) {
          activeIdx = 2;
        } else if (progress >= 0.6) {
          activeIdx = 1;
        } else if (progress >= 0.3) {
          activeIdx = 0;
        }
        bladeRefs.current.forEach((blade, idx) => {
          if (!blade) return;
          if (idx === activeIdx) {
            // Swing in
            gsap.to(blade, { opacity: 1, rotate: 0, duration: 0.7, pointerEvents: 'auto', ease: 'power2.out' });
          } else if (lastActiveIdx.current === idx) {
            // Swing out (to +90deg)
            gsap.to(blade, { opacity: 0, rotate: 90, duration: 0.7, pointerEvents: 'none', ease: 'power2.in' });
          } else {
            // Keep hidden and rotated
            gsap.set(blade, { opacity: 0, rotate: -90, pointerEvents: 'none' });
          }
        });
        lastActiveIdx.current = activeIdx;
      },
      onLeaveBack: () => {
        bladeRefs.current.forEach((blade) => {
          if (blade) gsap.set(blade, { opacity: 0, rotate: -90, pointerEvents: 'none' });
        });
        lastActiveIdx.current = -1;
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-fit flex ">
      {/* Large Fan Circle - Left Side (Partially Visible) */}
      <div className="absolute -left-[20%] top-1/2 transform -translate-y-1/2 w-[800px] h-[800px]">
        {/* Spinning Fan */}
        <div ref={fanSpinRef} className="absolute inset-0 border border-slate-40 rounded-full">
          {/* Inner Circles */}
          <div className="absolute inset-9 border-[70px] border-[#ECF0FF] rounded-full"></div>
          <div className="absolute inset-40 border border-slate-400 rounded-full"></div>
          {/* Connection Dot/Line */}
          <div
            className="absolute w-8 h-8 bg-blue-500 rounded-full transition-all duration-500 shadow-lg"
            style={{ top: '50%', right: '-15px' }}
          >
            <div className="absolute top-1/2 left-full w-16 h-0.5 bg-blue-500/50 transform -translate-y-1/2"></div>
          </div>
        </div>
        {/* Static Logo Hub */}
        <div className="absolute top-1/2 left-1/2 z-10 pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }}>
          <div className="w-[140px] h-[140px] bg-gradient-to-br rounded-full flex items-center justify-center">
            <Image src="/logo.png" alt="AJK" width={100} height={100} className="w-full" />
          </div>
        </div>
      </div>
      {/* Text Blades - Right Side */}
      <div className="flex-1 flex flex-col justify-center pl-64 pr-16 py-32">
        <div className="mb-16">
          <h2 className="text-6xl font-bold text-center text-gray-800">Mission</h2>
        </div>
        {/* Fan Blade Swinging Cards */}
        <div className="relative w-full h-80 max-w-2xl">
          {missionData.map((data, idx) => (
            <div
              key={data.id}
              ref={el => bladeRefs.current[idx] = el}
              className="absolute top-1/2 left-[350px] w-[90%] -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-100 origin-left"
              style={{ opacity: 0, pointerEvents: 'none', rotate: '-90deg', transformOrigin: 'left center' }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-1 h-12 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">{data.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{data.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;