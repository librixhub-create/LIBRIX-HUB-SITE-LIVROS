import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Librix Hub — Criação Profissional de Livros | Diagramação, Capas, Amazon KDP",
  description: "Transforme as suas ideias em livros profissionais. Diagramação, capas, tradução, audiobook e publicação Amazon KDP. Atendemos autores em Portugal, Brasil e Europa.",
  keywords: "criação de livros, diagramação, Amazon KDP, publicar livro, capa de livro, audiobook, tradução de livros",
  authors: [{ name: "LIBRIX HUB" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Librix Hub — Criação Profissional de Livros",
    description: "Transforme as suas ideias em livros profissionais. Diagramação, capas, tradução, audiobook e publicação Amazon KDP.",
    images: ["/og-image.png"],
    locale: "pt_PT",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#F7F3EE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','854543982936212');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img
            height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=854543982936212&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
