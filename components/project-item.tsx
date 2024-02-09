import { Project, Tool } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Skills from "./skills";

type Props = {
  project: Project;
};

export default function ProjectItem({ project }: Props) {
  const listTools: Tool[] = project.tools.map((tool) => tool);

  return (
    <section className="md:flex md:flex-col md:items-center">
      <div className="text-center">
        <h2 className="text-sky-950 text-4xl font-bold text-center mb-4 uppercase">
          {project.title}
        </h2>
        <h3 className="font-semibold text-zinc-500 italic">
          {project.subtitle}
        </h3>
      </div>

      <div className="relative w-auto min-h-48 my-8 md:min-h-96 md:w-7/12">
        <Image
          src={project.image}
          alt={`Image du projet ${project.title}`}
          fill
          className="rounded-lg object-cover imageProject"
        />
      </div>
      <div className="py-4 text-zinc-500">
        <p>{project.description}</p>
      </div>
      <Skills title="Outils utilisés" listSkill={listTools} />
      <div className="py-4 flex justify-center">
        {project.urlRepo && <Button variant="linkCustom">Repos Github</Button>}
        {project.url && <Button variant="linkCustom">Visiter le site</Button>}
      </div>
    </section>
  );
}
