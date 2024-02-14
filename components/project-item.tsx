import { Project, Tool } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ToolsList from "./tools-list";
import Link from "next/link";
import TitlePage from "./title-page";

type Props = {
  project: Project;
};

/**
 * Component displaying details of a project.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {Project} props.project - The project data.
 * @returns {JSX.Element} - The rendered project item component.
 */
export default function ProjectItem({ project }: Props) {
  /**
   * Extracts tools from the project data.
   * @type {Tool[]}
   */
  const listTools: Tool[] = project.tools.map((tool) => tool);

  return (
    <>
      <TitlePage title={project.title} subtitle={project.subtitle} />
      <div className="flex flex-wrap justify-center gap-1 my-8">
        <ToolsList tools={listTools} />
      </div>
      <div className="lg:flex lg:justify-center">
        <div className="relative w-auto min-h-48 lg:w-3/5">
          <Image
            src={project.image}
            alt={`image du projet ${project.title}`}
            width={1500}
            height={750}
            priority
            className="w-full h-full rounded-md imageProject"
          />
        </div>
      </div>

      <div className="text-zinc-500 my-8">
        <p>{project.description}</p>
      </div>
      <div className="flex justify-center gap-4 my-4">
        {project.urlRepo && (
          <Link href={project.urlRepo} legacyBehavior>
            <a target="_blank" rel="noreferrer">
              <Button variant="linkCustom">Repos Github</Button>
            </a>
          </Link>
        )}
        {project.url && (
          <Link href={project.url} legacyBehavior>
            <a target="_blank" rel="noreferrer">
              <Button variant="linkCustom">Visiter le site</Button>
            </a>
          </Link>
        )}
      </div>
    </>
  );
}
