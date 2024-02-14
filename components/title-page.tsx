import React from "react";

type Props = {
  title: string;
  subtitle: string;
};

/**
 * Component displaying a title and subtitle for a page.
 *
 * @component
 * @param {TitlePageProps} props - The properties of the component.
 * @returns {JSX.Element} - The rendered title page component.
 */
export default function TitlePage({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-sky-950 text-3xl font-bold text-center mb-4 uppercase">
        {title}
      </h2>
      <span className="font-semibold text-zinc-500 italic">{subtitle}</span>
    </div>
  );
}
