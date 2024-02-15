import { Metadata } from "next";

/**
 * Metadata configuration for the About page.
 */
export const metadata: Metadata = {
  title: "A propos de moi",
};

/**
 * Functional component for the layout of the About page.
 * @param {React.ReactNode} children - The children components to be rendered within the layout.
 * @returns {JSX.Element} JSX element representing the About layout.
 */
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
