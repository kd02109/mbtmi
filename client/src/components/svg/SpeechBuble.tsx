export default function SpeechBuble({
  message,
  title,
  x,
}: {
  message: string;
  title: string;
  x?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="149"
      viewBox="0 0 171 149">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M85.5 126.441C132.72 126.441 171 98.3337 171 63.6614C171 28.9892 132.72 0.881714 85.5 0.881714C38.2797 0.881714 0 28.9892 0 63.6614C0 86.1551 16.1111 105.886 40.3224 116.971L30.057 145.816C29.4097 147.635 31.4598 149.224 33.06 148.145L67.3269 125.02C73.1836 125.951 79.2638 126.441 85.5 126.441Z"
        fill="#401D1D"
      />
      <text x={x ? x : '15%'} y="48%" fill="#FEE502" fontSize="25">
        {title} {message}
      </text>
    </svg>
  );
}
