// src/App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import LoadingScreen from "./components/LoadingScreen";
import GolfBallScene from "./components/GolfBallScene";

import NavSection from "./sections/NavSection";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ReviewsSection } from "./sections/ReviewsSection";
import { SwingSection } from "./sections/SwingSection";
import { ContactSection } from "./sections/ContactSection";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  // Show loading screen until everything is ready
  if (!loaded) {
    return <LoadingScreen onFinish={() => setLoaded(true)} />;
  }

  return (
    <>
      {/* SEO & Meta */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chris Casey Golf Instruction</title>
        <meta
          name="description"
          content="Chris Casey offers personalized golf lessons in Lake Forest, CA. Book on-course or virtual lessons today."
        />
        <meta
          name="keywords"
          content="Golf lessons, golf instructor, Lake Forest, Orange County, Irvine, Rancho Santa Margarita, golf course lessons, virtual golf lessons"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "GolfCourse",
              "name": "Chris Casey Golf Instruction",
              "description": "Personalized golf lessons and coaching for all skill levels. Offering on-course and virtual lessons in Lake Forest, CA.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "21088 Bake Parkway",
                "addressLocality": "Lake Forest",
                "addressRegion": "CA",
                "postalCode": "92630",
                "addressCountry": "US"
              },
              "telephone": "+1-631-704-4851",
              "url": "https://www.chriscaseygolf.com",
              "sameAs": ["https://instagram.com/crispycaseygolf"],
              "openingHours": "Mo-Sa 06:00-18:00",
              "priceRange": "$$",
              "image": "https://www.chriscaseygolf.com/chris-casey-profile-swing-1.webp"
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
      <ContactSection />

      {/* First modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-4 rounded-md mb-4"
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-2">Welcome to the Modal!</h2>
            <p>This is a sample modal.</p>
          </div>
        </motion.div>
      )}

      {/* Second modal */}
      {isSecondModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeSecondModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeSecondModal}
              className="bg-red-500 text-white py-2 px-4 rounded-md mb-4"
            >
              Close
            </button>
            <h2 className="text-2xl font-bold mb-2">
              This is the Second Modal
            </h2>
            <p>This is another modal with a fade-in/out animation.</p>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default App;