"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function   Nav() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 dark" />
      <p className="text-black dark:text-white">
        
      </p>
    </div>
  );
}
9
function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <HoveredLink href="#about">About</HoveredLink>
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem> */}
        <HoveredLink href="#about">Skills</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Projects" className="pb-1" >
          <div className="  text-sm grid grid-cols-2 gap-5 p-4 max-sm:grid-cols-1 overflow-auto max-sm:h-[280px] max-sm:w-[400px] ">
            
            <ProductItem
            
            
              title="Chat App"
              
              href="#chatter"
              src="/chat1.png"
              description="MERN stack based live chat app using socket" />
            <ProductItem
              title="Series Exam Managment System"
              href="https://tailwindmasterkit.com"
              src="/lib.jpg"
              description="A web app for centralized series exam management and scrutiny of questioin paper using vanila HTML,CSS and JS" />
            <ProductItem
              title="Master Chef"
              href="#masterChef "
              src="/chef.png"
              description="React web app that generate recipy based on the given increadence,Integrated with hugface ai API" />
            <ProductItem
              title="Tenzies"
              href="#tenzies"
              src="/tenzies.png"
              description="React frontend project. A game of Dies" />
              <ProductItem
              title="Youtube Clone"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="A clone using vanila HTML and CSS " />
              
          </div>
        </MenuItem>
        
            <HoveredLink href="#education">Education</HoveredLink>
      </Menu>
    </div>
  );
}
