import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Presupuesto Seúl 2026",
  description: "Calcula tu presupuesto para viajar a Seúl",
  // 아고다 인증 메타 태그 추가
  verification: {
    other: {
      "agd-partner-manual-verification": "true",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* 필요한 경우 여기에 직접 태그를 넣을 수도 있지만, Next.js 표준인 위 metadata 방식을 추천합니다. */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}