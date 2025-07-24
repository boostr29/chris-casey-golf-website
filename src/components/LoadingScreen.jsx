// src/components/LoadingScreen.jsx
import React, { useState, useEffect, useRef } from 'react';

const MIN_DISPLAY_TIME = 1000; // Minimum time to show loader (ms)
const FADE_DURATION = 500;     // Fade out duration (ms)

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [fading, setFading] = useState(false);
  
  const startTime = useRef(performance.now());
  const rafRef = useRef(null);
  const readyTime = useRef(null);

  // Check if page is actually ready
  useEffect(() => {
    const checkReady = () => {
      // Check multiple readiness conditions
      const isDocumentReady = document.readyState === 'complete';
      const areImagesLoaded = Array.from(document.images).every(img => img.complete);
      const areFontsLoaded = document.fonts ? document.fonts.ready : Promise.resolve();
      
      Promise.all([
        areFontsLoaded,
        // Add any other async resources you need to wait for
      ]).then(() => {
        if (isDocumentReady && areImagesLoaded) {
          readyTime.current = performance.now();
          setIsReady(true);
        }
      });
    };

    // Initial check
    checkReady();

    // Listen for load events
    const handleLoad = () => checkReady();
    const handleReadyStateChange = () => checkReady();
    
    window.addEventListener('load', handleLoad);
    document.addEventListener('readystatechange', handleReadyStateChange);

    return () => {
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('readystatechange', handleReadyStateChange);
    };
  }, []);

  // Handle progress animation
  useEffect(() => {
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime.current;
      const minTimeElapsed = elapsed >= MIN_DISPLAY_TIME;
      
      // Calculate progress based on time elapsed and readiness
      let targetProgress;
      
      if (!isReady) {
        // If not ready, progress slowly up to 90%
        targetProgress = Math.min((elapsed / (MIN_DISPLAY_TIME * 2)) * 90, 90);
      } else {
        // If ready, quickly fill to 100%
        const readyElapsed = currentTime - (readyTime.current || currentTime);
        targetProgress = 90 + Math.min((readyElapsed / 200) * 10, 10); // Quick fill from 90% to 100%
      }

      setProgress(targetProgress);

      // Check if we should finish
      if (isReady && minTimeElapsed && targetProgress >= 100) {
        setProgress(100); // Ensure exactly 100%
        
        // Start fade out
        setTimeout(() => {
          setFading(true);
          setTimeout(onFinish, FADE_DURATION);
        }, 100); // Small delay to show 100%
        
        return;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isReady, onFinish]);

  return (
    <div
      className={`
        fixed inset-0 bg-gradient-to-br from-green-800 to-green-900 
        flex items-center justify-center z-50 
        transition-opacity duration-500 ease-out
        ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <div className="w-11/12 max-w-sm px-4">
        {/* Progress bar */}
        <div className="h-3 bg-green-600/30 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-green-300 to-green-200 rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        {/* Percentage text */}
        <div className="mt-6 text-white text-2xl font-mono text-center">
          <span className="inline-block animate-pulse font-header">
            {Math.ceil(Math.min(progress, 100))}%
          </span>
        </div>
      </div>
    </div>
  );
}