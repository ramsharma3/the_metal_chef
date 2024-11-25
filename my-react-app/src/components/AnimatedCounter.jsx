import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useSpring, useTransform } from "framer-motion";

function AnimatedCounter({ value, duration = 2, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const numericValue = parseInt(value.replace(/[^0-9.]/g, ""));
  const hasDecimal = value.includes(".");
  const decimalPlaces = hasDecimal ? value.split(".")[1].length : 0;

  const spring = useSpring(0, {
    duration: duration * 1000,
    delay: delay * 1000,
    stiffness: 50,
    damping: 30,
  });

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
      spring.set(numericValue);
    }
  }, [inView, isAnimating, spring, numericValue]);

  const displayed = useTransform(spring, (latest) => {
    const formatted = hasDecimal
      ? latest.toFixed(decimalPlaces)
      : Math.round(latest).toString();
    return formatted;
  });

  return (
    <motion.div
      ref={ref}
      className="relative inline-flex items-center justify-center"
    >
      <motion.span className="tabular-nums text-white font-bold">
        {displayed}
      </motion.span>
      {isAnimating && (
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 0.5, delay: delay }}
          className="absolute inset-0 bg-white/10 rounded-full"
        />
      )}
    </motion.div>
  );
}

export default AnimatedCounter;
