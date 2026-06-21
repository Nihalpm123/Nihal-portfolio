import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [customText, setCustomText] = useState('');

  // Motion values for the position of the cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for a tactile "magnetic lag" effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on devices that have a precise pointer (desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);
    document.documentElement.classList.add('custom-cursor-active');

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Check if target or parent is a link/button/clickable
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button';

      // Custom hovering effects
      const cursorText = target.getAttribute('data-cursor-text') || target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      const cursorHoverType = target.getAttribute('data-cursor-type') || target.closest('[data-cursor-type]')?.getAttribute('data-cursor-type');

      if (cursorText) {
        setCursorType('text');
        setCustomText(cursorText);
      } else if (cursorHoverType) {
        setCursorType(cursorHoverType);
      } else if (isClickable) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  // Define size and design based on cursor type
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: '#2E54FE',
      borderColor: 'transparent',
      borderRadius: '50%',
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(46, 84, 254, 0.1)',
      borderColor: '#2E54FE',
      borderWidth: 2,
      borderRadius: '50%',
    },
    text: {
      width: 80,
      height: 80,
      backgroundColor: '#2E54FE',
      borderColor: 'transparent',
      borderRadius: '50%',
    },
    drag: {
      width: 64,
      height: 64,
      backgroundColor: '#FF6B35',
      borderColor: 'transparent',
      borderRadius: '24px',
    }
  };

  return (
    <>
      {/* Outer Spring Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
        }}
        animate={cursorType}
        variants={variants}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
      >
        {cursorType === 'text' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold text-white uppercase tracking-widest text-center"
          >
            {customText}
          </motion.span>
        )}
        {cursorType === 'drag' && (
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
            DRAG
          </span>
        )}
      </motion.div>

      {/* Inner Dot (Instant reaction, no spring lag) */}
      {cursorType === 'default' && (
        <motion.div
          className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-blue rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
          style={{
            x: cursorX,
            y: cursorY,
          }}
        />
      )}
    </>
  );
}
