// src/components/VideoWithOverlay.jsx
import React, { useRef, useState } from "react";

export function VideoWithOverlay({
  src,
  poster,
  aspectRatio = "9/16",            // e.g. "9/16" for portrait, "16/9" for landscape
  overlayClassName = "bg-green-600", // Tailwind classes for overlay color & opacity
  className = "",
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;

    if (vid.paused) {
      vid.muted = true;
      vid.play().catch(console.error);
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Video element with grayscale when not playing */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        preload="metadata"
        playsInline
        onClick={handleTogglePlay}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className={`absolute inset-0 w-full h-full object-cover filter ${
          isPlaying ? "grayscale-0" : "grayscale"
        }`}
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0
          ${overlayClassName}
          cursor-pointer
          transition-opacity duration-500 ease-in-out
          ${isPlaying ? "opacity-0" : "opacity-100"}
        `}
      />

      {/* Play/Pause Button */}
      <button
        onClick={handleTogglePlay}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-500 ease-in-out cursor-pointer
          ${isPlaying ? "opacity-0" : "opacity-100"}
        `}
      >
<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-22 w-22 hover:scale-120 transition-transform duration-200"
  viewBox="0 0 24 24"
>
  {/* Amber circle background */}
  <circle 
    cx="12" 
    cy="12" 
    r="12" 
    fill="#fbbf24" 
  />
  
  {/* Play/Pause buttons in green */}
  {isPlaying ? (
    <>
      {/* Pause button - two rectangles */}
      <rect x="9" y="7" width="2" height="10" fill="#15803d" />
      <rect x="13" y="7" width="2" height="10" fill="#15803d" />
    </>
  ) : (
    <>
      {/* Play button - triangle */}
      <polygon points="9,7 9,17 17,12" fill="#15803d" />
    </>
  )}
</svg>
      </button>
    </div>
  );
}
