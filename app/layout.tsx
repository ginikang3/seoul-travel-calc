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
  // SEO 최적화 타이틀 및 설명
  title: "¿Cuánto cuesta viajar a Seúl? | Calculadora de Presupuesto 2026",
  description: "Calcula tu presupuesto real para viajar a Seúl y Corea del Sur. Precios actualizados de hoteles, comida y transporte para 2026.",
  keywords: ["viaje a corea", "presupuesto seúl", "cuánto cuesta viajar a corea", "turismo corea 2026", "seoul travel guide"],
  
  // OpenGraph 설정 (SNS 공유용)
  openGraph: {
    title: "Calculadora de Presupuesto para Viajar a Seúl 2026",
    description: "Obtén un presupuesto detallado de tu viaje a Corea en un minuto.",
    url: "https://seoul-travel-calc.vercel.app",
    siteName: "Seoul Travel Calc",
    locale: "es_MX",
    type: "website",
  },

  // 구글 서치 콘솔 및 아고다 인증
  verification: {
    // 서치 콘솔에서 새로 확인된 코드로 정밀 수정
    google: "n0h7YBDy8iiuMhb1xrE4NYG3wWCD66K11XfK0bNBRT4", 
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
        {/* head 영역 유지 */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* sw.js 등록 스크립트 유지 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(reg) {
                    console.log('SW registered');
                  }).catch(function(err) {
                    console.log('SW error:', err);
                  });
                });
              }
            `,
          }}
        />

        {/* 비네트(Vignette) 광고 스크립트 유지 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(s){s.dataset.zone='10905743',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))
            `,
          }}
        />

        {/* 인페이지 푸쉬(In-Page Push) 광고 스크립트 유지 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(s){s.dataset.zone='10905748',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))
            `,
          }}
        />
      </body>
    </html>
  );
}