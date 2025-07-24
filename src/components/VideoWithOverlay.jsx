// src/components/VideoWithOverlay.jsx
import React, { useRef, useState } from "react";

export function VideoWithOverlay({
  src,
  poster,
  aspectRatio = "9/16",            // e.g. "9/16" for portrait, "16/9" for landscape
  overlayClassName = "bg-blue-200", // Tailwind classes for overlay color & opacity
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
        className={`absolute inset-0 w-full h-full object-cover cursor-pointer filter ${
          isPlaying ? "grayscale-0" : "grayscale"
        }`}
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0
          ${overlayClassName}
          pointer-events-none
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
          transition-opacity duration-500 ease-in-out
          ${isPlaying ? "opacity-0" : "opacity-100"}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white hover:scale-110 transition-transform duration-200"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {isPlaying ? (
            <>
              <rect x="6" y="5" width="4" height="14" />
              <rect x="14" y="5" width="4" height="14" />
            </>
          ) : (
            <path d="M8 5v14l11-7z" />
          )}
        </svg>
      </button>
    </div>
  );
}
