import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import { FC, useState, useEffect } from 'react';

interface Props extends HTMLMotionProps<'div'> {
  text: string;
  delay?: number;
  duration?: number;
}

const WavyText: FC<Props> = ({
  text,
  delay = 0,
  duration = 0.05,
  ...props
}: Props) => {
  const letters = Array.from(text);
  const [animationState, setAnimationState] = useState('visible');

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: i * delay,
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  useEffect(() => {
    let timeout: any;
    if (animationState === 'hidden') {
      timeout = setTimeout(() => {
        setAnimationState('visible');
      }, 2000); // 1 second delay
    }
    return () => clearTimeout(timeout);
  }, [animationState]);

  return (
    <motion.h1
      style={{ display: 'flex', overflow: 'hidden' }}
      variants={container}
      initial="hidden"
      animate={animationState}
      onAnimationComplete={() => {
        if (animationState === 'visible') {
          setAnimationState('hidden');
        }
      }}
      className="text-white text-3xl font-bold mt-4"
      {...props}>
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default WavyText;
