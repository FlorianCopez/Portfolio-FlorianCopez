import { Project, Tool } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ToolsList from "./tools-list";
import Link from "next/link";

type Props = {
  project: Project;
};

export default function ProjectItem({ project }: Props) {
  const listTools: Tool[] = project.tools.map((tool) => tool);

  return (
    <section className="md:flex md:flex-col md:items-center ">
      <div className="mt-8 mb-16 text-center">
        <h2 className="text-sky-950 text-4xl font-bold text-center mb-4 uppercase">
          {project.title}
        </h2>
        <h3 className="font-semibold text-zinc-500 italic">
          {project.subtitle}
        </h3>
        <div className="flex flex-wrap justify-center gap-1 py-4 ">
          <ToolsList tools={listTools} />
        </div>
      </div>

      <div className="relative w-auto min-h-48 my-8 md:min-h-96 md:w-8/12">
        <Image
          src={project.image}
          alt={`Image du projet ${project.title}`}
          fill
          className="rounded-lg object-cover imageProject"
        />
      </div>
      <div className="mt-16 mb-8 py-4 text-zinc-500 md:px-16">
        <p>{project.description}</p>
      </div>
      <div className="py-4 mb-8 flex justify-center gap-4">
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
    </section>
  );
}
