// src/sections/HeroSection.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealFrom } from "../components/RevealFrom";
import { ParallaxContainer } from "../components/ParallaxContainer";
import { SectionWithLine } from "../components/SectionWithLine";

export function HeroSection() {

    // get scrollY and map [0px → 500px] → [0px → 100px] downward
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 500], [0, 100]);

  return (

<section id="home" className="bg-green-900 bg-[url('./images/dust.png')] bg-blend-soft-light bg-auto bg-center overflow-hidden w-full">
<Helmet>
  <title>Home - Chris Casey Golf Instruction</title>
  <meta
    name="description"
    content="Welcome to Chris Casey Golf Instruction. Start improving your game today with personalized coaching and training."
  />
</Helmet>
<div className="relative flex flex-col justify-between md:flex-row pt-1 md:pt-2 lg:pt-3 overflow-hidden z-10 bg-white
  lg:px-8
  md:px-7
  sm:px-3
  px-0
  ">
  {/* BG IMAGE */}
  {/* 1) Parallax BG image */}
  <motion.div
    className="absolute inset-0 bg-[url('./images/hero-bg.jpg')] bg-cover bg-center"
    style={{ y: yOffset }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  />

  {/* SEMI-TRANSPARENT BLUE + BLUR OVERLAY */}
  <div
    className="
      absolute inset-0 
      bg-gradient-to-t from-green-600/80 to-green-900/90
      backdrop-blur-md
    "
  />
  
    {/* 2) Dust texture on top */}
    <div
    className="
      absolute inset-0 
      bg-[url('/images/dust-2.png')] 
      bg-auto 
      bg-center
      opacity-60
      pointer-events-none
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 w-full md:flex-1 flex flex-col justify-center">

    <RevealFrom
      triggerOnce={true}
      className="w-full flex flex-col justify-center mt-30"
      initial={{ opacity: 0, y: -120 }}
      animateIn={{ opacity: 1, y: 0 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
    >
      <h1 className="flex flex-col custom-px">
        <div className="flex flex-col justify-between m-auto pt-0"> 
          <div className="font-header text-center 
          text-[clamp(1.2rem,2.8vw,2.2rem)]
          leading-[1.2]
          uppercase lg:mb-6 md:mb-5 mb-7 mx-2 md:mx text-amber-400">Chris Casey Golf Instruction</div>

          <span className="animate-float font-header 
          text-[clamp(2.6rem,12.2vw,12.97rem)]
          leading-[0.9]
          text-gray-50 font-extrabold uppercase text-center z-3 opacity-90 
          2xl:mt-8
          xs:mt-5 
          2xs:mt-4 
          3xs:mt-2">
            <span>E</span>
            <span>l</span>
            <span>e</span>
            <span className="ml-[0.03em]">v</span> {/* Increase space before v (for e-v too close) */}
            <span className="-ml-[0.97em]">a</span> {/* Decrease space before a (for v-a too far) */}
            <span className="-ml-[1.2em]">t</span> {/* Decrease space before t (for a-t too far) */}
            <span className="-ml-[0.95em]">e</span>
          </span>
          <div className="flex self-center justify-center
          ">
            <div className="flex flex-row self-center justify-between
              3xl:gap-65
              2xl:gap-50
              xl:gap-40
              lg:gap-38
              md:gap-10
              gap-7
              ">
              <div className="font-header 
              text-[clamp(2rem,9vw,9.2rem)]
              leading-[1.3]
              text-gray-50 font-bold uppercase text-left z-3 opacity-90
              3xl:-ml-8
              2xl:-ml-7
              -ml-2">Your</div>
              <div className="font-header 
              text-[clamp(2rem,9vw,9.2rem)]
              leading-[1.3]
              text-gray-50 font-bold uppercase text-right z-3 opacity-90
              ">Game</div>
            </div>
          </div>
        </div>
      </h1>
    </RevealFrom>

    <div className="flex flex-col md:flex-row justify-start m-auto 
    3xl:max-w-[1545px]
    2xl:max-w-[1430px]
    md:max-w-[1150px]
    w-full
    custom-px">
      <RevealFrom
        triggerOnce={true}
        className="flex gap-4 lg:w-1/3 md:w-1/2 w-full flex-row 
        xs:mt-1 
        2xs:mt-5 
        3xs:mt-5"
        initial={{ opacity: 0, x: -200 }}
        animateIn={{ opacity: 1, x: 0 }}
        threshold={0}
        rootMargin="0px 0px -20% 0px"
      >
        <div className="flex flex-col pt-1">
          <div className="py-0 lg:py-2 md:py-5 px-2">
            <h2 className="font-roboto text-white/90 text-center md:text-left flex flex-col ">
              <span className="
              text-[1.15em]/6 
              2xl:text-[1.6em]/8 
              xl:text-[1.5em]/7 
              lg:text-[1.4em]/8 
              md:text-[1.3em]/6">Take your golf game to the next level with custom lessons and proven techniques.</span>
            </h2>
          </div>
          <div className="flex flex-row justify-center md:justify-start mt-8 mb-4 z-12">
            <a href="#contact" className="main-button">
              Book a Lesson Now! 
            </a>
          </div>
        </div>
      
      </RevealFrom>

      <RevealFrom
        triggerOnce={true}
        className="flex gap-5 w-full lg:w-1/3 md:w-1/2 md:flex-row flex-col md:px-0 px-2 self-end justify-center z-11"
        initial={{ opacity: 0, y: 50 }}
        animateIn={{ opacity: 1, y: 0 }}
        threshold={0}
        rootMargin="0px 0px -20% 0px"
      >
        <div className="flex justify-center">
          <ParallaxContainer
            intensity={20}
            className=""
          >
            <div className="flex self-end align-bottom justify-start 
            w-full 
            max-w-[60px]
            2xl:min-w-[700px] 
            xl:min-w-[600px] 
            lg:min-w-[530px] 
            md:min-w-[490px] 
            sm:min-w-[500px] 
            xs:min-w-[420px]
            2xs:min-w-[380px]
            3xs:min-w-[340px]
            3xl:mt-[-310px] 
            2xl:mt-[-300px] 
            xl:mt-[-250px] 
            lg:mt-[-220px] 
            md:mt-[-108px] 
            -mt-[45px]
            lg:ml-2
            md:-ml-2
            -ml-10">
              <img src="./images/chris-casey-2.png" loading="lazy" alt="Profile Swing" className="mb-[-19px] opacity-95"/>
            </div>
          </ParallaxContainer>
        </div>
      </RevealFrom>
      {/* <RevealFrom
        triggerOnce={true}
        className="flex gap-5 w-1/3 flex-row"
        initial={{ opacity: 0, x: 200 }}
        animateIn={{ opacity: 1, x: 0 }}
        threshold={0}
        rootMargin="0px 0px -20% 0px"
      >
        <div className="flex justify-end">
          
        </div>
      
      </RevealFrom> */}
    </div>
  </div>
</div>

<SectionWithLine
  threshold={0.05}          // fire when 25% of the element is visible
  rootMargin="0px"          // optional adjustments
  triggerOnce={true}        // still works as before
>
</SectionWithLine>

</section>
  );
}