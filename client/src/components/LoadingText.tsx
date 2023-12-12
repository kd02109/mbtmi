'use client';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const textStates = [
  '붕어빵 굽는 중',
  '🔥붕어빵 굽는 중🔥',
  '🔥🔥붕어빵 굽는 중🔥🔥',
  '🔥붕어빵 굽는 중🔥',
];

export default function LoadingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % textStates.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-4 text-3xl font-bold text-bgBrown w-[100%] text-center">
      {textStates[currentIndex]}
    </motion.div>
  );
}
