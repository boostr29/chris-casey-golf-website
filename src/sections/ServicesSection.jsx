import React, { useRef } from "react";
import { InView } from "react-intersection-observer";
import { RevealFrom } from "../components/RevealFrom";
import { VideoWithOverlay } from "../components/VideoWithOverlay";
import { motion, useScroll, useTransform } from "framer-motion";

export function ServicesSection() {

  // Create refs for each parallax container
  const fastRef = useRef(null);
  const slowRef = useRef(null);

  // Parallax #1: scroll from element top→bottom maps 0→1, then y:  0→-280px
  const { scrollYProgress: fastProgress } = useScroll({
    target: fastRef,
    offset: ["start end", "end start"],
  });
  const yFast = useTransform(fastProgress, [0, 1], [0, -360]);

  // Parallax #2: same idea but only -200px total
  const { scrollYProgress: slowProgress } = useScroll({
    target: slowRef,
    offset: ["start end", "end start"],
  });
  const ySlow = useTransform(slowProgress, [0, 1], [0, -220]);

    return (

<section id="services" className="bg-gray-200 bg-[url('/images/dust.png')] bg-blend-soft-light bg-cover bg-center overflow-hidden text-gray-700">

{/* Section 2 content with fade-in and slide-in */}
<div className="flex flex-col justify-between md:flex-row custom-px custom-my gap-5">
  {/*first half*/}
  <div className="md:w-1/2 w-full flex justify-end">

<RevealFrom
  triggerOnce={true}
  className="flex justify-center flex-col md:justify-end align-middle self-center md:px-8 px-4 max-w-3xl"
  initial={{ opacity: 0, x: -100 }}
  animateIn={{ opacity: 1, x: 0 }}
  threshold={0}
  rootMargin="0px 0px -15% 0px"
>
  <div className="flex flex-col align-middle justify-center md:justify-end mt-20 md:mt-5">
    <h3 className="font-header 
      text-[clamp(2.3rem,2.5vw,3rem)]
        leading-[1.2]
    text-green-700 font-semibold mb-8 text-left md:text-right">Let's Fix Your Golf Swing!</h3>
    <p className="font-roboto text-left md:text-right text-[1.2em]/7 2xl:text-[1.4em]/9 xl:text-[1.25em]/7 lg:text-[1.2em]/7 md:text-[1.1em]"><strong>A Closer Look at Swing Improvements</strong>. Watch how a few adjustments can drastically change your swing. These videos highlight the difference that <strong>personalized coaching</strong> can make, turning good swings into great ones. <br/><br/><strong>Ready to see the results for yourself?</strong></p>
  </div>
  <div className="pt-10">
    <div className="flex flex-wrap shrink justify-center md:justify-end">
      <a href="#contact" className="main-button">
              Get Started Today
            </a>
    </div>
  </div>
</RevealFrom>
</div>
  <div className="md:w-1/2 w-full flex flex-row md:pt-14 pb-14 px-1 pt-5 justify-between md:justify-start gap-5 -mt-15 md:mt-0 overflow-x-auto overflow-y-hidden whitespace-wrap no-scrollbar md:pl-10">
    <RevealFrom
      triggerOnce={true}
      className="flex align-middle self-center justify-center 2xl:w-1/2 xl:w-1/2 l:w-1/2 w-full flex-col md:mt-0 mt-30 max-w-[310px] min-w-[230px]"
      initial={{ opacity: 0, y: 100 }}
      animateIn={{ opacity: 1, y: 130 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
      delayIn={0.4}
    >
      <motion.div ref={fastRef} style={{ y: yFast }} className="flex flex-col">
        <VideoWithOverlay
          src="./videos/swing1.mp4"
          poster="./images/swing-1.jpg"
          loading="lazy"
          aspectRatio="9/16"
          overlayClassName="bg-gradient-to-b from-green-600/90 to-green-800/90"
          className="rounded-xl shadow-sm cursor-pointer"
        />
        <div className="outline rounded-xl p-1 mt-4">

        <p className="font-roboto p-2">Before: Pushing the hands out in the takeaway, no depth at the top. Over the top & scoopy fades.</p>
        <p className="font-roboto p-2">After: Feeling the hands stay close to body through swing. Patience in transition to drop the club on plane.</p>
      
        </div>
      </motion.div>
    </RevealFrom>
    <RevealFrom
      triggerOnce={true}
      className="flex align-middle self-center justify-center 2xl:w-1/2 xl:w-1/2 l:w-1/2 w-full flex-col md:mt-30 mt-4 max-w-[310px] min-w-[230px]"
      initial={{ opacity: 0, y: 300 }}
      animateIn={{ opacity: 1, y: 150 }}
      threshold={0}
      rootMargin="0px 0px -30% 0px"
      delayOut={0.6}
    >
      <motion.div ref={slowRef} style={{ y: ySlow }} className="flex flex-col">
        <VideoWithOverlay
          src="./videos/low-fades-high-straight-balls-website.mp4"
          poster="./images/low-fades-high-straight-balls-website.jpg"
          loading="lazy"
          aspectRatio="9/16"
          overlayClassName="
          bg-gradient-to-b from-green-600/80 to-green-800/90
          backdrop-blur-[1px]"
          className="rounded-xl shadow-sm cursor-pointer"
        />        <div className="outline rounded-xl p-1 mt-4">
        <p className="font-roboto p-2">Before: Missing low and to the right from the upper body lunging too far ahead.</p>
        <p className="font-roboto p-2">After: Got the hips extending sooner and upper body staying back behind the ball to add some loft.</p>
      </div>
      </motion.div>
    </RevealFrom>
  </div>

  {/*second half*/}

</div>

<div className="flex flex-col lg:flex-row p-5 gap-5">
<InView triggerOnce threshold={0} rootMargin="-20% 0px -20% 0px">
  {({ inView, ref }) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -200 }}
      transition={{ duration: 0.6 }}
      className="relative w-full lg:w-1/2 overflow-hidden custom-py custom-px rounded-2xl"
    >
      {/* 1) BG image + grayscale */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/golf-simulator.jpg')]
          bg-cover bg-center
          filter opacity-85
        "
      />

      {/* 2) Color overlay (blue at 50%) */}
      <div
        className="
          absolute inset-0
          bg-green-600/50
        "
      />

      {/* 3) Your actual content on top */}
      <div className="relative z-10">
        <p className="font-header text-gray-200 mt-1 mb-8 text-right pt-10 md:pt-0
        text-[clamp(1.8rem,4.8vw,4.8rem)]
        leading-[1.2] uppercase">
          Indoor<br/>Training
        </p>
        <div className="flex flex-wrap text-[#207e5b] justify-end pb-10 md:pb-0">
          <div className="indoor-div">Personalized, Tech-Driven Sessions</div>
          <div className="indoor-div">Convenient, Year-Round Practice</div>
          <div className="indoor-div">Perfect for Beginners and Intermediate Players</div>
          <div className="indoor-div">Virtual Training Flexibility</div>
          <div className="indoor-div">Swing Analysis and Metrics</div>
          <div className="indoor-div">Focus on Fundamentals and Technique</div>
          <div className="indoor-div">Controlled Environment for Immediate Adjustments</div>
        </div>
     </div>
    </motion.div>
  )}
</InView>

<InView triggerOnce threshold={0} rootMargin="-20% 0px -20% 0px">
  {({ inView, ref }) => (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 200 }}
      transition={{ duration: 0.6 }}
      className="relative w-full lg:w-1/2 overflow-hidden custom-py custom-px rounded-2xl"
    >
      {/* BG + grayscale */}
      <div
        className="
          absolute inset-0
          bg-[url('/images/golf-course-training.jpg')]
          bg-cover bg-center
        "
      />

      {/* Overlay color */}
      <div
        className="
          absolute inset-0
          bg-green-600/60
        "
      />

      {/* Content */}
      <div className="z-10 relative">
        <p className="font-header text-gray-200 mt-1 mb-8 text 
        text-[clamp(1.8rem,4.8vw,4.8rem)]
        leading-[1.2] uppercase
        pt-10 md:pt-0">
          On-Course<br/>Training
        </p>
        <div className="flex flex-wrap justify-start pb-10 md:pb-0">
          <div className="on-course-div">Real-World Application of Skills</div>
          <div className="on-course-div">Course Management Techniques</div>
          <div className="on-course-div">Improve Mental Toughness and Focus</div>
          <div className="on-course-div">Learn to Play with Confidence in Real-Time</div>
          <div className="on-course-div">Strategy and Shot Execution</div>
          <div className="on-course-div">Shot Practice Under Pressure</div>
          <div className="on-course-div">Play with Purpose and Enjoyment</div>
          <div className="on-course-div">Focus on Game Improvement, Not Just Technique</div>
        </div>
        </div>
        </motion.div>
     )}
</InView>
</div>

{/* Service Schema for better search visibility */}
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Golf Instruction Services",
    "description": "Professional golf lessons including swing analysis, on-course training, and indoor simulator instruction in Lake Forest, CA",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chris Casey Golf Instruction",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lake Forest",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": [
      "Lake Forest, CA",
      "Orange County, CA",
      "Irvine, CA",
      "Mission Viejo, CA"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Golf Instruction Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Golf Lessons",
            "description": "One-on-one personalized golf instruction focusing on swing improvement and technique refinement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Indoor Golf Simulator Training",
            "description": "Year-round golf instruction using advanced simulator technology for swing analysis and practice"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "On-Course Golf Lessons",
            "description": "Real-world golf instruction on the course focusing on strategy, course management, and practical application"
          }
        }
      ]
    }
  }
`}
</script>

</section>

    );
}