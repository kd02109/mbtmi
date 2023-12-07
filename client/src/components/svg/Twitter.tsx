import { SvgSize } from '@/types/types';

export default function Twitter({ width, height }: SvgSize) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none">
      <g clipPath="url(#clip0_307_600)">
        <path
          d="M17.7928 12.7031L28.7208 0H26.1309L16.6425 11.0297L9.06376 0H0.32251L11.783 16.6791L0.32251 30H2.91235L12.9328 18.3523L20.9363 30H29.6775L17.7921 12.7031H17.7928ZM14.2458 16.8258L13.0845 15.165L3.8454 1.94953H7.82321L15.2789 12.615L16.44 14.2758L26.1321 28.1391H22.1548L14.2458 16.8265V16.8258Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_307_600">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
