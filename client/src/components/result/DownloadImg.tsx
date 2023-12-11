'use client';
import useImageDownload from '@/hooks/useImageDownload';
export default function DownloadImg({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  const handleImgDownload = useImageDownload(src, name);
  return (
    <button
      onClick={handleImgDownload}
      className="text-white text-center font-bold text-xl w-96 py-2 mt-4 bg-bgBrown rounded-3xl max-md:w-[90%]">
      이미지 다운로드
    </button>
  );
}
