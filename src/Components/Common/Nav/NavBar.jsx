"use client";
import React, { useState, useRef, useEffect } from "react";
import "./NavBar.css";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Home, Users, Briefcase, Rocket, BookOpen, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

function NavBar() {
  const pathname = usePathname(); // Gets current path like "/contact", "/about", etc.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const navItemsRef = useRef(null);

  // GSAP animations for modal
  useEffect(() => {
    if (isModalOpen) {
      // Animate overlay fade in
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });

      // Animate modal slide up from bottom
      gsap.fromTo(modalRef.current, 
        {
          y: "100%",
          opacity: 0
        },
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.1,
          onComplete: () => {
            // Animate nav items one by one from left
            gsap.fromTo(navItemsRef.current.children, 
              {
                x: -100,
                opacity: 0
              },
              {
                x: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                stagger: 0.1
              }
            );
          }
        }
      );
    } else {
      // Animate nav items out first
      gsap.to(navItemsRef.current?.children || [], {
        x: -100,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
        stagger: 0.05
      });

      // Animate modal slide down
      gsap.to(modalRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        delay: 0.2
      });

      // Animate overlay fade out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        delay: 0.3
      });
    }
  }, [isModalOpen]);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLinkClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full h-[60px] md:h-[90px] fixed top-0 z-[40] flex items-center justify-between ">
        <div className={` ${pathname.split("/")[1] == "" ? "logo__continer" : "bg-white"} z-[200] flex items-center justify-center relative h-full bg-[#e5e5e5] w-[8rem] md:w-[12rem] rounded-br-[28px]`}>
          <Image
            className="w-[6rem] md:w-[10rem] h-[30px] md:h-[45px] translate-y-[5px] md:translate-y-[10px] translate-x-[5px] md:translate-x-[10px]"
            src={"/logo.png"} 
            alt="SanthiGearsLogo" 
            width={1080}
            height={1024}
          />
        </div>

        {/* Desktop Menu */}
        <div className={` ${pathname.split("/")[1] == "" ? "menu__continer" : "bg-white"} group cursor-pointer  relative h-full bg-[#e5e5e5] pr-5 md:pr-12 pl-5  w-fit flex items-center justify-center rounded-bl-[28px] hidden lg:flex`}>
          <span
            className="group-hover:block mr-5 hidden  text-lg font-bold w-[20px] h-[20px] rounded-full"
            style={{ background: "linear-gradient(90deg, #6b95ff, #4e73ff)" }}
          />

          <div className="menu__text mr-1 md:mr-5 group-hover:hidden block">
            <span
              className="text-lg font-bold font-audiowide"
              style={{
                background: "linear-gradient(90deg, #6b95ff, #4e73ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MENU
            </span>
          </div>

          <div className="menu__items font-audiowide items-center justify-center gap-8 flex group-hover:w-[45rem] overflow-hidden w-0 transition-all duration-1000 ease-in-out">
            <Link
              className="text-black text-sm whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#6b95ff] after:to-[#4e73ff]"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-black text-sm whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#6b95ff] after:to-[#4e73ff]"
              href="/about"
            >
              About us
            </Link>
            <Link
              className="text-black text-sm whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#6b95ff] after:to-[#4e73ff]"
              href="/service"
            >
             Programs & Services
            </Link>
            <Link
              className="text-black text-sm whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#6b95ff] after:to-[#4e73ff]"
              href="/startups"
            >
              Startups TN
            </Link>
            <Link
              className="text-black text-sm whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#6b95ff] after:to-[#4e73ff]"
              href="/resource"
            >
              Resource
            </Link>
            <Link
              className="text-black text-sm whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-gradient-to-r after:from-[#6b95ff] after:to-[#4e73ff]"
              href="/contact"
            >
              Contact us
            </Link>
          </div>

          <div className="menu__button ml-5">
            <div className="menu__button__icon">
              <Menu className="w-[1.5rem] h-[1.5rem] text-black" />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <div className={` ${pathname.split("/")[1] == "" ? "menu__continer" : "bg-white"} cursor-pointer relative h-full bg-[#e5e5e5] pr-5 md:pr-12 pl-5 w-fit flex items-center justify-center rounded-bl-[28px] lg:hidden`}>
          <div className="menu__text mr-1 md:mr-5">
            <span
              className="text-lg font-bold font-audiowide"
              style={{
                background: "linear-gradient(90deg, #6b95ff, #4e73ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MENU
            </span>
          </div>
          
          <div className="menu__button ml-5" onClick={handleMenuClick}>
            <div className="menu__button__icon">
              <Menu className="w-[1.5rem] h-[1.5rem] text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Modal Overlay */}
      {isModalOpen && (
        <div 
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-[50] lg:hidden"
          onClick={handleCloseModal}
          style={{ opacity: 0 }}
        />
      )}

      {/* Mobile/Tablet Modal */}
      {isModalOpen && (
        <div 
          ref={modalRef}
          className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[51] lg:hidden"
          style={{ 
            transform: "translateY(100%)",
            opacity: 0,
            minHeight: "60vh",
            maxHeight: "85vh"
          }}
        >
          {/* Modal Handle */}
          <div className="flex justify-center pt-4 pb-2">
            <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
          </div>

          {/* Close Button */}
          {/* <div className="absolute top-4 right-4">
            <button 
              onClick={handleCloseModal}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div> */}
         

          {/* Modal Content */}
          <div className="px-6 pb-8">
           

                         <nav ref={navItemsRef} className="space-y-3">
               <Link
                 className="flex items-center text-3xl font-extrabold text-gray-800 py-3 border-b border-gray-100 hover:text-[#6b95ff] transition-colors"
                 href="/"
                 onClick={handleLinkClick}
               >
                 <Home className="w-8 h-8 mr-4" />
                 Home
               </Link>
               <Link
                 className="flex items-center text-3xl font-extrabold text-gray-800 py-3 border-b border-gray-100 hover:text-[#6b95ff] transition-colors"
                 href="/about"
                 onClick={handleLinkClick}
               >
                 <Users className="w-8 h-8 mr-4" />
                 About us
               </Link>
               <Link
                 className="flex items-center text-3xl font-extrabold text-gray-800 py-3 border-b border-gray-100 hover:text-[#6b95ff] transition-colors"
                 href="/service"
                 onClick={handleLinkClick}
               >
                 <Briefcase className="w-8 h-8 mr-4" />
                 Programs & Services
               </Link>
               <Link
                 className="flex items-center text-3xl font-extrabold text-gray-800 py-3 border-b border-gray-100 hover:text-[#6b95ff] transition-colors"
                 href="/startups"
                 onClick={handleLinkClick}
               >
                 <Rocket className="w-8 h-8 mr-4" />
                 Startups TN
               </Link>
               <Link
                 className="flex items-center text-3xl font-extrabold text-gray-800 py-3 border-b border-gray-100 hover:text-[#6b95ff] transition-colors"
                 href="/resource"
                 onClick={handleLinkClick}
               >
                 <BookOpen className="w-8 h-8 mr-4" />
                 Resource
               </Link>
               <Link
                 className="flex items-center text-3xl font-extrabold text-gray-800 py-3 border-b border-gray-100 hover:text-[#6b95ff] transition-colors"
                 href="/contact"
                 onClick={handleLinkClick}
               >
                 <Phone className="w-8 h-8 mr-4" />
                 Contact us
               </Link>
             </nav>
          </div>
        </div>
      )}
    </>
  );
}

export { NavBar };
