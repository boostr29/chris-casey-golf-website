// src/components/SectionWithLine.jsx
import React, { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

export function SectionWithLine({
  children,
  direction = "both",              // "left" | "right" | "both"
  rootMargin = "0px 0px -25% 0px",  // how far before/after viewport to trigger
  threshold = 0,                    // percentage of element visible to trigger
  triggerOnce = false,
  duration = 0.8,
  ease = "easeOut",
  delay,                            // optional delay (in seconds)
}) {
  // on mobile always use both
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const dir = isMobile ? "both" : direction;

  // pick transform-origin based on direction
  let originClass = "origin-center";
  if (dir === "left")  originClass = "origin-right";
  if (dir === "right") originClass = "origin-left";

  // build transition object, only include delay if defined
  const transition = { duration, ease };
  if (typeof delay === "number") transition.delay = delay;

  return (
    <div className="relative">
      <div>{children}</div>

      <InView
        triggerOnce={triggerOnce}
        threshold={threshold}
        rootMargin={rootMargin}
      >
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className={`h-[1px] bg-white w-full ${originClass} opacity-50`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={transition}
          />
        )}
      </InView>
    </div>
  );
}
