"use client";
// import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import {BackgroundBeamsWithCollision} from "@/components/ui/background-beams-with-collision"
import Profile from "./Profile";

export default function Marque() {
  
  return (
    <div
      className="relative px-0 my-10 flex  w-full max-w-7xl flex-col  justify-center overflow-hidden rounded-3xl max-sm:h-100 dark" id="about">
      <BackgroundBeamsWithCollision className="items-start">

      <Profile />
      </BackgroundBeamsWithCollision>
      {/* overlay */}
      <div
        className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/20 max-sm:h-100 max-md:h-" />
      {/* <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images} /> */}
    </div>
  );
}
