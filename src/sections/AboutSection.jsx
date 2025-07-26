import React from "react";
import { SectionWithLine } from "../components/SectionWithLine";
import { RevealFrom } from "../components/RevealFrom";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutSection() {

  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 1500], [0, -280]);
  const yOffsetSlow = useTransform(scrollY, [0, 2000], [0, -200]);

  return (

<section id="about" className="bg-gray-100 bg-[url('/images/dust.png')] bg-blend-soft-light bg-cover bg-center overflow-hidden text-gray-700">

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
        transition={{ duration: 90, ease: "easeOut" }}
        >
        <div className="max-w-[380px] 
        md:-ml-[90px] mr-5 
        -ml-[90px]
        ">
            <img
            src="./images/casey-golf-swing-finish.png"
            alt="Chris Casey golf instructor demonstrating perfect swing finish position in Lake Forest CA"
            loading="lazy"
            className="rounded-xl md:pt-20 pt-12 z-10"
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
          bg-gradient-to-b from-green-600 to-green-900
          max-w-[310px] 
          rounded-xl my-10 
          xl:max-h-[500px] 
          lg:max-h-[410px] 
          md:max-h-[380px] 
          max-h-[370px] 
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
          transition={{ duration: 100, ease: "easeOut" }}
        >
            <img 
              className="rounded-xl z-0" 
              loading="lazy" 
              src="./images/chris-casey-profile-1.png"
              alt="Chris Casey professional golf instructor profile photo Lake Forest California"
            />
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
        <h2 className="font-header 
        text-[clamp(2.3rem,2.5vw,3rem)]
        leading-[1.2]
        text-green-700 font-semibold mb-8 text-left md:text-left">Elevate Your Golf Skills</h2>
        <p className="font-roboto text-left md:text-left text-[1.2em]/7 2xl:text-[1.4em]/9 xl:text-[1.25em]/7 lg:text-[1.2em]/7 md:text-[1.1em]">
        Hi there! <strong>I'm Chris Casey</strong>, an <strong>experienced golf instructor</strong> located in <strong>Lake Forest, California</strong>, with over <strong>12 years of experience</strong> helping golfers of all skill levels improve their game. Whether you're a beginner looking to <strong>refine your swing technique</strong> or an advanced player aiming to <strong>enhance your course strategy</strong>, my personalized golf coaching ensures measurable results and lower scores.
        </p>
      </div>
      <div className="pt-10">
        <div className="flex flex-wrap shrink justify-start md:justify-start">
          <div className="rounded-full mb-3 text-lg font-roboto outline px-6 py-2 mr-3">Certified Golf Instructor</div>
          <div className="rounded-full mb-3 text-lg font-roboto outline px-6 py-2 mr-3">Proven Track Record</div>
          <div className="rounded-full mb-3 text-lg font-roboto outline px-6 py-2 mr-3">12+ Years Experience</div>
        </div>
      </div>
    </RevealFrom>
  </div>
</div>

<SectionWithLine>
</SectionWithLine>

{/* FAQ Schema for SEO */}
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What experience does Chris Casey have as a golf instructor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chris Casey has over 12 years of experience as a certified golf instructor in Lake Forest, California, helping golfers of all skill levels improve their game through personalized coaching and proven techniques."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Chris Casey Golf Instruction located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chris Casey Golf Instruction is located in Lake Forest, California, serving the broader Orange County area including Irvine, Mission Viejo, and Rancho Santa Margarita."
        }
      },
      {
        "@type": "Question",
        "name": "What types of golf lessons does Chris Casey offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chris Casey offers private golf lessons, on-course instruction, indoor golf simulator lessons, and virtual golf coaching to help players improve their swing technique and course strategy."
        }
      }
    ]
  }
`}
</script>

</section>

    );
}