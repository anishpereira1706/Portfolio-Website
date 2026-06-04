import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Use MotionValues for raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for different layers to create a "liquid/smoky" trailing effect
  
  // 1. The sharp, precise dot
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 0.1 });

  // 2. The medium, fast smoke layer
  const smokeFastX = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.8 });
  const smokeFastY = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.8 });

  // 3. The large, slow liquid layer
  const smokeSlowX = useSpring(mouseX, { stiffness: 80, damping: 30, mass: 1.5 });
  const smokeSlowY = useSpring(mouseY, { stiffness: 80, damping: 30, mass: 1.5 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive') ||
        target.closest('.interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block overflow-hidden mix-blend-screen">
      
      {/* Slow, large liquid/smoky blob */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-[40px]"
        style={{
          x: smokeSlowX,
          y: smokeSlowY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Medium, fast cyan smoke layer */}
      <motion.div
        className="absolute top-0 left-0 w-20 h-20 bg-cyan-400/30 rounded-full blur-[20px]"
        style={{
          x: smokeFastX,
          y: smokeFastY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 1 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Precise inner ring instead of white dot */}
      <motion.div
        className="absolute top-0 left-0 w-5 h-5 border-[2px] border-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.5 : 1, // Ring expands and fades out on hover
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
};

export default CustomCursor;
