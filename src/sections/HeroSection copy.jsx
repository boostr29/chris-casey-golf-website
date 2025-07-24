// src/sections/HeroSection.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { motion, useScroll, useTransform } from "framer-motion";
import { RevealFrom } from "../components/RevealFrom";
import { ParallaxContainer } from "../components/ParallaxContainer";
import { SectionWithLine } from "../components/SectionWithLine";
import { Stars } from '../components/Stars';
import { VideoWithOverlay } from "../components/VideoWithOverlay";

export function HeroSection() {

    // get scrollY and map [0px → 500px] → [0px → 100px] downward
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 500], [0, 100]);

  return (

<section id="home" className="bg-blue-500 bg-[url('./dust.png')] bg-blend-soft-light bg-auto bg-center overflow-hidden">
<Helmet>
  <title>Home - Chris Casey Golf Instruction</title>
  <meta
    name="description"
    content="Welcome to Chris Casey Golf Instruction. Start improving your game today with personalized coaching and training."
  />
</Helmet>
<div className="relative flex flex-col justify-between md:flex-row pt-4 md:pt-5 lg:pt-6 overflow-hidden">
  {/* BG IMAGE */}
  {/* 1) Parallax BG image */}
  <motion.div
    className="absolute inset-0 bg-[url('./hero-bg.jpg')] bg-cover bg-center"
    style={{ y: yOffset }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  />

  {/* SEMI-TRANSPARENT BLUE + BLUR OVERLAY */}
  <div
    className="
      absolute inset-0 
      bg-blue-600/80 
      backdrop-blur-sm
    "
  />
  
    {/* 2) Dust texture on top */}
    <div
    className="
      absolute inset-0 
      bg-[url('/dust.png')] 
      bg-auto 
      bg-center
      opacity-20
      pointer-events-none
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 w-full md:flex-1 flex flex-col justify-center md:pr-0">

    <RevealFrom
      triggerOnce={true}
      className="w-full flex flex-col justify-center mt-40"
      initial={{ opacity: 0, y: -100 }}
      animateIn={{ opacity: 1, y: 0 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
    >
      <h1 className="flex flex-col custom-px">
        <span className="animate-float font-header text-[5.6em]/19 xl:text-[15.5em]/30 lg:text-[7.7em]/26 md:text-[5.5em]/18 text-white font-extrabold uppercase text-center z-3 opacity-85">Elevate</span>
        <div className="flex flex-row justify-between w-[1150px] m-auto pt-10"> 
          <span className="font-header text-[5.6em]/19 xl:text-[9.5em]/30 lg:text-[7.8em]/26 md:text-[5.5em]/18 text-white font-extrabold uppercase text-left z-3 opacity-85">Your</span>
          <span className="font-header text-[5.6em]/19 xl:text-[9.5em]/30 lg:text-[7.8em]/26 md:text-[5.5em]/18 text-white font-extrabold uppercase text-right z-3 opacity-85">Game</span>
        </div>
      </h1>
    </RevealFrom>

    <div className="flex flex-row justify-between m-auto w-[1150px]">
      <RevealFrom
        triggerOnce={true}
        className="flex gap-5 w-1/3 flex-row md:px-0 px-5"
        initial={{ opacity: 0, x: 200 }}
        animateIn={{ opacity: 1, x: 0 }}
        threshold={0}
        rootMargin="0px 0px -20% 0px"
      >
        <div className="flex">
          <ParallaxContainer
            intensity={20}
            className=""
          >
            <div className="py-0 md:py-5">
              <h2 className="font-header text-white text-center md:text-left flex flex-col ">
                <span className="text-[1.2em]/6 2xl:text-[2em]/10 xl:text-[1.5em]/7 lg:text-[1.4em]/8 md:text-[1.3em]/6">Proven Methods for All Levels, from Beginner to Advanced Golfers</span>
              </h2>
            </div>
            <div className="flex flex-row justify-center md:justify-start my-4">
              <a href="#contact" className="rounded-full bg-amber-200 text-blue-400 uppercase px-10 py-5 font-semibold text-xl font-header transition-all duration-300 ease-in-out transform hover:bg-white hover:text-blue-400">
                Book a Lesson Now!
              </a>
            </div>
          </ParallaxContainer>
        </div>
      
      </RevealFrom>

      <RevealFrom
        triggerOnce={true}
        className="flex gap-5 w-1/3 flex-row md:px-0 px-5 self-end justify-center z-20"
        initial={{ opacity: 0, x: 200 }}
        animateIn={{ opacity: 1, x: 0 }}
        threshold={0}
        rootMargin="0px 0px -20% 0px"
      >
        <div className="flex">
          <ParallaxContainer
            intensity={20}
            className=""
          >
            <div className="max-w-[700px] flex self-end align-bottom justify-start w-full xl:min-w-[600px] lg:min-w-[600px] md:min-w-[560px] sm:min-w-[570px] mt-[-240px]">
              <img src="./chris-casey-2.png" alt="Profile Swing" className="mb-[-19px] opacity-95"/>
            </div>
          </ParallaxContainer>
        </div>
      </RevealFrom>
      <RevealFrom
        triggerOnce={true}
        className="flex gap-5 w-1/3 flex-row"
        initial={{ opacity: 0, x: 200 }}
        animateIn={{ opacity: 1, x: 0 }}
        threshold={0}
        rootMargin="0px 0px -20% 0px"
      >
        <div className="flex justify-end">
          <ParallaxContainer
            intensity={20}
            className="flex flex-col justify-end"
          >
            <div className="justify-center md:justify-end">
              <h2 className="font-header text-white text-right text-[1.2em]/6 2xl:text-[3em]/10 xl:text-[1.5em]/7 lg:text-[1.4em]/8 md:text-[1.3em]/6 flex flex-col ">
                <span className="font-bold uppercase">Chris Casey</span>
                <span className="font-bold uppercase">Golf Instruction</span>
              </h2>
            </div>
          </ParallaxContainer>
        </div>
      
      </RevealFrom>
    </div>
  </div>
</div>
<div className="relative flex flex-col justify-center md:flex-row pt-4 md:pt-5 lg:pt-6 overflow-hidden">
  {/* BG IMAGE */}
  {/* 1) Parallax BG image */}
  <motion.div
    className="absolute inset-0 bg-[url('./hero-bg.jpg')] bg-cover bg-center"
    style={{ y: yOffset }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  />

  {/* SEMI-TRANSPARENT BLUE + BLUR OVERLAY */}
  <div
    className="
      absolute inset-0 
      bg-blue-600/80 
      backdrop-blur-sm
    "
  />
  
    {/* 2) Dust texture on top */}
    <div
    className="
      absolute inset-0 
      bg-[url('/dust.png')] 
      bg-auto 
      bg-center
      opacity-20
      pointer-events-none
    "
  />

  {/* CONTENT */}
  <div className="relative z-10 w-full md:flex-1 flex flex-col md:flex-row justify-center md:pr-0">

  <RevealFrom
    triggerOnce={true}
    className="md:w-1/2 w-full flex flex-col justify-start custom-my"
    initial={{ opacity: 0, x: -200 }}
    animateIn={{ opacity: 1, x: 0 }}
    threshold={0}
    rootMargin="0px 0px -20% 0px"
  >
    <h1 className="flex flex-col custom-px">
      <span className="font-header text-[5.6em]/19 xl:text-[9em]/30 lg:text-[7.7em]/26 md:text-[5.5em]/18 text-amber-200 font-extrabold uppercase md:text-right text-center z-3">Chris Casey</span>
      <span className="font-header text-white md:text-right text-center 2xl:text-[3.4em]/14 xl:text-[3.1em]/14 lg:text-[2.5em]/12 md:text-3xl pt-2 text-3xl uppercase tracking-wide lg:mb-5 md:mb-3 mb-5">Golf Instruction</span>
    </h1>
    <div className="flex flex-row justify-center md:justify-end py-0 md:py-5 custom-px">
      <h2 className="w-2xl font-header text-white text-center md:text-right text-[1.2em]/6 2xl:text-[2em]/10 xl:text-[1.5em]/7 lg:text-[1.4em]/8 md:text-[1.3em]/6"><span className="font-bold">Certified Golf Instructor</span> helping golfers <span className="font-bold">fix</span> and <span className="font-bold">master</span> their swings, improve their game, and play their <span className="font-bold">best golf</span>.</h2>
    </div>
    <div className="flex flex-row justify-center md:justify-end my-4 custom-px">
      <a href="#contact" className="rounded-full bg-amber-200 text-blue-400 uppercase px-10 py-5 font-semibold text-xl font-header transition-all duration-300 ease-in-out transform hover:bg-white hover:text-blue-400">
        Book a Lesson Now!
      </a>
    </div>
  </RevealFrom>
  <RevealFrom
    triggerOnce={true}
    className="flex flex-col gap-5 md:w-1/2 w-full md:px-0 px-5 self-end align-bottom justify-start"
    initial={{ opacity: 0, x: 200 }}
    animateIn={{ opacity: 1, x: 0 }}
    threshold={0}
    rootMargin="0px 0px -20% 0px"
  >
    <div className="flex">
      <ParallaxContainer
        intensity={20}
        className=""
      >
        <div className="max-w-[700px] flex self-end align-bottom justify-start w-full xl:min-w-[600px] lg:min-w-[600px] md:min-w-[560px] sm:min-w-[570px] ml-[1px] xl:ml-[-60px] lg:ml-[-80px] md:ml-[-75px]">
          <img src="./chris-casey-2.png" alt="Profile Swing" className="mb-[-19px] opacity-95"/>
        </div>
      </ParallaxContainer>
    </div>
    
  </RevealFrom>
</div>
</div>

<SectionWithLine>
</SectionWithLine>

<div className="flex flex-col-reverse justify-between md:flex-row">
  {/*first half*/}
  <div className="md:w-1/2 w-full flex flex-col md:flex-row custom-py pr-10 md:pr-15 pl-0 md:pl-0 justify-end">
    <RevealFrom
      triggerOnce={true}
      className="flex align-middle 2xl:w-1/3 xl:w-1/2 l:w-1/2 w-full px-4 flex-col bg-blue-500 md:mt-0 mt-4"
      initial={{ opacity: 0, x: -200 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -30% 0px"
      delayIn={0.4}
    >
        <VideoWithOverlay
          src="./swing1.mp4"
          poster="./swing-1.jpg"
          aspectRatio="9/16"
          overlayClassName="bg-blue-700/85 backdrop-blur-xs"
          className="shadow-lg"
        />
        <p className="text-white font-roboto p-2">Before: Pushing the hands out in the takeaway, leading to no depth at the top. Then over the top and hitting scoopy fades.</p>
        <p className="text-white font-roboto p-2">After: Feeling like the hands stay close to his body throughout the swing. Patience in transition to drop the club on plane.</p>
    </RevealFrom>
    <RevealFrom
      triggerOnce={true}
      className="flex align-middle 2xl:w-1/3 xl:w-1/2 l:w-1/2 w-full px-4 flex-col bg-blue-500 md:mt-0 mt-4"
      initial={{ opacity: 0, x: -200 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -30% 0px"
      delayOut={0.4}
    >
        <VideoWithOverlay
          src="./low-fades-high-straight-balls-website.mp4"
          poster="./low-fades-high-straight-balls-website.jpg"
          aspectRatio="9/16"
          overlayClassName="bg-blue-700/85 backdrop-blur-xs"
          className="shadow-lg"
        />
        <p className="text-white font-roboto p-2">Before: Missing low and to the right from the upper body lunging too far ahead.</p>
        <p className="text-white font-roboto p-2">After: Got the hips extending sooner and upper body staying back behind the ball to add some loft.</p>
    </RevealFrom>
  </div>

  {/*second half*/}
  <div className="md:w-1/2 w-full flex justify-between py-10 md:py-1">

    <RevealFrom
      triggerOnce={true}
      className="flex justify-center flex-col md:justify-start align-middle self-center custom-px custom-py"
      initial={{ opacity: 0, x: 200 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -30% 0px"
    >
      <div className="flex flex-col align-middle max-w-2xl justify-center md:justify-start">
        <h3 className="font-header text-[2.5rem]/10 text-amber-200 font-semibold mb-8 text-center md:text-left">Elevate Your Golf Skills</h3>
        <h2 className="font-header text-white text-center md:text-left text-[1.1em]/5 2xl:text-[1.5em]/9 xl:text-[1.25em]/7 lg:text-[1.2em]/7 md:text-[1.1em]">Chris Casey is an <span className="font-bold">Experienced Golf Coach</span> located in <span className="font-bold">Lake Forest, CA</span>, with over <span className="font-bold">[X] years of experience</span> helping golfers of all skill levels improve their game. Whether you're a beginner looking to <span className="font-bold">refine your swing</span> or an advanced player aiming to <span className="font-bold">enhance your strategy</span>, Chris's personalized coaching ensures measurable results.</h2>
      </div>
      <div className="pt-10">
        <div className="flex flex-wrap shrink justify-center md:justify-start">
          <div className="rounded-full text-white mb-3 text-lg font-roboto outline px-6 py-2 mr-3">Certified Golf Instructor</div>
          <div className="rounded-full text-white mb-3 text-lg font-roboto outline px-6 py-2 mr-3">Proven Track Record</div>
          <div className="rounded-full text-white mb-3 text-lg font-roboto outline px-6 py-2 mr-3">Extensive Playing & Teaching Experience</div>
        </div>
      </div>
    </RevealFrom>
  </div>
</div>

<SectionWithLine>
</SectionWithLine>

<div className="flex flex-col justify-between md:flex-row custom-my py-10 md:py-1">
  {/*first half*/}
  <div className="md:w-1/2 w-full flex flex-col custom-px">
    <RevealFrom
      triggerOnce={true}
      className="text-right block"
      initial={{ opacity: 0, x: -200 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
    >
      <h3 className="font-header text-[2.5rem]/10 text-amber-200 font-semibold mb-4">Success Stories</h3>
      <p className="text-white text-lg">These reviews reflect the real progress our students are making.</p>
    </RevealFrom>
    <RevealFrom
      triggerOnce={true}
      className="flex justify-end mt-5 md:mt-20"
      initial={{ opacity: 0, x: -200 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
    >
      <Stars
        rating={5}
        name="Adam"
        review="Chris is a fantastic coach and an amazing golfer. He makes swing changes and adjustments extremely digestible and easy to understand."
      />
    </RevealFrom>
    <RevealFrom
      triggerOnce={true}
      className="flex justify-end mt-5 md:mt-20"
      initial={{ opacity: 0, x: -200 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
    >
      <Stars
        rating={5}
        name="Evan"
        review="Chris is a great golf instructor who quickly spots issues and helps you improve. I've definitely seen results on the course since working with him.."
      />
  </RevealFrom>
  </div>

  {/*second half*/}
  <div className="md:w-1/2 w-full flex flex-col custom-px">
    <RevealFrom
      triggerOnce={true}
      className="flex justify-start mt-5 md:mt-20"
      initial={{ opacity: 0, x: 200 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
    >
      <Stars
        rating={5}
        name="Reshad"
        review="Working with Chris has been incredibly productive for my game. He explains concepts in a way that's easy to understand and apply, which has made a huge difference for me."
      />
    </RevealFrom>
    <RevealFrom
      triggerOnce={true}
      className="flex justify-start mt-5 md:mt-20"
      initial={{ opacity: 0, x: 200 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
    >
      <Stars
        rating={5}
        name="Vinay"
        review="Chris is a great golf coach. He is really patient and understands the swing and the game. he helped me gain about anywhere to 15-30 yards of the tee consistently fairway balls."
      />
    </RevealFrom>
    <RevealFrom
      triggerOnce={true}
      className="flex justify-center md:justify-start mt-5 md:mt-20"
      initial={{ opacity: 0, x: 200 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
    >
      <div className="flex flex-wrap shrink justify-center md:justify-start">
        <a href="#contact" className="rounded-full font-semibold text-blue-400 mb-3 bg-amber-200 text-lg font-roboto outline px-12 py-5 mr-3 uppercase transition-all duration-300 ease-in-out transform hover:bg-white hover:text-blue-400">Contact Me</a>
        <a href="#reviews" className="font-semibold text-amber-200 text-lg font-roboto px-12 py-5 mr-3 uppercase transition-all duration-300 ease-in-out transform h hover:text-white">View More</a>
      </div>
    </RevealFrom>
  </div>
</div>
</section>
  );
}