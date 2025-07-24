import React, { useState, useRef, useCallback } from "react";

export function ParallaxImage({
  src,
  alt,
  intensity = 20,      // how far (in px) the image will move at max
  className = "",      // any additional Tailwind classes
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top  - rect.height / 2) / (rect.height / 2);

    // move in the opposite direction:
    setOffset({
      x: -relX * intensity,
      y: -relY * intensity,
    });
  }, [intensity]);

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="max-w-[250px] lg:max-w-[280px] md:max-w-[220px] bg-white px-4 pt-4 pb-8 lg:pb-18 md:pb-12 z-2 absolute transition delay-150 duration-300 ease-in-out"
    >
      <img
        src={src}
        alt={alt}
        className="block w-full h-auto transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      />
    </div>
  );
}
