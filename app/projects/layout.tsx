import { Metadata } from "next";

/**
 * Metadata configuration for the Projects page.
 */
export const metadata: Metadata = {
  title: "Projets",
};

/**
 * Functional component for the layout of the Projects page.
 * @param {React.ReactNode} children - The children components to be rendered within the layout.
 * @returns {JSX.Element} JSX element representing the Projects layout.
 */
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
