import { Sidebar } from "@/components/layout/sidebar/sidebar";
import Navbar from "@/components/layout/navbar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Birble AI",
  description: "Your NextGen AI and NFTs platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen main-layout overflow-hidden">
          <Sidebar />
          <main className="overflow-hidden flex flex-col">
            <Navbar />
            <div className="px-[22px] grow overflow-y-auto">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
