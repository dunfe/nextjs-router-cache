import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Router Cache Demo",
  description: "Demonstrating Next.js Router Cache behavior",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <nav className="flex gap-6 p-6 bg-slate-100 border-b border-slate-200 sticky top-0 z-10 shadow-sm">
          <Link 
            href="/" 
            className="hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            href="/a" 
            className="hover:text-blue-600 transition-colors font-medium"
          >
            Route A
          </Link>
          <Link 
            href="/a/b" 
            className="hover:text-blue-600 transition-colors font-medium"
          >
            Route A/B (Sub-route)
          </Link>
        </nav>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
