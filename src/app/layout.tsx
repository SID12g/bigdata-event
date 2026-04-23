import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const DnfBitBitSans = localFont({
  src: "./fonts/DNFBitBitv2.otf",
  variable: "--font-wanted-sans",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "빅데이터 퀴즈",
  description:
    "서울시립대학교 빅데이터혁신융합대학사업단에서 운영하는 이벤트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${DnfBitBitSans.variable} h-full antialiased`}>
      <body className="flex items-center justify-center">{children}</body>
    </html>
  );
}
