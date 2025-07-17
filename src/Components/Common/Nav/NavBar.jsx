"use client";
import React from "react";
import "./NavBar.css";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname(); // Gets current path like "/contact", "/about", etc.

  return (
    <div className="w-full h-[90px] fixed top-0 z-[40] flex items-center justify-between ">
      <div className={` ${pathname.split("/")[1] == "" ? "logo__continer" : "bg-white"} z-[200] flex items-center justify-center relative h-full bg-[#e5e5e5] w-[12rem] rounded-br-[28px]`}>
        <Image
          className="w-[10rem] h-[45px] translate-y-[10px] translate-x-[10px]"
          src={"/logo.png"}
          alt="SanthiGearsLogo"
          width={1080}
          height={1024}
        />
      </div>
      <div className={` ${pathname.split("/")[1] == "" ? "menu__continer" : "bg-white"} group cursor-pointer  relative h-full bg-[#e5e5e5] pr-12 pl-5  w-fit flex items-center justify-center rounded-bl-[28px] `}>
        <span
          className="group-hover:block mr-5 hidden  text-lg font-bold w-[20px] h-[20px] rounded-full"
          style={{ background: "linear-gradient(90deg, #6b95ff, #4e73ff)" }}
        />

        <div className="menu__text mr-5 group-hover:hidden block">
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
    </div>
  );
}

export { NavBar };
