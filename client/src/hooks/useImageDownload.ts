'use client';
export default function useImageDownload(
  src: string,
  name: string,
): [() => void] {
  const handleImgDownload = () => {
    const a = document.createElement('a');
    a.href = src;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return [handleImgDownload];
}
