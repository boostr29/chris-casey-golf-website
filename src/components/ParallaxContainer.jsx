// src/components/ParallaxContainer.jsx
import React, { useState, useRef, useCallback } from "react";

export function ParallaxContainer({
  children,
  intensity = 20,      
  className = "",      
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left  - rect.width  / 2) / (rect.width  / 2);
    const relY = (e.clientY - rect.top   - rect.height / 2) / (rect.height / 2);
    setOffset({ x: -relX * intensity, y: -relY * intensity });
  }, [intensity]);

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`overflow-visible ${className}`}
    >
      <div
        className="transition-transform duration-200 ease-out"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        {children}
      </div>
    </div>
  );
}
