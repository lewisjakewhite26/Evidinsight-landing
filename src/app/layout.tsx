import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EvidInsight | Modern Academic Evaluation Tools",
  description: "We make excellence evident. From administrative burden to instant insight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased min-h-screen flex flex-col`}>
        {/* Navigation Header */}
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="EvidInsight Logo" className="h-7 md:h-8 w-auto hover:opacity-80 transition-opacity" />
              <span className="text-xl font-bold tracking-tight text-white">EvidInsight</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors hidden sm:block">Log in</a>
              <a href="#" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(184,165,255,0.4)]">
                Sign up now
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 mt-24">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} EvidInsight. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
