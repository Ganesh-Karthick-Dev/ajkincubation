"use client"

import Footer from '@/app/footer/page';
import { usePathname } from 'next/navigation';
import React from 'react'

const LayoutWrapper = ({children}) => {

  const pathname = usePathname(); // Gets current path like "/contact", "/about", etc.

  // console.log(`Current path:`, pathname.split("/")[1]);

  return (
    <>
    <div className={`w-full h-[100vh] relative p-5 ${pathname.split("/")[1] == "" ? "bg-[#e5e5e5]" : "bg-white"}`}>
      <div id="main-scroll-area" className="w-full h-full relative  rounded-[3rem] overflow-auto scrollbar-hide pt-[5rem] bg-white bg-dotted-pattern">

      {children}
        
      <Footer />
      </div>
    </div>
    </>
  )
}

export default LayoutWrapper