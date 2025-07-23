'use client';
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const bentoCards = [
  {
    id: 1,
    title: 'Fuel Your Startup Journey with the Right Tools',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop&crop=center',
    content: (
      <>
        <p className="mb-2 text-xs md:text-sm">
          At AJK Innovation Incubator Foundation (AIIF), we go beyond mentorship and workspace. We empower startups with access to essential templates, guides, and government updates all tailored to support early-stage entrepreneurs, student founders, and academic innovators.
        </p>
      </>
    ),
    bg: 'bg-[#F5E8FF]',
    mdColSpan: 'md:col-span-2',
    mdRowSpan: 'md:row-span-2',
    text: 'text-gray-900',
    font: 'font-bold',
  },
  {
    id: 2,
    title: 'Pitch Deck & Business Model Templates',
    content: (
      <>
        <p className="mb-1 text-xs md:text-sm">Create strong investor-ready presentations with our professionally designed templates:</p>
        <ul className="list-disc pl-4 text-xs md:text-sm mb-1">
          <li>Customizable Pitch Decks to showcase your idea, team, market, and financials</li>
          <li>Business Model Canvas (BMC) templates to plan your startup’s value, customer segments, and revenue strategy</li>
        </ul>
        <p className="italic text-xs md:text-sm">(Perfect for idea validation, competitions, and funding presentations.)</p>
      </>
    ),
    bg: 'bg-[#D1FADF]',
    mdColSpan: 'md:col-span-1',
    mdRowSpan: 'md:row-span-1',
    text: 'text-gray-900',
    font: 'font-semibold',
  },
  {
    id: 3,
    title: 'Startup Policy & Founder Handbook',
    content: (
      <>
        <p className="mb-1 text-xs md:text-sm">Understand the rules, benefits, and support systems available for campus startups:</p>
        <ul className="list-disc pl-4 text-xs md:text-sm mb-1">
          <li>AIIF’s Startup Policy for students and faculty entrepreneurs</li>
          <li>A Step-by-Step Handbook for starting, running, and registering a startup</li>
        </ul>
        <p className="italic text-xs md:text-sm">(Know your rights, responsibilities, and the pathways to formalize your startup.)</p>
      </>
    ),
    bg: 'bg-[#FFF7D1]',
    mdColSpan: 'md:col-span-1',
    mdRowSpan: 'md:row-span-1',
    text: 'text-gray-900',
    font: 'font-semibold',
  },
  {
    id: 4,
    title: 'Government Funding Scheme Updates',
    content: (
      <>
        <p className="mb-1 text-xs md:text-sm">Stay informed about the latest startup support from national and state bodies:</p>
        <ul className="list-disc pl-4 text-xs md:text-sm mb-1">
          <li>Latest schemes from Startup India, StartupTN, BIRAC, EDII-TN, and MSME</li>
          <li>Monthly updates on new grant opportunities</li>
          <li>Application tips and deadlines curated by the AIIF team</li>
        </ul>
      </>
    ),
    bg: 'bg-[#E0F2FE]',
    mdColSpan: 'md:col-span-2',
    mdRowSpan: 'md:row-span-1',
    text: 'text-gray-900',
    font: 'font-semibold',
  },
  {
    id: 5,
    title: 'MSME & Udyam Registration Guide',
    content: (
      <>
        <p className="mb-1 text-xs md:text-sm">Get recognized as an official micro or small business in India:</p>
        <ul className="list-disc pl-4 text-xs md:text-sm mb-1">
          <li>Step-by-step process for Udyam Registration under MSME</li>
          <li>Benefits you receive: government schemes, subsidies, and easier funding access</li>
        </ul>
      </>
    ),
    bg: 'bg-[#FDE68A]',
    mdColSpan: 'md:col-span-1',
    mdRowSpan: 'md:row-span-1',
    text: 'text-gray-900',
    font: 'font-semibold',
  },
];

const directionsDesktop = [
  { x: -100, y: 0 }, // left
  { x: 0, y: -100 }, // top
  { x: 100, y: 0 }, // right
  { x: 0, y: 100 }, // bottom
];

const BentoGrid = () => {
  const cardRefs = useRef([]);

  useLayoutEffect(() => {
    if (cardRefs.current.length === bentoCards.length && cardRefs.current.every(Boolean)) {
      bentoCards.forEach((_, i) => {
        const dir = directionsDesktop[i % 4];
        gsap.from(cardRefs.current[i], {
          x: dir.x,
          y: dir.y,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power2.out',
          clearProps: 'all',
        });
      });
    }
    return () => {
      gsap.killTweensOf(cardRefs.current);
    };
  }, []);

  return (
    <div className="w-full px-2 py-4 md:mb-[300px]">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto md:auto-rows-[150px] lg:auto-rows-[1fr] gap-3 md:gap-4 lg:gap-6 h-auto md:h-[80vh] lg:h-[90vh]"
      >
        {bentoCards.map((card, idx) => (
          <div
            key={card.id}
            ref={el => (cardRefs.current[idx] = el)}
            className={`rounded-2xl shadow-md p-3 md:p-4 flex flex-col bg-white ${card.bg} ${card.text} ${card.font} ${card.mdColSpan} ${card.mdRowSpan}`}
          >
            <div className="flex-1 flex flex-col justify-between h-full w-full">
              {/* Only first card gets an image on top */}
              {idx === 0 && card.image && (
                <div className="w-full mb-2 rounded-xl overflow-hidden">
                  <img src={card.image} alt="Hero" className="w-full h-24 md:h-[300px] object-cover" />
                </div>
              )}
              <div>
                <h3 className={`mb-1 md:mb-2 text-base md:text-lg lg:text-3xl`}>{card.title}</h3>
                <div className={`text-xs md:text-sm lg:text-lg`}>{card.content}</div>
              </div>
              <button className="mt-2 md:mt-4 px-4 py-2 rounded-lg bg-[#6366F1] text-white font-bold shadow hover:bg-[#4f46e5] transition-all w-full md:w-auto self-end md:self-start">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid; 