import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Script from "next/script";

const DnfBitBitSans = localFont({
  src: "./fonts/DNFBitBitv2.otf",
  variable: "--font-wanted-sans",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "캐치! 캐치! 빅데이터 퀴즈",
  description:
    "서울시립대학교 빅데이터혁신융합대학사업단에서 운영하는 이벤트 페이지입니다.",
  openGraph: {
    images: "/images/og.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${DnfBitBitSans.variable} h-full antialiased`}>
      <body className="flex items-center justify-center">
        <div className="landscape-lock" />
        {children}
      </body>
    </html>
  );
}
