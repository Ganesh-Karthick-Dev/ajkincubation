import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const paraRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Container scale/opacity animation
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.96, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
      // Paragraphs animation
      gsap.fromTo(
        paraRefs.current,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-neutral-50"
    >
      <div
        ref={containerRef}
        className="backdrop-blur-lg bg-white/70 rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border border-neutral-200/60"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)' }}
      >
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-extrabold text-neutral-900 text-center mb-8 tracking-tight leading-tight"
          style={{ fontFamily: 'Poppins, Inter, Arial, sans-serif', letterSpacing: '-0.01em' }}
        >
          Your Startup Journey Begins Here
        </h2>
        <p
          ref={el => (paraRefs.current[0] = el)}
          className="text-lg md:text-xl text-neutral-700 text-center mb-4 max-w-xl font-medium"
          style={{ fontFamily: 'Inter, Arial, sans-serif' }}
        >
          Whether you’re refining an idea or ready to build your MVP, AIIF offers the support, resources, and network to turn your vision into a venture.
        </p>
        <p
          ref={el => (paraRefs.current[1] = el)}
          className="text-lg md:text-xl text-neutral-700 text-center max-w-xl font-medium"
          style={{ fontFamily: 'Inter, Arial, sans-serif' }}
        >
          Join the next generation of entrepreneurs. Create change. Build something that matters.
        </p>
      </div>
    </section>
  );
}