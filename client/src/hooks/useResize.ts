'use client';
import { useState, useEffect, useRef } from 'react';
export default function useResize(answers: string[]) {
  // Ref for the chat container
  const chatDivRef = useRef<HTMLDivElement>(null);

  // State to track window size
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
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

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  useEffect(() => {
    if (chatDivRef.current) {
      //chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight;
      chatDivRef.current.scrollTo(0, chatDivRef.current.scrollHeight);
    }
  }, [answers]);

  return chatDivRef;
}
