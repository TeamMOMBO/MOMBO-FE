import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '<prefix>/shared/styles/global.css';
import Script from 'next/script';
import TanstackQueryProvider from '../../providers/tanstackQueryProvider';
export const metadata: Metadata = {
  title: '맘보 - 맘을 위한 정보',
  description: '맘을 위한 정보',
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
        className={`${pretendard.className} relative mx-auto h-[100dvh] w-390 shadow-xl`}
      >
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
        <Script src='/service-worker.js' />
      </body>
    </html>
  );
}
