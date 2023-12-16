'use client';
import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { useEffect } from 'react';
export default function NumberCount({
  number,
}: {
  number: number | undefined;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, prev => Math.floor(prev));

  useEffect(() => {
    const controls = animate(count, number ? number : 1000);
    return controls.stop;
  }, [count, number]);
  return <motion.span className="text-red-400">{rounded}</motion.span>;
}
