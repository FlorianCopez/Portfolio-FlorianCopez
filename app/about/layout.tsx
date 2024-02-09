import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | A propos de moi",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="md:flex md:p-16 md:gap-24">{children}</div>;
}
