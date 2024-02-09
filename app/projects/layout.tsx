import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Projets",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
