import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WMS Labeler",
  description: "WMS label generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="theme-color" content="#2c5396" />
        <link rel="manifest" href="/wmslabeler/manifest.json" />
        <script src="/wmslabeler/main.js" defer></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
