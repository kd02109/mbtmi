import { SvgSize } from '@/types/types';

export default function Magnifier({ width, height, style }: SvgSize) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="currentColor">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333ZM11.3491 13.4704C10.1955 14.2268 8.8158 14.6667 7.33333 14.6667C3.28325 14.6667 0 11.3834 0 7.33333C0 3.28325 3.28325 0 7.33333 0C11.3834 0 14.6667 3.28325 14.6667 7.33333C14.6667 9.35838 13.8459 11.1917 12.5188 12.5188L18.3334 18.3333L17.2727 19.394L11.3491 13.4704Z"
      />
    </svg>
  );
}
