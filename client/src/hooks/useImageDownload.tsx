'use client';
import { useEffect, useState } from 'react';
export default function useImageDownload(src: string, name: string) {
  const [isDownload, setIsDownload] = useState(false);
  const handleImgDownload = () => {
    setIsDownload(true);
  };
  useEffect(() => {
    if (isDownload) {
      const a = document.createElement('a');
      a.href = src;
      a.download = name;
      document.removeChild(a);
      setIsDownload(false);
    }
  }, [isDownload, src, name]);
  return handleImgDownload;
}
