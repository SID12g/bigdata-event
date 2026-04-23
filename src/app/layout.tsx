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
  title: "빅데이터 퀴즈",
  description:
    "서울시립대학교 빅데이터혁신융합대학사업단에서 운영하는 이벤트 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${DnfBitBitSans.variable} h-full antialiased`}>
      <body className="flex items-center justify-center">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2T82845"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div className="landscape-lock" />
        {children}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P2T82845');`,
          }}
        />
      </body>
    </html>
  );
}
