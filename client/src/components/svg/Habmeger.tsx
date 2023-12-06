import { SvgSize } from '@/types/types';

export default function Habmeger({ width, height, style }: SvgSize) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 15"
      className={style}
      fill="currentColor">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.5556 1H0V0H19.5556V1ZM19.5556 7.98412H0V6.98412H19.5556V7.98412ZM0 14.9683H19.5556V13.9683H0V14.9683Z"
      />
    </svg>
  );
}
