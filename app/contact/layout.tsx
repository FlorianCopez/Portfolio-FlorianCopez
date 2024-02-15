import { Metadata } from "next";

/**
 * Metadata configuration for the Contact page.
 */
export const metadata: Metadata = {
  title: "Contact",
};

/**
 * Functional component for the layout of the Contact page.
 * @param {React.ReactNode} children - The children components to be rendered within the layout.
 * @returns {JSX.Element} JSX element representing the Contact layout.
 */
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
