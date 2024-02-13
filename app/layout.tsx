import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Acceuil",
  description: "Portfolio de Florian Copez, Développeur Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <Header />
        <main className="grow m-8 py-8 md:mx-32 xl:mx-60 flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
