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
        <HoveredLink href="#skills">Skills</HoveredLink>
        <HoveredLink href="#Projects">Projects</HoveredLink>
        
            <HoveredLink href="#education">Education</HoveredLink>
      </Menu>
    </div>
  );
}
