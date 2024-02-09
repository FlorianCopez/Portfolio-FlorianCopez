import { slugToTitle } from "@/utils/slugToTitle";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = slugToTitle(params.slug);

  return {
    title: `Portfolio | ${title}`,
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
