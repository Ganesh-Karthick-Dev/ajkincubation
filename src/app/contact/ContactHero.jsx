"use client"

import React from 'react'

const ContactHero = () => {
  return (
    <section className="w-full py-8 px-2 sm:py-12 sm:px-4 md:px-8 bg-gradient-to-br from-slate-50 to-indigo-100 my-6 sm:my-8 md:my-12 rounded-2xl">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center rounded-xl sm:rounded-2xl  bg-transparent backdrop-blur-md relative overflow-hidden">
        {/* Multiple Animated SVG blobs - now in parent */}
        {/* Blob 1 - Top Left */}
        <div className="absolute hidden md:block top-8 left-8 sm:top-10 sm:left-12 -z-10 pointer-events-none opacity-60">
          <svg width="320" height="320" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin1">
            <defs>
              <linearGradient id="innovate-gradient1" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="8s" repeatCount="indefinite"
                values="M320,180Q320,300,200,320Q80,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,100,240,60Q160,20,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,300,200,320Q80,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient1)"/>
          </svg>
        </div>
        {/* Blob 2 - Top Center */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 sm:top-14 -z-10 pointer-events-none opacity-40">
          <svg width="200" height="200" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin2">
            <defs>
              <linearGradient id="innovate-gradient3" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient3)"/>
          </svg>
        </div>
        {/* Blob 3 - Top Right */}
        <div className="absolute top-8 hidden md:block right-8 sm:top-10 sm:right-12 -z-10 pointer-events-none opacity-25">
          <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin3">
            <defs>
              <linearGradient id="innovate-gradient3" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient3)"/>
          </svg>
        </div>
        {/* Blob 4 - Mid Left */}
        <div className="absolute top-1/3 left-16 sm:top-1/4 sm:left-24 -z-10 pointer-events-none opacity-30">
          <svg width="120" height="120" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin4">
            <defs>
              <linearGradient id="innovate-gradient4" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fbbf24" />
                <stop offset="1" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="14s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient4)"/>
          </svg>
        </div>
        {/* Blob 5 - Center Left */}
        <div className="absolute top-1/2 hidden md:block left-1/4 -translate-x-1/2 -translate-y-1/2 sm:left-1/3 -z-10 pointer-events-none opacity-22">
          <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin5">
            <defs>
              <linearGradient id="innovate-gradient4" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fbbf24" />
                <stop offset="1" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="14s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient4)"/>
          </svg>
        </div>
        {/* Blob 6 - Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none opacity-18">
          <svg width="90" height="90" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin6">
            <defs>
              <linearGradient id="innovate-gradient6" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="1" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="13s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient6)"/>
          </svg>
        </div>
        {/* Blob 7 - Center Right */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 sm:right-1/3 -z-10 pointer-events-none opacity-22">
          <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin7">
            <defs>
              <linearGradient id="innovate-gradient7" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="15s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient7)"/>
          </svg>
        </div>
        {/* Blob 8 - Mid Right */}
        <div className="absolute top-1/3 right-16 sm:top-1/4 sm:right-24 -z-10 pointer-events-none opacity-30">
          <svg width="120" height="120" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin8">
            <defs>
              <linearGradient id="innovate-gradient8" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fbbf24" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="17s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient8)"/>
          </svg>
        </div>
        {/* Blob 9 - Bottom Left */}
        <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-12 -z-10 pointer-events-none opacity-40">
          <svg width="200" height="200" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin9">
            <defs>
              <linearGradient id="innovate-gradient9" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#34d399" />
                <stop offset="1" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="19s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient9)"/>
          </svg>
        </div>
        {/* Blob 10 - Bottom Center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-14 -z-10 pointer-events-none opacity-18">
          <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin10">
            <defs>
              <linearGradient id="innovate-gradient10" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#fbbf24" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="21s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient10)"/>
          </svg>
        </div>
        {/* Blob 11 - Bottom Right */}
        <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-12 -z-10 pointer-events-none opacity-18">
          <svg width="90" height="90" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin11">
            <defs>
              <linearGradient id="innovate-gradient11" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f472b6" />
                <stop offset="1" stopColor="#38bdf8" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="23s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient11)"/>
          </svg>
        </div>
        {/* Blob 12 - Center Bottom Right */}
        <div className="absolute bottom-1/4 right-1/4 sm:bottom-1/3 sm:right-1/3 -z-10 pointer-events-none opacity-18">
          <svg width="100" height="100" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-blob-morph animate-blob-spin12">
            <defs>
              <linearGradient id="innovate-gradient12" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fbbf24" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
            </defs>
            <path>
              <animate attributeName="d" dur="25s" repeatCount="indefinite"
                values="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z;
                        M320,180Q320,120,240,80Q160,40,100,120Q40,200,100,270Q160,340,240,300Q320,260,320,180Z;
                        M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" />
            </path>
            <path d="M320,180Q320,260,240,300Q160,340,100,270Q40,200,100,120Q160,40,240,80Q320,120,320,180Z" fill="url(#innovate-gradient12)"/>
          </svg>
        </div>
        {/* Left: Content */}
        <div className="relative flex flex-col justify-center items-start p-4 sm:p-8 md:p-12 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md border border-white/30">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-800 mb-4 sm:mb-6 leading-tight drop-shadow-sm relative">
            Let’s Connect and Co-Create the Future
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-medium mb-2 sm:mb-4 relative">
            Whether you're a student innovator, early-stage founder, mentor, investor, or industry collaborator we’d love to hear from you.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 relative">
            The AJK Innovation Incubator Foundation (AIIF) is here to guide your startup journey, collaborate on impactful projects, and help you access the right ecosystem support. Reach out today, and let’s build the future together.
          </p>
        </div>
        {/* Right: Google Map */}
        <div className="flex justify-center items-center p-2 sm:p-4 md:p-8">
          <div className="w-full h-56 sm:h-64 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-indigo-100 relative bg-gradient-to-tr from-indigo-100/60 to-white/0">
            {/* Gradient overlay for trendy look */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-indigo-200/40 via-transparent to-transparent z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3957399602273!2d76.87053911062169!3d10.857475089251608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba84320621dd419%3A0xd65b472fdd2d0c49!2sAJK%20College%20of%20Arts%20and%20Science!5e0!3m2!1sen!2sin!4v1753260963666!5m2!1sen!2sin"
              title="AJK Innovation Incubator Foundation Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full relative z-0"
            ></iframe>
            {/* Optional: Overlay a pin or info card for extra polish */}
            {/* <div className="absolute bottom-3 left-3 bg-white/90 rounded-lg px-3 py-1.5 shadow text-indigo-700 font-semibold text-xs sm:text-sm z-20">AJK Innovation Incubator Foundation</div> */}
          </div>
        </div>
      </div>
      {/* SVG animation keyframes for fallback if needed */}
      <style>{`
        @keyframes blob-morph {
          0%, 100% { filter: none; }
          50% { filter: drop-shadow(0 0 12px rgba(99,102,241,0.15)); }
        }
        @keyframes blob-spin1 {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.12) rotate(8deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes blob-spin2 {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.18) rotate(-12deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes blob-spin3 {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.15) rotate(16deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes blob-spin4 {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.22) rotate(-18deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes blob-spin5 {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.13) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .animate-blob-morph {
          animation: blob-morph 6s ease-in-out infinite;
        }
        .animate-blob-spin1 { animation: blob-spin1 8s ease-in-out infinite; }
        .animate-blob-spin2 { animation: blob-spin2 10s ease-in-out infinite; }
        .animate-blob-spin3 { animation: blob-spin3 12s ease-in-out infinite; }
        .animate-blob-spin4 { animation: blob-spin4 14s ease-in-out infinite; }
        .animate-blob-spin5 { animation: blob-spin5 16s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

export default ContactHero