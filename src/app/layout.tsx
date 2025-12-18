import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rayan Saadani Hassani | Software Engineer",
  description: "Portfolio de Rayan Saadani Hassani, étudiant en génie logiciel et développeur fullstack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={font.className}>{children}</body>
    </html>
  );
}