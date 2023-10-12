import { SvgSize } from '@/types/types';

export default function Notion({ width, height }: SvgSize) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.77 1.082C8.24602 0.696701 11.754 0.696701 15.23 1.082C17.129 1.294 18.66 2.789 18.883 4.695C19.2952 8.21966 19.2952 11.7803 18.883 15.305C18.66 17.211 17.129 18.706 15.231 18.919C11.7547 19.3044 8.24635 19.3044 4.77 18.919C2.871 18.706 1.34 17.211 1.117 15.306C0.704728 11.781 0.704728 8.21999 1.117 4.695C1.34 2.789 2.871 1.294 4.77 1.082ZM14.575 5.25C14.637 5.595 14.557 5.93 14.237 5.961L13.705 6.057L13.485 14.374C13.017 14.624 12.591 14.762 12.24 14.749C11.673 14.729 11.536 14.534 11.13 13.954L7.824 8.007L7.674 13.643L8.762 13.947C8.762 13.947 8.744 14.628 7.862 14.597L5.422 14.665C5.356 14.51 5.437 14.133 5.687 14.069L6.327 13.9L6.524 6.45L5.644 6.344C5.582 5.999 5.773 5.515 6.266 5.494L8.883 5.395L12.328 11.422L12.467 6.201L11.551 6.054C11.5346 5.96655 11.5371 5.87658 11.5586 5.79021C11.58 5.70384 11.6198 5.6231 11.6752 5.55346C11.7306 5.48383 11.8003 5.42694 11.8797 5.38665C11.959 5.34637 12.0461 5.32364 12.135 5.32L14.575 5.25Z"
      />
    </svg>
  );
}