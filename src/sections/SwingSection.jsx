// src/sections/SwingSection.jsx
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { RevealFrom } from '../components/RevealFrom';
import { VideoWithOverlay } from "../components/VideoWithOverlay";

export function SwingSection() {

    // get scrollY and map [0px → 500px] → [0px → 100px] downward
    const { scrollY } = useScroll();
    const yOffset = useTransform(scrollY, [0, 500], [0, 100]);

  return (

    <section id="swing" className="bg-gray-300 bg-[url('/images/dust-2.png')] bg-blend-soft-light bg-auto bg-center overflow-hidden">
    {/* Section 3 content */}
    <div className="flex xs:flex-row flex-col justify-center mb-5 custom-px
        mx-2">
        <h3 className="font-header sm:text-center text-left text-green-700
        text-[clamp(1.65rem,4.8vw,2rem)]
        leading-[1.2]
        mb-2
        ">
            Proven Techniques
        </h3>
        <div className="xl:invisible visible text-white pt-1 ml-3">
            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              loading="lazy"
              aspectRatio="9/16"
              overlayClassName="bg-gradient-to-b from-green-700/80 to-green-500/80 rounded-lg"
              className="shadow-sm rounded-lg cursor-pointer"
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
              loading="lazy"
              aspectRatio="9/16"
              overlayClassName="bg-gradient-to-b from-green-700/80 to-green-500/80 rounded-lg"
              className="shadow-sm rounded-lg cursor-pointer"
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
              loading="lazy"
              aspectRatio="9/16"
              overlayClassName="bg-gradient-to-b from-green-700/80 to-green-500/80 rounded-lg"
              className="shadow-sm rounded-lg cursor-pointer"
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
              loading="lazy"
              aspectRatio="9/16"
              overlayClassName="bg-gradient-to-b from-green-700/80 to-green-500/80 rounded-lg"
              className="shadow-sm rounded-lg cursor-pointer"
            />
        </div>
      </RevealFrom>
    </div>

{/* Video Schema for swing demonstration videos */}
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Golf Swing Improvement Techniques by Chris Casey",
    "description": "Watch real golf swing transformations and proven techniques demonstrated by professional golf instructor Chris Casey in Lake Forest, CA",
    "thumbnailUrl": "https://www.chriscaseygolf.com/images/before-after.jpg",
    "uploadDate": "2024-01-01",
    "duration": "PT30S",
    "contentUrl": "https://www.chriscaseygolf.com/videos/swing-bd-ba_1.mp4",
    "embedUrl": "https://www.chriscaseygolf.com#swing",
    "author": {
      "@type": "Person",
      "name": "Chris Casey",
      "jobTitle": "Golf Instructor",
      "worksFor": {
        "@type": "Organization",
        "name": "Chris Casey Golf Instruction"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chris Casey Golf Instruction",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.chriscaseygolf.com/images/chris-casey-golf-instruction-logo-web.png"
      }
    }
  }
`}
</script>
  </section>
  );
}