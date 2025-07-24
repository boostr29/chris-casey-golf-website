// src/sections/SwingSection.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { useScroll, useTransform } from "framer-motion";
import { RevealFrom } from '../components/RevealFrom';
import { VideoWithOverlay } from "../components/VideoWithOverlay";

export function SwingSection() {

    // get scrollY and map [0px → 500px] → [0px → 100px] downward
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 500], [0, 100]);

  return (

    <section id="swing" className="bg-green-800 overflow-hidden">
    <Helmet>
      <title>Reviews - Chris Casey Golf Instruction</title>
      <meta
        name="description"
        content="Read reviews from satisfied students who improved their golf game with Chris Casey."
      />
    </Helmet>
    {/* Section 3 content */}
    <div className="flex xs:flex-row flex-col justify-center mt-8 mb-5 custom-px
        mx-2">
        <h3 className="font-header sm:text-center text-left text-gray-200
        text-[clamp(1.65rem,4.8vw,2rem)]
        leading-[1.2]
        mb-2
        ">
            Proven Techniques
        </h3>
        <div className="xl:invisible visible text-white pt-1 ml-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
        </div>
    </div>
    <div className="flex flex-row gap-5 custom-px pb-30 overflow-x-auto overflow-y-hidden whitespace-nowrap w-full mx-auto no-scrollbar">
      <RevealFrom
        triggerOnce={true}
        className="swing-section-video"
        initial={{ opacity: 0, y: 50 }}
        animateIn={{ opacity: 1, y: 0 }}
        threshold={0}
        rootMargin="0px 0px -15% 0px"
        delayIn={0.5}
      >
        <div className="flex flex-col md:flex-row">
            <VideoWithOverlay
              src="./videos/swing-bd-ba_1.mp4"
              poster="./images/before-after.jpg"
              aspectRatio="9/16"
              overlayClassName="bg-green-600/80 rounded-lg"
              className="shadow-lg rounded-lg"
            />
        </div>
      </RevealFrom>
      <RevealFrom
        triggerOnce={true}
        className="swing-section-video"
        initial={{ opacity: 0, y: 50 }}
        animateIn={{ opacity: 1, y: 0 }}
        threshold={0}
        rootMargin="0px 0px -20% 0px"
        delayOut={0.4}
      >
        <div className="flex flex-col md:flex-row">
            <VideoWithOverlay
              src="./videos/Jordan-swing-edited.mp4"
              poster="./images/jordan-swing.jpg"
              aspectRatio="9/16"
              overlayClassName="bg-green-600/80 rounded-lg"
              className="shadow-lg rounded-lg"
            />
        </div>
      </RevealFrom>
      <RevealFrom
        triggerOnce={true}
        className="swing-section-video"
        initial={{ opacity: 0, y: 50 }}
        animateIn={{ opacity: 1, y: 0 }}
        threshold={0}
        rootMargin="0px 0px -17% 0px"
        delayOut={0.3}
      >
        <div className="flex flex-col md:flex-row">
            <VideoWithOverlay
              src="./videos/the-drill-updated.mp4"
              poster="/images/the-drill.jpg"
              aspectRatio="9/16"
              overlayClassName="bg-green-600/80 rounded-lg"
              className="shadow-lg rounded-lg"
            />
        </div>
      </RevealFrom>
      <RevealFrom
        triggerOnce={true}
        className="swing-section-video"
        initial={{ opacity: 0, y: 50 }}
        animateIn={{ opacity: 1, y: 0 }}
        threshold={0}
        rootMargin="0px 0px -16% 0px"
        delayIn={0.3}
      >
        <div className="flex flex-col md:flex-row">
            <VideoWithOverlay
              src="./videos/andrew-swing-edited.mp4"
              poster="./images/andrew-swing-edited.jpg"
              aspectRatio="9/16"
              overlayClassName="bg-green-600/80 rounded-lg"
              className="shadow-lg rounded-lg"
            />
        </div>
      </RevealFrom>
    </div>
  </section>
  );
}