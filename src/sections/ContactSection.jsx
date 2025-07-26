// src/sections/ContactSection.jsx
import React, {useState} from "react";
import { RevealFrom } from "../components/RevealFrom";

export function ContactSection({ onOpenPrivacy }) {
  return (
    <section id="contact" className="relative bg-[url('/images/grass-green-golf.jpg')] bg-cover bg-center overflow-hidden custom-px custom-py m-0 pb-0">
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/70 to-green-800/60"></div>
        
        {/* Content with relative positioning to appear above overlay */}
        <div className="relative z-1">
        
        {/* Section 4 content */}

    <div className="flex flex-col lg:flex-row gap-10 pt-25 md:pt-10 pb-20">
        <div className="lg:w-1/2 w-full">
            <RevealFrom
            triggerOnce={true}
            className="mb-20 px-3"
            initial={{ opacity: 0, x: -100 }}
            animateIn={{ opacity: 1, x: 0 }}
            threshold={0}
            rootMargin="0px 0px -16% 0px"
            >
                <h2 className="font-header 
                    text-[clamp(2.4rem,6.2vw,4.4rem)]
                    leading-[1.2] uppercase
                    text-gray-100 font-semibold mb-4">
                    Start Your Golf Journey
                </h2>
                <p className="font-roboto text-gray-100 text-[1.3rem]/8 pt-5">I'd love to hear from you! Whether you're interested in booking a lesson, asking a question, or just want more information, feel free to reach out.</p>
            </RevealFrom>
            <div className="contact-info mb-8 flex flex-wrap justify-start align-middle wrap-normal font-roboto md:px-2 px-1">
                <RevealFrom
                triggerOnce={true}
                className="mb-4"
                initial={{ opacity: 0, x: -100 }}
                animateIn={{ opacity: 1, x: 0 }}
                threshold={0}
                rootMargin="0px 0px -6% 0px"
                >
                {/* Phone with icon */}
                <a href="tel:+1-631-704-4851" className="contact-link">
                    <div className="rounded-full bg-amber-300 p-4 transition duration-300 hover:bg-white hover:text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>
                    <p className="pl-2 pr-6 whitespace-nowrap contact-text">+1 (631) 704-4851</p>
                </a>
                </RevealFrom>
                <RevealFrom
                triggerOnce={true}
                className="mb-4"
                initial={{ opacity: 0, x: -100 }}
                animateIn={{ opacity: 1, x: 0 }}
                threshold={0}
                rootMargin="0px 0px -16% 0px"
                >
                {/* Email with icon */}
                <a href="mailto:christopherdcasey1@gmail.com" className="contact-link">
                <div className="rounded-full bg-amber-300 p-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg></div>
                    <p className="pl-2 pr-6 contact-text flex-wrap">christopherdcasey1@gmail.com</p>
                </a>
                </RevealFrom>
                <RevealFrom
                triggerOnce={true}
                className="mb-4"
                initial={{ opacity: 0, x: -100 }}
                animateIn={{ opacity: 1, x: 0 }}
                threshold={0}
                rootMargin="0px 0px -26% 0px"
                >
                {/* Address with icon */}
                <a href="https://maps.app.goo.gl/PNoHntsKr1t3x7sW8" target="_blank" className="contact-link">
                    <div className="rounded-full bg-amber-300 hover:bg-white hover:text-green-600 transition duration-300 p-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg></div>
                    <p className="pl-4 pr-6 text-center contact-text">21088 Bake Pkwy, Unit 108, Lake Forest, CA 92630</p>
                </a>
                </RevealFrom>
            </div>
        </div>

        <RevealFrom
            triggerOnce={true}
            className="relative w-full lg:w-1/2 h-[500px] sm:h-[400px] md:h-[500px] lg:h-207 xl:h-190 2xl:h-205 3xl:h-[540px]"
            initial={{ opacity: 0, x: 100 }}
            animateIn={{ opacity: 1, x: 0 }}
            threshold={0}
            rootMargin="0px 0px -16% 0px"
            >
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d415.1319075668484!2d-117.70061399999999!3d33.65573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce9f5b59a7a43%3A0x2cfd1fe04fd7abb9!2sChris%20Casey%20Golf%20Instruction!5e0!3m2!1sen!2sus!4v1752730671517!5m2!1sen!2sus"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                title="Chris Casey Golf Instruction Map"
            ></iframe>
        </RevealFrom>
    </div>
    <div className="flex flex-col pb-15 mt-10">
  <h3 className="text-green-200 font-header
      text-[clamp(2rem,8.4vw,5.2rem)]
        leading-[1.1]
        uppercase
          animate-[pulse_1s_ease-in-out_infinite]
          text-center wrap-break-word
          drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]
        ">
          Chris Casey Golf Instruction
      </h3>
      <section id="hole" className="flex max-w-[350px] md:max-w-[380px] lg:max-w-[400px] justify-center align-middle self-center mt-10">
          <img loading="lazy" alt="Putting Green Golf Hole" src="/images/golf-hole.png"/>
      </section>
      <div className="flex flex-col justify-center mt-10 align-center">
          <p className="font-header text-white/70 uppercase text-center text-[clamp(0.6rem,8vw,0.85rem)] leading-0.8">&copy; 2025 Copyright Chris Casey Golf Instruction. All Rights Reserved. </p>
            <button onClick={onOpenPrivacy}
              className="text-white/70 hover:text-green-300 transition duration-300 font-header uppercase cursor-pointer text-[clamp(0.6rem,8vw,0.85rem)] leading-0.8"
            >
              Privacy Policy
            </button>
      </div>
      
</div>

        </div>
        {/* End of content wrapper */}
        
{/* Breadcrumb Schema */}
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.chriscaseygolf.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://www.chriscaseygolf.com#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://www.chriscaseygolf.com#services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Reviews",
        "item": "https://www.chriscaseygolf.com#reviews"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://www.chriscaseygolf.com#contact"
      }
    ]
  }
`}
</script>

{/* Enhanced Local Business Hours Schema */}
<script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Chris Casey Golf Instruction",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "06:00",
        "closes": "18:00"
      }
    ],
    "telephone": "+1-631-704-4851",
    "email": "christopherdcasey1@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "21088 Bake Parkway, Unit 108",
      "addressLocality": "Lake Forest",
      "addressRegion": "CA",
      "postalCode": "92630",
      "addressCountry": "US"
    }
  }
`}
</script>

    </section>
  );
}