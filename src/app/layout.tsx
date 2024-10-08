import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '<prefix>/shared/styles/global.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='kr' className={`${pretendard.variable}`}>
      <body
        className={`${pretendard.className} mx-auto h-[100dvh] w-390 shadow-xl`}
      >
        {children}
        <Script src='/public/service-worker.js' />
      </body>
    </html>
  );
}
