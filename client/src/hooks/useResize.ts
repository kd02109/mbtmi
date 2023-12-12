'use client';
import { useState, useEffect, useRef } from 'react';
export default function useResize() {
  // Ref for the chat container
  const chatDivRef = useRef<HTMLDivElement>(null);

  // State to track window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Effect to add the resize event listener
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to scroll to the bottom when window size changes
  useEffect(() => {
    if (chatDivRef.current) {
      chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight;
    }
  }, [windowSize]); // Dependency on windowSize
  return chatDivRef;
}
