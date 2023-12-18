import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import GoogleAnalytics from '@/components/layout/GoogleAnalytics';
import { CONFIG } from '@/config';

declare global {
  interface Window {
    Kakao: any;
  }
}

const openSans = Open_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: CONFIG.title,
  description: CONFIG.description,
  openGraph: {
    title: `${CONFIG.title}/chating-list`,
    description: CONFIG.description,
    images: CONFIG.logoImage,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kn" className="bg-bgGray">
      <head>
        <meta
          name="google-site-verification"
          content="E7trMkCVgst0p5vigHXJLOlSK8f83P4s1cqgZS8-ctE"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1871872713282095"
          crossOrigin="anonymous"></script>
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
      </head>
      <body className={`${openSans.className}`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
