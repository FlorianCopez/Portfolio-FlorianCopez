import { slugToTitle } from "@/utils/slugToTitle";
import { Metadata } from "next";

/**
 * Props for the ProjectLayout component.
 */
type Props = {
  params: { slug: string };
};

/**
 * Generate metadata for the ProjectLayout based on the provided parameters.
 * @param {Props} params - Parameters including the project slug.
 * @returns {Promise<Metadata>} Promise resolving to metadata for the project.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Generate title based on the project slug
  const title = slugToTitle(params.slug);

  // Return metadata including the generated title
  return {
    title: `Projet | ${title}`,
  };
}

/**
 * ProjectLayout component.
 * @param {React.ReactNode} children - The children components to be rendered within the layout.
 * @returns {JSX.Element} JSX element representing the ProjectLayout.
 */
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
