import React from "react";
import { Helmet } from "react-helmet";
import { InView } from "react-intersection-observer";
import { SectionWithLine } from "../components/SectionWithLine";
import { RevealFrom } from "../components/RevealFrom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Stars } from '../components/Stars';

export function AboutSection() {

  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 1500], [0, -280]);
  const yOffsetSlow = useTransform(scrollY, [0, 2000], [0, -200]);

  return (

<section id="about" className="bg-gray-100 bg-[url('./dust.png')] bg-blend-soft-light bg-cover bg-center overflow-hidden text-gray-600">
<Helmet>
  <title>Learn More About Chris Casey Golf Instruction</title>
  <meta
    name="description"
    content="Explore Chris Casey's golf coaching services, including on-course and virtual lessons."
  />
</Helmet>
{/* Section 2 content with fade-in and slide-in */}
<div className="flex flex-col-reverse justify-center md:flex-row custom-px custom-my">
  {/*first half*/}
  <div className="md:w-1/2 w-full flex md:flex-row flex-row py-10 pl-5 md:pl-0 justify-between md:justify-end gap-6 custom-px">
  <RevealFrom
      triggerOnce={true}
      className="flex justify-end"
      initial={{ opacity: 0, y: 200 }}
      animateIn={{ opacity: 1, y: 150 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
      delayIn={0.4}
    >
    <motion.div
        className="relative overflow-visible
            bg-gradient-to-b from-green-600 to-green-900

            2xl:max-w-[340px]
            xl:max-w-[300px]
            lg:max-w-[280px]
            md:max-w-[255px]
            max-w-[310px]

            rounded-xl
            my-10

            xl:mt-[180px]  
            lg:mt-[100px]  
            md:mt-[200px]  
            sm:mt-[200px]  
            xs:mt-[200px]  
            2xs:mt-[200px]  
            3xs:mt-[240px]  
            mt-[60px]                 /* 50px top margin */

            lg:max-h-[500px]
            md:max-h-[420px]
            max-h-[400px]
            xl:mr-[0px]
            lg:-mr-[100px]
            md:-mr-[185px]
            sm:-mr-[185px]
            xs:-mr-[185px]
            2xs:-mr-[185px]
            3xs:-mr-[205px]
            -mr-[120px]
            flex flex-col justify-end   /* content aligned to bottom */
        "
        style={{ y: yOffsetSlow }}
        transition={{ duration: 1, ease: "easeOut" }}
        >
        <div className="max-w-[380px] 
        md:-ml-[90px] mr-5 
        -ml-[90px]
        ">
            <img
            src="./images/casey-golf-swing-finish.png"
            alt="Swing finish"
            loading="lazy"
            className="rounded-xl md:pt-20 pt-12"
            />
        </div>
    </motion.div>
    </RevealFrom>
    <RevealFrom
      triggerOnce={true}
      className="flex justify-end"
      initial={{ opacity: 0, y: 150 }}
      animateIn={{ opacity: 1, y: 150 }}
      threshold={0}
      rootMargin="0px 0px -10% 0px"
      delayIn={0.3}
    >
        <motion.div
          className="
          bg-gradient-to-br from-green-600 to-green-900
          max-w-[310px] 
          rounded-xl my-10 
          xl:max-h-[500px] 
          lg:max-h-[410px] 
          md:max-h-[380px] 
          max-h-[350px] 
          md:min-w-[235px]
          min-w-[225px]
          xl:mt-13
          lg:-mt-10
          md:-mt-18
          mt-8
          md:pt-25 
          pt-15 
          flex flex-col justify-end"
          style={{ y: yOffset }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
            <img className="rounded-xl" loading="lazy" src="./images/chris-casey-profile-1.png"/>
        </motion.div>
    </RevealFrom>
  </div>

  {/*second half*/}
  <div className="md:w-1/2 w-full flex justify-between py-20 md:py-1">

    <RevealFrom
      triggerOnce={true}
      className="flex justify-center flex-col md:justify-start align-middle self-center custom-px"
      initial={{ opacity: 0, x: 100 }}
      animateIn={{ opacity: 1, x: 0 }}
      threshold={0}
      rootMargin="0px 0px -20% 0px"
    >
      <div className="flex flex-col align-middle max-w-2xl justify-center md:justify-start">
        <h3 className="font-header 
        text-[clamp(2.3rem,2.5vw,3rem)]
        leading-[1.2]
        text-green-700 font-semibold mb-8 text-left md:text-left">Elevate Your Golf Skills</h3>
        <h2 className="font-roboto text-left md:text-left text-[1.2em]/7 2xl:text-[1.4em]/9 xl:text-[1.25em]/7 lg:text-[1.2em]/7 md:text-[1.1em]">Chris Casey is an <span className="font-bold">Experienced Golf Coach</span> located in <span className="font-bold">Lake Forest, CA</span>, with over <span className="font-bold">12 years of experience</span> helping golfers of all skill levels improve their game. Whether you're a beginner looking to <span className="font-bold">refine your swing</span> or an advanced player aiming to <span className="font-bold">enhance your strategy</span>, Chris's personalized coaching ensures measurable results.</h2>
      </div>
      <div className="pt-10">
        <div className="flex flex-wrap shrink justify-start md:justify-start">
          <div className="rounded-full mb-3 text-lg font-roboto outline px-6 py-2 mr-3">Certified Golf Instructor</div>
          <div className="rounded-full mb-3 text-lg font-roboto outline px-6 py-2 mr-3">Proven Track Record</div>
          <div className="rounded-full mb-3 text-lg font-roboto outline px-6 py-2 mr-3">Extensive Playing & Teaching Experience</div>
        </div>
      </div>
    </RevealFrom>
  </div>
</div>



<SectionWithLine>
</SectionWithLine>

</section>

    );
}