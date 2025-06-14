import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "My Next App",
  description: "学習中のNext.jsアプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header style={{ backgroundColor: "#eee", padding: "1rem" }}>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

        <main style={{ padding: "1rem" }}>
          {children} {/*各ページの中身がここに入る */}
        </main>

        <footer
          style={{
            backgroundColor: "#f0f0f0",
            padding: "1rem",
            marginTop: "2rem",
          }}
        >
          <p>© 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}
