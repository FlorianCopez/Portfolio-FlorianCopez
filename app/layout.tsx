import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Florian Copez",
  description: "Portfolio de Florian Copez, Développeur Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className} min-h-screen`}>
        <Header />
        <main className="grow flex items-center justify-center h-full m-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
