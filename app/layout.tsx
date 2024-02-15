import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Load the Inter font with the Latin subset
const montserrat = Montserrat({ subsets: ["latin"] });

/**
 * Metadata for the RootLayout component.
 */
export const metadata: Metadata = {
  title: "Portfolio | Accueil",
  description: "Portfolio de Florian Copez, Développeur Web",
};

/**
 * RootLayout component that provides a common layout structure for the application.
 * @param {Object} props - React props containing children components.
 * @returns {JSX.Element} JSX element representing the RootLayout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${montserrat.className}`}>
        {/* Header component */}
        <Header />

        {/* Main content area */}
        <main className="grow m-8 py-8 md:mx-32 xl:mx-60 flex items-center justify-center">
          {children}
        </main>

        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
