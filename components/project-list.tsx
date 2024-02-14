import { Project } from "@/types";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projectsList: Project[];
};

/**
 * Component displaying a list of projects.
 *
 * @component
 * @param {ProjectListProps} props - The properties of the component.
 * @returns {JSX.Element} - The rendered project list component.
 */
export default function ProjectList({ projectsList }: Props) {
  return (
    <>
      {projectsList.map((project) => (
        <div
          key={project.id}
          className="transitionCustom my-4 md:flex md:flex-col md:items-center md:my-16 lg:flex-row lg:gap-24 lg:my-36 xl:justify-center"
        >
          <div className="relative w-full h-48 md:h-56 md:w-2/3 lg:min-h-72 lg:w-1/2 xl:w-5/12">
            <Image
              src={project.image}
              alt={`image du projet ${project.title}`}
              width={1500}
              height={750}
              className="w-full h-full imageCustom rounded-md"
            />
          </div>
          <div className="py-4 lg:w-1/2">
            <h4 className="text-center text-xl font-bold text-sky-800">
              {project.title}
            </h4>
            <p className="py-2 text-zinc-500">{project.synopsis}</p>
            <div className="text-center my-4">
              <Link href={`/projets/${project.slug}`}>
                <Button variant="linkCustom">En savoir plus</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
