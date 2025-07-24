// src/components/RevealFrom.jsx
import React from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

export function RevealFrom({
  children,
  className = "",
  triggerOnce = true,
  threshold = 0,
  rootMargin = "0px",
  initial = { opacity: 0, x: 0, y: 50 },
  animateIn = { opacity: 1, x: 0, y: 0 },
  animateOut,
  transition = { duration: 0.6, ease: "easeOut" },
  delayIn = 0,    // delay before entrance
  delayOut = 0,   // delay before exit
}) {
  return (
    <InView
      triggerOnce={triggerOnce}
      threshold={threshold}
      rootMargin={rootMargin}
    >
      {({ inView, ref }) => {
        // choose which animation and delay to use
        const variants = {
          hidden: initial,
          visible: animateIn,
          exit: animateOut || initial,
        };
        const current = inView ? "visible" : "exit";

        return (
          <motion.div
            ref={ref}
            className={className}
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{
              ...transition,
              delay: inView ? delayIn : delayOut,
            }}
          >
            {children}
          </motion.div>
        );
      }}
    </InView>
  );
}
