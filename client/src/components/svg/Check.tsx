import { SvgSize } from '@/types/types';

export default function Check({ width, height, style }: SvgSize) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 20"
      fill="none"
      className={style}>
      <rect width="24" height="20" rx="10" fill="#FF5C48" />
      <path
        d="M6 10L10 14L18 6"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
