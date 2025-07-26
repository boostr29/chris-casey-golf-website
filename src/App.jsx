// src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import LoadingScreen from "./components/LoadingScreen";
import GolfBallScene from "./components/GolfBallScene";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";

import NavSection from "./sections/NavSection";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { SwingSection } from "./sections/SwingSection";
import { ContactSection } from "./sections/ContactSection";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  

  // Show loading screen until everything is ready
  if (!loaded) {
    return <LoadingScreen onFinish={() => setLoaded(true)} />;
  }

  return (
    <>
      {/* Enhanced SEO & Meta */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chris Casey Golf Instruction - Professional Golf Lessons in Lake Forest, CA</title>
        <meta
          name="description"
          content="Professional golf instruction with Chris Casey in Lake Forest, California. Personalized golf lessons, swing analysis, and coaching for all skill levels. Book on-course or virtual lessons today."
        />
        <meta
          name="keywords"
          content="golf instructor Lake Forest CA, golf lessons Orange County, PGA golf coach, golf swing instruction, personalized golf lessons, on-course golf lessons, virtual golf lessons, Chris Casey golf"
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.chriscaseygolf.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Lake Forest" />
        <meta name="geo.position" content="33.6470;-117.6892" />
        <meta name="ICBM" content="33.6470, -117.6892" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Chris Casey Golf Instruction - Professional Golf Lessons" />
        <meta property="og:description" content="Professional golf instruction with Chris Casey in Lake Forest, California. Personalized lessons for all skill levels." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.chriscaseygolf.com" />
        <meta property="og:image" content="https://www.chriscaseygolf.com/chris-casey-profile-swing-1.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Chris Casey Golf Instruction" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chris Casey Golf Instruction - Professional Golf Lessons" />
        <meta name="twitter:description" content="Professional golf instruction in Lake Forest, CA. Personalized lessons for all skill levels." />
        <meta name="twitter:image" content="https://www.chriscaseygolf.com/chris-casey-profile-swing-1.webp" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Chris Casey" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Combined Business & Reviews Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Chris Casey Golf Instruction",
              "description": "Professional golf instruction and coaching for all skill levels. Offering personalized on-course and virtual lessons in Lake Forest, CA.",
              "image": "https://www.chriscaseygolf.com/chris-casey-profile-swing-1.webp",
              "url": "https://www.chriscaseygolf.com",
              "telephone": "+1-631-704-4851",
              "email": "christopherdcasey1@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "21088 Bake Parkway, Unit 108",
                "addressLocality": "Lake Forest",
                "addressRegion": "CA",
                "postalCode": "92630",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.6470",
                "longitude": "-117.6892"
              },
              "openingHours": [
                "Mo-Sa 06:00-18:00"
              ],
              "priceRange": "$$",
              "serviceType": [
                "Golf Lessons",
                "Golf Instruction", 
                "Golf Coaching",
                "Swing Analysis",
                "On-Course Lessons",
                "Virtual Golf Lessons",
                "Golf Simulator",
                "Indoor Golf Lessons"
              ],
              "areaServed": [
                "Lake Forest",
                "Irvine", 
                "Mission Viejo",
                "Laguna Hills",
                "Rancho Santa Margarita",
                "Orange County",
                "San Juan Capistrano"
              ],
              "founder": {
                "@type": "Person",
                "name": "Chris Casey",
                "jobTitle": "Golf Instructor",
                "description": "Professional golf instructor specializing in personalized golf lessons and swing analysis"
              },
              "sameAs": [
                "https://instagram.com/crispycaseygolf"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "8",
                "bestRating": "5"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Adam"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Chris is a fantastic coach and an amazing golfer. He makes swing changes and adjustments extremely digestible and easy to understand. I've been working with him for 3 months and if you saw my swing 3 months ago you wouldn't even recognize it. I've shot my lowest rounds since working with him."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "JG"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Chris has helped me make significant improvements, and his attention to detail with swing analysis has really set him apart. He takes the time to break down each aspect of my swing, using cutting-edge tools and personalized feedback."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person", 
                    "name": "Andrew"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "reviewBody": "Chris is able to easily identify issues and how to correct them. You spend the majority of your sessions actually practicing and getting better. He has also helped with my wedge game."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Vinay"
                  },
                  "reviewRating": {
                    "@type": "Rating", 
                    "ratingValue": "5"
                  },
                  "reviewBody": "Chris is a great golf coach. He is really patient and understands the swing and the game. He helped me gain about anywhere to 15-30 yards off the tee consistently."
                }
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
                      "description": "One-on-one personalized golf instruction"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "On-Course Golf Lessons",
                      "description": "Real-world golf instruction on the course"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Indoor Golf Lessons",
                      "description": "Indoor golf simulator instruction and swing analysis"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Virtual Golf Lessons",
                      "description": "Remote golf instruction and swing analysis"
                    }
                  }
                ]
              }
            }
          `}
        </script>
        
        {/* Person Schema for Chris Casey */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Chris Casey",
              "jobTitle": "Golf Instructor",
              "description": "Professional golf instructor in Lake Forest, California, specializing in personalized golf lessons and swing improvement for players of all skill levels.",
              "url": "https://www.chriscaseygolf.com",
              "image": "https://www.chriscaseygolf.com/chris-casey-profile-swing-1.webp",
              "telephone": "+1-631-704-4851",
              "email": "christopherdcasey1@gmail.com",
              "workLocation": {
                "@type": "Place",
                "name": "Lake Forest, CA",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Lake Forest",
                  "addressRegion": "CA",
                  "addressCountry": "US"
                }
              },
              "knowsAbout": [
                "Golf Instruction",
                "Golf Coaching", 
                "Swing Analysis",
                "Golf Fundamentals",
                "Course Management",
                "Golf Technique"
              ],
              "sameAs": [
                "https://instagram.com/crispycaseygolf"
              ]
            }
          `}
        </script>

        {/* WebSite Schema for better site understanding */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Chris Casey Golf Instruction",
              "alternateName": "Chris Casey Golf",
              "url": "https://www.chriscaseygolf.com",
              "description": "Professional golf instruction and coaching in Lake Forest, California. Personalized lessons, swing analysis, and proven techniques for golfers of all skill levels.",
              "inLanguage": "en-US",
              "copyrightYear": "2025",
              "copyrightHolder": {
                "@type": "Person",
                "name": "Chris Casey"
              },
              "publisher": {
                "@type": "LocalBusiness",
                "name": "Chris Casey Golf Instruction"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.chriscaseygolf.com#contact",
                "query-input": "required name=search_term_string"
              },
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "Chris Casey Golf Instruction"
              }
            }
          `}
        </script>
      </Helmet>

      {/* 3D golf ball overlay */}
      <GolfBallScene />

      {/* Site navigation & sections */}
      <NavSection />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <SwingSection />
      {/* <ContactSection /> */}
      <ContactSection onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}

export default App;