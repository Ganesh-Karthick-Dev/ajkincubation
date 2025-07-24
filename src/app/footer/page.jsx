'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import gsap from 'gsap';
import { RxArrowTopRight } from 'react-icons/rx';

const Footer = () => {
  const footerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'Programs & Services', href: '/service' },
    { name: 'Startups TN', href: '/startups' },
    { name: 'Resource', href: '/resource' },
    { name: 'Contact us', href: '/contact' }
  ];

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Add hover effects to navigation links
    const navLinks = footer.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      // Create circular background element
      const circle = document.createElement('div');
      circle.className = 'nav-circle absolute rounded-full bg-white opacity-0 pointer-events-none';
      circle.style.cssText = `
        width: 0px;
        height: 0px;
        transform: translate(-50%, -50%);
        z-index: -1;
        filter: blur(1px);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
      `;
      
      // Make link container relative
      link.style.position = 'relative';
      link.appendChild(circle);

      // Mouse enter animation
      const handleMouseEnter = (e) => {
        // Kill any ongoing animations
        gsap.killTweensOf(circle);
        
        // Get link bounds for relative positioning
        const linkRect = link.getBoundingClientRect();
        const x = e.clientX - linkRect.left;
        const y = e.clientY - linkRect.top;
        
        // Position circle at mouse position
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        
        // Calculate circle size - larger
        const circleSize = 100;
        
        // Simple smooth expansion
        gsap.to(circle, {
          width: circleSize,
          height: circleSize,
          opacity: 0.6,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      // Mouse move animation - follow cursor
      const handleMouseMove = (e) => {
        const linkRect = link.getBoundingClientRect();
        const x = e.clientX - linkRect.left;
        const y = e.clientY - linkRect.top;
        
        // Ultra smooth tracking
        gsap.to(circle, {
          left: `${x}px`,
          top: `${y}px`,
          duration: 0.05,
          ease: "none"
        });
      };

      // Mouse leave animation - simplified and reliable
      const handleMouseLeave = () => {
        // Kill any ongoing animations
        gsap.killTweensOf(circle);
        
        // Immediate and reliable hide
        gsap.to(circle, {
          width: 0,
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in"
        });
      };

      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mousemove', handleMouseMove);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    // Limit concurrent meteors for performance
    let meteorCount = 0;
    const maxMeteors = 5;

    // Optimized meteor creation
    const createMeteor = () => {
      if (meteorCount >= maxMeteors) return; // Limit concurrent meteors
      
      meteorCount++;
      const meteor = document.createElement('div');
      meteor.className = 'meteor absolute pointer-events-none';
      
      // Random horizontal position
      const xPos = Math.random() * 100;
      
      // Simplified meteor styling for performance
      meteor.style.cssText = `
        left: ${xPos}%;
        top: -80px;
        width: 2px;
        height: 60px;
        background: linear-gradient(180deg, 
          transparent 0%, 
          rgba(78, 115, 255, 0.8) 70%, 
          rgba(255, 255, 255, 1) 100%
        );
        border-radius: 50px;
        transform: rotate(15deg);
        z-index: 1;
      `;
      
      footer.appendChild(meteor);

      // Simplified animation for better performance
      gsap.fromTo(meteor, 
        {
          y: -80,
          opacity: 0
        },
        {
          y: footer.offsetHeight + 50,
          opacity: 1,
          duration: gsap.utils.random(2.5, 4),
          ease: "none", // Linear for performance
          onComplete: () => {
            meteor.remove();
            meteorCount--;
          }
        }
      );
    };

    // Reduced frequency intervals for performance
    const meteorInterval = setInterval(createMeteor, 1500); // Less frequent

    // Simplified initial effect
    setTimeout(createMeteor, 500);

    return () => {
      clearInterval(meteorInterval);
      
      // Cleanup all meteors
      const allMeteors = footer.querySelectorAll('.meteor');
      allMeteors.forEach(meteor => {
        gsap.killTweensOf(meteor);
        meteor.remove();
      });
      
      // Cleanup navigation hover effects
      navLinks.forEach(link => {
        const circle = link.querySelector('.nav-circle');
        if (circle) {
          gsap.killTweensOf(circle);
          circle.remove();
        }
      });
    };
  }, []);

  return (
    <footer className="w-full mb-[50px]">
      {/* Main Footer Container */}
      <div ref={footerRef} className="bg-[#2a2a2a] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] mx-2 sm:mx-4 relative overflow-hidden">

        {/* Footer Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-6 sm:pt-8 md:pt-12 pb-4 sm:pb-6 relative z-10">
          {/* Logo Section */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <div className="w-[120px] h-[32px] sm:w-[150px] sm:h-[40px] md:w-[183px] md:h-[49px] rounded-lg flex items-center justify-center">
             <Image src={'/webp/aiif_logo_colur_720 1.webp'} alt='logo' width={1080} height={1080} className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Navigation and Contact Container */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8 sm:mb-10 md:mb-12 space-y-8 lg:space-y-0">
            {/* Navigation Links */}
            <div className="space-y-4 sm:space-y-6">
              {/* Mobile: Stack links vertically */}
              <div className="sm:hidden space-y-3">
                {navigationLinks.map((link, index) => (
                  <div key={index} className="flex items-center">
                    <a href={link.href} className="nav-link text-[#4e73ff] font-audiowide text-sm transition-colors">
                      {link.name}
                    </a>
                    {index < navigationLinks.length - 1 && (
                      <span className="text-[#3c403c] text-lg font-extralight ml-2">/</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Tablet and up: Two rows layout */}
              <div className="hidden sm:block">
                {/* First Row */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-4 md:mb-6">
                  <a href={navigationLinks[0].href} className="nav-link text-[#4e73ff] font-audiowide text-sm sm:text-base md:text-lg transition-colors">
                    {navigationLinks[0].name}
                  </a>
                  <span className="text-[#3c403c] text-lg md:text-xl font-extralight">/</span>
                  <a href={navigationLinks[1].href} className="nav-link text-[#4e73ff] font-audiowide text-sm sm:text-base md:text-lg transition-colors">
                    {navigationLinks[1].name}
                  </a>
                  <span className="text-[#3c403c] text-lg md:text-xl font-extralight">/</span>
                  <a href={navigationLinks[2].href} className="nav-link text-[#4e73ff] font-audiowide text-xs sm:text-sm md:text-base transition-colors">
                    {navigationLinks[2].name}
                  </a>
                  <span className="text-[#3c403c] text-lg md:text-xl font-extralight">/</span>
                </div>
                
                {/* Second Row */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                  <a href={navigationLinks[3].href} className="nav-link text-[#4e73ff] font-audiowide text-xs sm:text-sm md:text-base transition-colors">
                    {navigationLinks[3].name}
                  </a>
                  <span className="text-[#3c403c] text-lg md:text-xl font-extralight">/</span>
                  <a href={navigationLinks[4].href} className="nav-link text-[#4e73ff] font-audiowide text-xs sm:text-sm md:text-base transition-colors">
                    {navigationLinks[4].name}
                  </a>
                  <span className="text-[#3c403c] text-lg md:text-xl font-extralight">/</span>
                  <a href={navigationLinks[5].href} className="nav-link text-[#4e73ff] font-audiowide text-xs sm:text-sm md:text-base transition-colors">
                    {navigationLinks[5].name}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-left lg:text-right space-y-3 sm:space-y-4">
              {/* Email Section */}
              <div>
                <div className="text-zinc-500  font-audiowide text-xs sm:text-sm mb-1 sm:mb-2">Email</div>
                <div className="text-[#adb3ab] font-audiowide text-sm sm:text-lg md:text-xl lg:text-2xl break-all">
                  <span className="text-[#3c403c]">(</span>
                    aiif@ajkcas.ac.in
                  <span className="text-[#3c403c]">)</span>
                </div>
              </div>

              {/* Location Section */}
              <div>
                <div className="text-zinc-500 font-medium text-xs sm:text-sm mb-1 sm:mb-2">Location</div>
                <div className="text-[#adb3ab] font-audiowide text-xs sm:text-sm leading-relaxed">
                AJK College of Arts and Science, Navakkarai, <br />
                Coimbatore
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="bg-[#4e73ff] rounded-xl sm:rounded-2xl mx-2 sm:mx-4 md:mx-6 h-[100px] sm:h-[120px] md:h-[160px] relative bottom-[15px] sm:bottom-[20px] md:bottom-[30px] overflow-hidden z-20">
          {/* Background overlay */}
          <div className="absolute inset-0 opacity-70"></div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-0 z-10">
            {/* Left side - Explore section */}
            <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 mb-4 sm:mb-0">
              <div className="w-3 sm:w-4 md:w-6 hidden md:block h-[3px] bg-white/20"></div>
              <div>
                <h3 className="text-white font-audiowide text-sm sm:text-base md:text-lg lg:text-xl leading-tight tracking-tight">
                  Explore<br />
                  our success
                </h3>
              </div>
            </div>

            {/* Right side - Copyright */}
            <div className="text-white font-audiowide text-xs sm:text-sm md:text-base lg:text-lg flex flex-row items-center gap-[15px] sm:gap-[20px] md:gap-[30px]">
              <p>© 2025 — Copyright</p>
              <RxArrowTopRight className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]" />
            </div>

            {/* Decorative lines - Hidden on mobile */}
            <div className="hidden md:block absolute top-0 right-32 lg:right-48 w-[1px] h-6 bg-white/20"></div>
            <div className="hidden md:block absolute bottom-0 right-32 lg:right-48 w-[1px] h-6 bg-white/20"></div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;